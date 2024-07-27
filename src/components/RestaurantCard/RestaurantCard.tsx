import React from 'react';
import './RestaurantCard.css';

const styles = {
  resCardContainer: 'res-card-container',
  imageContainer: 'image-container',
  imageStyle: 'image-style',
  bodyContainer: 'res-card-body-container',
};

const RestaurantCard: React.FC = (props): Element => {
  const { name, cuisines, sla, avgRating, costForTwo, cloudinaryImageId } =
    props.resData;
  return (
    <div className={styles.resCardContainer}>
      <div className={styles.imageContainer}>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          className={styles.imageStyle}
        />
      </div>
      <div className={styles.bodyContainer}>
        <h3>{name}</h3>
        <p>{cuisines.join(' , ')}</p>
        <p>{avgRating}*</p>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime} minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
