import React, { useEffect } from "react";

// import { useDataContext } from "../store/Context";

import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes";

import registerServiceWorker from "./utils/service-worker";

export default function App() {
	// const apiData = useDataContext();
	useEffect(() => {
		registerServiceWorker();
	}, []);

	return (
		<Routes>
			{routes.map((route, key) => {
				const { path, component: Component} = route;
				// Meta();
				return (
					<Route
						key={key}
						path={path}
						element={<Component 
              // apiData={apiData}
               />}
					/>
				);
			})}
		</Routes>
	);
}
