import React from 'react';
import './Design/Style.css'
import Header from './Header';
import TopPanel from './TopPanel';
import MiddlePanel from './MiddlePanel';
import CenterPanel from './CenterPanel';
import Awards from './Awards';
import Feature from './Feature';
import Service from './Service';
import Footer from './Footer';

function App(props) {
  return (
    <div>
      <Header />
      <TopPanel />
      <MiddlePanel />
      <CenterPanel />
      <Awards />
      <Feature />
      <Service />
      <Footer />
    </div>
  );
}

export default App;