const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require("@module-federation/node");

module.exports = {
    client: new ModuleFederationPlugin({
        name: "Consumer",
        filename: "container.js",
        remotes: {
            base: "base@http://localhost:3001/client/remoteEntry.js",            
        },
        shared: [{ "react": deps.react, "react-dom": deps["react-dom"] }],
    }),
    server: [
        new NodeFederationPlugin({
            name: "Consumer",
            library: { type: "commonjs-module" },
            filename: "remoteEntry.js",
            remotes: {
                base: "base@http://localhost:3001/server/remoteEntry.js"
            },
            shared: [{ "react": deps.react, "react-dom": deps["react-dom"] }],
        }),
        new StreamingTargetPlugin({
            name: "Consumer",
            library: { type: "commonjs-module" },            
            remotes: {
                base: "base@http://localhost:3001/server/remoteEntry.js"
            },
        }),
    ]
}