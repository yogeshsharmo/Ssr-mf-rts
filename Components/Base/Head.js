import React from "react";
import Meta from "./Meta";

const Head = ({ meta }) => {
	return (
		<head>
			<Meta metaData={meta} />
			<link rel="shortcut icon" href="/_react_base/client/favicon.png" />
			<link rel="manifest" href="/_react_base/client/manifest.json" />
			<link rel="stylesheet" href="/_react_base/client/global.css" />
			<link rel="stylesheet" href="/_react_base/client/main.css" />
			{/* <script src="http://localhost:3001/_react_base/container.js"></script> */}
			{/* <script src="http://localhost:8081/scripts/remoteEntry.js"></script> */}
		</head>
	);
};

export default Head;
