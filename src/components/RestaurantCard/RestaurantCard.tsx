import React from 'react';
import './RestaurantCard.css';
import { restaurantImageUrl } from '../../utils/constants';

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
          src={`${restaurantImageUrl}${cloudinaryImageId}`}
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
