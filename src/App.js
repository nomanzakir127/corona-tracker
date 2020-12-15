import './App.css';
import React from 'react'
import Header from './components/Header';
import MainPage from './components/MainPage';
import Chart from './components/Chart/Chart';
import {CovProvider} from './Context/ContextProvicer'

function App() {

  return (
    <CovProvider>
      <Header></Header> 
      <MainPage></MainPage>
      <Chart></Chart> 
    </CovProvider>
  );
}

export default App;
