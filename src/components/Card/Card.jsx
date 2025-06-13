import React from 'react';
import styles from './styles.module.css';

const Card = ({ href, title, description }) => {
  return (
    <a href={href} className={styles.cardLink}>
      <div className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};

export default Card;
