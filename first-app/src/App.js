import React, { Component } from 'react';
// import Calculator from './componentes/calculator/calculator';
import Main from './componentes/main/main'
// import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

class App extends Component {
  // static world = 'mundo';
  // world = 'mundo';
  render() {
    return ( // Está devolviendo el objeto JSX
      <div className="App">
        {/* <Calculator /> */}
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    );
  }
}

export default App;
