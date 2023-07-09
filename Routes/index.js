import React from "react";

import { contentMeta } from "../Pages/Content/ContentMeta.js";
import { contactMeta } from "../Pages/Contact/ContactData.js";

import Content from "../Pages/Content/Content.js";
import Contact from "../Pages/Contact/Contact.js";

const Found404 = () => {
	return (
		<>
			<h1>Not Found</h1>
		</>
	);
};

export const routes = [
	{
		path: "/home",
		component: Content,
		meta: contentMeta,
	},
	{
		path: "/contact",
		component: Contact,
		meta: contactMeta,
	},
	{
		path: "*",
		component: Found404,
		meta: contentMeta,
	},
];
