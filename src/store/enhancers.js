const enhancers = [];
const env = process.env.REACT_APP_NODE_ENV || 'development';
if (env === 'development' || env === 'staging') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

export default enhancers;
