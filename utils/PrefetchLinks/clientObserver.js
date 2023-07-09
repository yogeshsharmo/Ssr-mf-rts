export const clientObserver = (allLinks, count) => {
	// Create our observer
	const observer = new IntersectionObserver((entries) => {
		// Get all the links in the viewport elements
		entries.forEach(({ target, isIntersecting }) => {
			[...target.querySelectorAll("a")]?.map((link) => {
				if (isIntersecting) {
					const tag = link.attributes.href.value;
					if (!allLinks[tag]) {
						allLinks[tag] = count;
						count++;
					}
				}
			});
		});
	});

	// Observe all elements with IDs
	const elemsWithIds = document.querySelectorAll("*[id]");
	elemsWithIds.forEach((elem) => observer.observe(elem));
};
