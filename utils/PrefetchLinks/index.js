import { clientObserver } from "./clientObserver";

export const PrefetchLinks = (allLinks, count) => {
	// Get Client observer
	clientObserver(allLinks, count);
};
