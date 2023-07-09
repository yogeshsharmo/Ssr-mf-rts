import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { DataProvider, GlobalData } from "../store/Context";
import { ChunkExtractor } from '@loadable/server'
import path from "path";
import App from "../App";
import { renderToString } from 'react-dom/server';
export default async (req, res, next) => {
	const statsFile = path.resolve('dist/_react_base/server/loadable-stats.json')
	const extractor = new ChunkExtractor({ statsFile,
		publicPath:  "http://localhost:3000/_react_base/client", })
	const jsx = extractor.collectChunks(<DataProvider data={{}}>
											<StaticRouter location={req.url}>
												<App />
											</StaticRouter>
										</DataProvider>)
	const html = renderToString(jsx)
	const scriptTags = extractor.getScriptTags() 
	const linkTags = extractor.getLinkTags()
	// const styleTags = extractor.getStyleTags() 
	const htmlTemp = `<html><head>${linkTags}</head><body><div id="root">${html}</div>
	${scriptTags}</body></html>`
	res.send(htmlTemp)
};

