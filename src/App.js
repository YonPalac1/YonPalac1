import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux'
import generateStore from './redux/store';

import Home from './pages/Home';
import Project from './pages/Project';


const App = () => {
  const store = generateStore()
  return (
    <Provider store = {store}>
      <div className='bg-primary relative'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
        </Routes>  
      </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
