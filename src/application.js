import React from 'react';

import Header from './components/header';
import Aside from './components/aside';
import Origamis from './components/origamis';
import styles from './app.module.css';

const Application = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Origamis />
      </div>
    </div>
  );
}

export default Application;
