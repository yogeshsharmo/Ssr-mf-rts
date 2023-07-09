// const stack = require("callsite");
import {stack} from "callsite"
import { v4 as uuidv4 } from "uuid";
import { insertInRoute, useDataContext } from "../store/Context";
import { isPromise } from "./general";

// Function to get the relative path from file to caller
export const getRelativePath = (caller) => {
	if (typeof window === "undefined") {
		const path = require("path");
		return path.relative(__dirname, caller);
	}
};

// Loader Data function
export const useLoaderData = async () => {
	if (typeof window === "undefined") {
		const context = useDataContext();
		let route;
		// Check Route for file this function is called in
		stack().forEach(function (site) {
			if (
				site.getFileName()?.includes("pages") ||
				site.getFileName()?.includes("Pages") ||
				site.getFileName()?.includes("Components") ||
				site.getFileName()?.includes("components")
			) {
				route = site.getFileName();
			}
		});

		// Create a new ID for the component
		const uid = uuidv4();

		// Get Relative path to the caller file
		const relativeRoute = getRelativePath(`${route}`);
		// Call the loader function here
		import(`${relativeRoute}`).then((res) => {
			const { loader } = res;
			// Check to see i the user has defined a Loader function in the Component file
			if (typeof loader === "undefined") {
				throw Error(
					`Loader function is not defined. Please define a loader function in ${route}`
				);
			}

			// Calling the loader function from the file
			const getLoaderData = loader();

			// console.log(getLoaderData);
			// console.log(relativeRoute);

			// UID already exists functions
			if (context[`${route}`]) {
			} else {
				// Create a new UID functions
				context[`${route}`] = { id: uid };
			}

			// Call Apis from the loader data hook
			if (getLoaderData?.api) {
				// Store API data from the component in the variable
				const apiData = getLoaderData.api;
				// If the user gives an array in the api field
				if (Array.isArray(apiData) && apiData?.length > 0) {
					console.log("Hello array");
				} else if (
					// If the user gives an object
					typeof apiData === "object" &&
					!Array.isArray(apiData) &&
					apiData !== null
				) {
					if (apiData?.name && apiData?.repo) {
						if (!context[`${route}`][`${apiData?.name}`]) {
							insertInRoute({
								route,
								apiCall: apiData.repo,
								name: apiData.name,
								body: apiData?.params,
								ctx: context,
							});
						}

						if (isPromise(context[`${route}`][`${apiData?.name}`])) {
								throw context[`${route}`][`${apiData?.name}`];
						}
					}
				}
			}
		});

		// console.log(context[`${route}`]);

		// Return the values for path of the component
		// and the id of the component to be accessible throughout the caller file.
		// FIXME Think of a way to make this without async await
		return {
			path: route,
			id: uid,
		};
	}
};
