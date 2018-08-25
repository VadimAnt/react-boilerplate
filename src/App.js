import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.component';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        {routes}
      </div>
    );
  }
}

export default App;
