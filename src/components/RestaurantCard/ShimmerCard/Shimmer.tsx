import React from 'react';
import './Shimmer.css';

const styles = {
  shimmerContainer: 'shimmer-container',
  shimmerCard: 'shimmer-card',
};
const ShimmerCard: React.FC = (): Element => {
  return (
    <div className={styles.shimmerContainer}>
      <div className={styles.shimmerCard}></div>
      <div className={styles.shimmerCard}></div>
      <div className={styles.shimmerCard}></div>
      <div className={styles.shimmerCard}></div>
      <div className={styles.shimmerCard}></div>
      <div className={styles.shimmerCard}></div>
      <div className={styles.shimmerCard}></div>
      <div className={styles.shimmerCard}></div>
      <div className={styles.shimmerCard}></div>
      <div className={styles.shimmerCard}></div>
    </div>
  );
};

export default ShimmerCard;
