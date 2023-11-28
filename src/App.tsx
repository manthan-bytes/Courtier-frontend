import React from 'react';
import './config/axios.config';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './routing/AppRouting';
import Header from './common/header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouting />
      </BrowserRouter>
    </>
  );
}

export default App;
