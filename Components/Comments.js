import React from "react";
import { allProducts } from "../repositories";
import { getServerData, useDataContext } from "../store/Context";

export default function Comments() {
	getServerData("products", allProducts, {name: ""});
	const apiData = useDataContext();
	return (
		<>
			{apiData?.products?.data?.products.map((obj, index) => (
			<div key={index}>
				<h1>{obj.title}</h1>
				<p>{obj.description}</p>
			</div>
      ))}
		</>
	);
}
