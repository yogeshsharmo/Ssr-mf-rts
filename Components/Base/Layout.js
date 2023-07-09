import React from "react";
import Head from "./Head";
import Scripts from "./Scripts.js";

export default function Layout({ children, meta }) {
	return (
		<html lang="en">
			<Head meta={meta} />
			<body>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<b>Enable JavaScript to run this app.</b>`,
					}}
				/>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
