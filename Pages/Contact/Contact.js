import React, { Suspense, lazy } from "react";

import Layout from "../../Components/Base/Layout";
import NavBar from "../../Components/NavBar";
import Spinner from "../../Components/Spinner";

import logo from "../../assets/image1.jpg";
// import { useLoaderData } from "../../../utils/loaderData.js";

const Comments = lazy(() =>
  import("../../Components/Comments" /* webpackPrefetch: true */)
);
const Sidebar = lazy(() =>
  import("../../Components/Sidebar" /* webpackPrefetch: true */)
);
const Post = lazy(() =>
  import("../../Components/Post" /* webpackPrefetch: true */)
);

// export const loader = () => {
// 	return "Hello from contact"
// }

export default function Contact() {
  // useLoaderData()
  return (
    <Layout>
      <NavBar />
      <h2>Contact Page</h2>
      <aside className="sidebar">
        <Suspense fallback={<Spinner />}>
          <Sidebar />
        </Suspense>
      </aside>
      <img src={logo} width={200} height={100} alt="hello" />
      <article className="post">
        <Suspense fallback={<Spinner />}>
          <Post />
        </Suspense>
        <section className="comments">
          <h2>Comments</h2>
          <Suspense fallback={<Spinner />}>
            <Comments />
          </Suspense>
        </section>
        <h2>Thanks for reading!</h2>
      </article>
    </Layout>
  );
}
