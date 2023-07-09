import React, { useState, Suspense, lazy, useEffect } from "react";

import Layout from "../../Components/Base/Layout";
import NavBar from "../../Components/NavBar";
import Spinner from "../../Components/Spinner";

// const Contact = lazy(() => import("remote/top-nav"));

// const Contact = lazy(() => import("core/Contact"));

// const Comments = lazy(() =>
// 	import("../../Components/Comments" /* webpackPrefetch: true */)
// );
// const Second = lazy(() =>
// 	import("../../Components/Second" /* webpackPrefetch: true */)
// );
// const Sidebar = lazy(() =>
// 	import("../../Components/Sidebar" /* webpackPrefetch: true */)
// );
// const Post = lazy(() =>
// 	import("../../Components/Post" /* webpackPrefetch: true */)
// );

// import usePrefetch from "../../../utils/PrefetchLinks/usePrefetch";
// import { useLoaderData } from "../../../utils/loaderData.js";

const BaseHeader = React.lazy(() => import('base/Header'));


import "../../assets/color.css";
// import { allProducts } from "../../../repositories";

// Loader function to make server side calls
// export const loader = () => {
// 	return {
// 		api: {
// 			name: "coms",
// 			repo: allProducts,
// 			params: {}
// 		},
// 	};
// };

export default function Content({ apiData }) {
	// usePrefetch();
	// useLoaderData(); // Call the loader data hook

	return (
		<Layout meta={apiData?.meta?.data?.data}>
			<Suspense fallback={<Spinner />}>
				<BaseHeader />
			</Suspense>
			<div className="back">
				{/* <NavBar /> */}
				<aside className="sidebar" id="sidebar">
					{/* <Suspense fallback={<Spinner />}>
						<Sidebar />
					</Suspense> */}
					{/* <Suspense fallback={<Spinner />}>
						<Second />
					</Suspense> */}
				</aside>
				<article className="post">
					{/* <Suspense fallback={<Spinner />}>
						<Post />
					</Suspense> */}
					<section className="comments" id="comments">
						<h2>Comments</h2>
						{/* <Suspense fallback={<Spinner />}>
							<Comments />
						</Suspense> */}
					</section>
					<h2>Thanks for reading!</h2>
					<div id="check">
						<a href="/contact">Contact</a>
					</div>
				</article>
			</div>
		</Layout>
	);
}
