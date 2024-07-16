import React from 'react';
import './App.css';
import Navigation from './layouts/Navigation';
import Content from './layouts/Content';
import Footer from './layouts/Footer';
import Header from './layouts/Header';

function App() {
  return (
   <>
   <Navigation></Navigation>
   <Header></Header>
    <Content></Content>
    <Footer></Footer>
   </>
  );
}

export default App;