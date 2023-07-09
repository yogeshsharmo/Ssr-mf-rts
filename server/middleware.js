const compress = require("compression");

module.exports = (express, app, done) => {
  // static path where files such as images and js will be served from
  app.use(compress());
  app.use(express.static("dist"));

  const renderThunk = require('./server-entry').default;
  const serverRender = renderThunk();
  app.get('/*', serverRender);

  done();
};
