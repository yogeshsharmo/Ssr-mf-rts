// const { readFileSync } = require("fs");
// const path = require("path");

// // Handling Errors on build
// function handleErrors(fn) {
// 	return async function (req, res, next) {
// 		try {
// 			return await fn(req, res);
// 		} catch (x) {
// 			next(x);
// 		}
// 	};
// }

// // Waiting to webpack to finish build
// async function waitForWebpack() {
// 	while (true) {
// 		try {
// 			readFileSync(path.resolve(__dirname, "../dist/_react_base/main.js"));
// 			return;
// 		} catch (err) {
// 			console.log(
// 				"Could not find webpack build output. Will retry in a second..."
// 			);
// 			await new Promise((resolve) => setTimeout(resolve, 1000));
// 		}
// 	}
// }

// module.exports = { handleErrors, waitForWebpack };
