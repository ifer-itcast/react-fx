import React from 'react';
import styles from './App.module.css';
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/ShoppingCart';

function App() {
  return <div className={styles.red}>
    <img src={logo} width="200" alt=""/>
    <h1>今天星期一，全校升国旗！</h1>
    <ShoppingCart/>
  </div>;
}

export default App;
