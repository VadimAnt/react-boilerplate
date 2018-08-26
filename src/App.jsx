import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store from './store';
import history from './store/history';
import Navbar from './components/navbar/navbar.component';
import routes from './routes';

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
