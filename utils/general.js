// Check for Promise/
export const isPromise = (p) => {
	return p && Object.prototype.toString.call(p) === "[object Promise]";
};

// Export Meta Object
let handleMetaObject = {};
export const handleMeta = (meta) => {
	handleMetaObject = meta ? meta : {};
	return;
};
export const getMeta = () => {
	return handleMetaObject;
};

// Throttle Scroll function
export const throttle = (callbackFn, limit) => {
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