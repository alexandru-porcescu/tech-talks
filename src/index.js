// @flow
/* eslint-disable no-console */

import app from './server';
import http from 'http';

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3000, error => {
  if (error) {
    console.log(error);
  }
  console.log('🚀 started');
});

// https://medium.com/flow-type/new-flow-errors-on-unknown-property-access-in-conditionals-461da66ea10
// $FlowFixMe
if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  // $FlowFixMe
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
