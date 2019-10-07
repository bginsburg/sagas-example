import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import logo from './logo.svg';
import Data from './Data';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          Click to show data
          <Data/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
