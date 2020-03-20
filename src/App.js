import React from 'react';
import Posts from './component/post'

import './App.css';
import {Provider} from 'react-redux'
import store from './store'



function App() {
  return (
    <Provider store={store}>
       <div className="App">

     <Posts />
   </div>
    </Provider>
   
  );
}

export default App;
