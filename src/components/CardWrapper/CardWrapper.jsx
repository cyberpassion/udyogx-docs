import React from 'react';
import styles from './styles.module.css';

const CardWrapper = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default CardWrapper;
