const fs = require('fs');
const { h } = require('preact');
const express = require('express');
const { join, basename } = require('path');
const compression = require('compression')();
const render = require('preact-render-to-string');
const bundle = require('./build/ssr-build/ssr-bundle');

const App = bundle.default;
const { PORT=3000 } = process.env;
// TODO: improve this?
const RGX = /<div id="app"[^>]*>.*?(?=<script)/i;

const assets = join(__dirname, 'build');
const template = fs.readFileSync('./build/index.html', 'utf8');
const favicon = require('serve-favicon')(join(assets, 'favicon.ico'));

const logging = require('./lib/logging');

function setHeaders(res, file) {
  let cache = basename(file) === 'sw.js' ? 'private,no-cache' : 'public,max-age=31536000,immutable';
  res.setHeader('Cache-Control', cache); // disable service worker cache
}

// [START debug]
// Activate Google Cloud Trace and Debug when in production
if (process.env.NODE_ENV === 'production') {
  // require('@google-cloud/trace-agent').start();
  // require('@google-cloud/debug-agent').start();
}
// [END debug]

express()
  .use(logging.requestLogger)
  .use(favicon)
  .use(compression)
  .use(express.static(assets, { setHeaders }))
  .get('*', (req, res) => {
    let url = req.url;
    let body = render(h(App, { url }));
    res.send(template.replace(RGX, body));
  })
  // Add the error logger after all middleware and routes so that
  // it can log errors from the whole application. Any custom error
  // handlers should go after this.
  // [START errors]
  .use(logging.errorLogger)
  .listen(PORT, err => {
    if (err) throw err;
    console.log(`> Running on localhost:${PORT}`);
  });
