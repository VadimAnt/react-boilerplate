import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store from './store';
import history from './store/history';
import routes from './routes';

import Navbar from './components/navbar/Navbar';
import './css/main.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="app">
            <Navbar />
            {routes}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
