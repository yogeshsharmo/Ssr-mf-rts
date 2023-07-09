import React from "react";
import { getMeta } from "../../utils";

const Meta = ({ metaData }) => {
	if (!metaData) {
		metaData = getMeta();
	}

	return (
		<>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#ffffff" />
			{metaData?.title && <title>{metaData?.title}</title>}
			{metaData?.og_title && (
				<meta property="og:title" content={metaData?.title} key="og-title" />
			)}
			{metaData?.meta_desc && (
				<meta name="description" content={metaData?.meta_desc} />
			)}
		</>
	);
};

export default Meta;
