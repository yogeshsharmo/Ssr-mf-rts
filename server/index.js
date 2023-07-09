const express = require('express');
const initMiddleware = require('./middleware');


const app = express();
const PORT = 3000;

// if (module.hot) {
// 	// module.hot.dispose(console.log)
// 	module.hot.accept('./index', () => {
// 	  console.log('is hot reloading');
// 	  require('./index');
// 	});
//   }

const done = () => {
	app.listen(PORT, () => {
			console.log(`Listening at ${PORT}...`);
		})
		.on("error", function (error) {
			if (error.syscall !== "listen") {
				throw error;
			}
			const isPipe = (portOrPipe) => Number.isNaN(portOrPipe);
			const bind = isPipe(PORT) ? "Pipe " + PORT : "Port " + PORT;
			switch (error.code) {
				case "EACCES":
					console.error(bind + " requires elevated privileges");
					process.exit(1);
				case "EADDRINUSE":
					console.error(bind + " is already in use");
					process.exit(1);
				default:
					throw error;
			}
		});
  };

initMiddleware(express, app, done);

module.exports = app;
