import React from 'react';
import styles from './page.module.css'; // Import the CSS module

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to the Home Page</h1>
        <p className={styles.description}>
          This is the homepage of our simple multi-page website built with React and TypeScript. We hope you enjoy your visit!
        </p>
      </div>
    </div>
  );
};

export default Home;

