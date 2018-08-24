import React, { Component } from 'react';
import routes from './routes'
import Navbar from './components/Navbar';

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
