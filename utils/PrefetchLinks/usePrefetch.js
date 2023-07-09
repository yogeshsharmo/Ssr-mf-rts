import React, { useEffect } from "react";

import { PrefetchLinks } from "./index";

export let allLinks = {};
let checkLinks = {};
let count = 0;

// Throttle Scroll function
const throttle = (callbackFn, limit) => {
	let wait = false;
	return function () {
		if (!wait) {
			callbackFn.call();
			wait = true;
			setTimeout(function () {
				wait = false;
			}, limit);
		}
	};
};

// Add link to document head
const addLink = () => {
	PrefetchLinks(allLinks, count);
	Object.keys(allLinks)?.forEach((element) => {
		if (!Object.keys(checkLinks).includes(element)) {
			checkLinks[element] = count;
			requestIdleCallback(
				() => {
					const link = document.createElement("link");
					link.rel = "prefetch";
					link.href = element;
					link.as = "document";
					document.head.appendChild(link);
				},
				{ timeout: 23 }
			);
		}
	});
};

// TODO Test this
// FIXME THIS FEATURE IS NOT TESTED
// Using XHR prefetch strategy specifically for browser without prefetch support like Safari
const xhrPrefetchStrategy = (url) => {
	return new Promise((resolve, reject) => {
		const req = new XMLHttpRequest();
		req.open(`GET`, url, (req.withCredentials = true));
		req.onload = () => {
			req.status === 200 ? resolve() : reject();
		};
		req.send();
	});
};

// UsePrefetch hook
const usePrefetch = () => {
	useEffect(() => {
		// Function to check if prefetch if supported in the browser
		const support = (feature) => {
			const link = document.createElement("link");
			return (link.relList || {}).supports && link.relList.supports(feature);
		};

		// Check if the user clicked on a link and update the list
		document.addEventListener("click", (e) => {
			if (e.target?.tagName === "A") {
				checkLinks = {};
				allLinks = {};
				count = 0;
			}
		});

		// Check if the browser supports prefetch through links
		// If yes then add the scroll listener  with throttle and requestIdleCallback
		// to prefetch links, else do a XHR request to prefetch the required links
		if (support("prefetch")) {
			document.addEventListener("scroll", throttle(addLink, 100));
		} else {
			PrefetchLinks(allLinks, count);
			Object.keys(allLinks)?.forEach((element) => {
				if (!Object.keys(checkLinks).includes(element)) {
					checkLinks[element] = count;
					xhrPrefetchStrategy(element);
				}
			});
		}
	}, []);

	return;
};

export default usePrefetch;
