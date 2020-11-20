
import React from 'react';

import StaRunning from './components/StayRunning/StayRunning';
import Header from './components/Header/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import StayRunning from './components/StayRunning/StayRunning';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <Header></Header>
     <StayRunning />
     <Pricing></Pricing>
     <Footer></Footer>
   
    </>
  );
}

export default App;
