import React from 'react';
import styles from './features.module.css';

const features = [
  {
    id: 1,
    title: 'Scholarship Facility',
    description: 'It is a long established fact that a reader will be distracted.',
    image: 'https://live.themewild.com/eduka/assets/img/icon/scholarship.svg',
  },
  {
    id: 2,
    title: 'Skilled Lecturers',
    description: 'It is a long established fact that a reader will be distracted.',
    image: 'https://live.themewild.com/eduka/assets/img/icon/teacher.svg',
  },
  {
    id: 3,
    title: 'Book Library Facility',
    description: 'It is a long established fact that a reader will be distracted.',
    image: 'https://live.themewild.com/eduka/assets/img/icon/library.svg',
  },
  {
    id: 4,
    title: 'Affordable Price',
    description: 'It is a long established fact that a reader will be distracted.',
    image: 'https://live.themewild.com/eduka/assets/img/icon/money.svg',
  },
  
];

const Features = () => {
  return (
    <div className={styles.container}>
      {features.map((feature) => (
        <div key={feature.id} className={styles.featureCard}>
          <div className={styles.iconNumberContainer}>
          <div className={`${styles.iconNumberContainer} ${styles.animation}`} data-wow-delay=".25s">
            <img src={feature.image} alt={feature.title} className={styles.icon} />
            </div>
            <div className={styles.number}>
              {feature.id.toString().padStart(2, '0')}
            </div>
          </div>
          <h3 className={styles.title}>{feature.title}</h3>
          <p className={styles.description}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
