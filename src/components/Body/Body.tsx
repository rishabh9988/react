import React, { useState, useEffect } from 'react';
import './Body.css';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import ShimmerCard from '../RestaurantCard/ShimmerCard/Shimmer';

const styles = {
  bodyContainer: 'body-container',
  filterContainer: 'filter-container',
  searchContainer: 'search-container',
  searchInput: 'search-input',
  restaurantListContainer: 'restaurant-list-container',
  topRatedButton: 'top-rated',
};

const Body: React.FC = (): Element => {
  const [restaurantsData, setRestaurantsData] = useState<[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const filterTopRatedRestaurants = () => {
    const filter = restaurantsData.filter(
      (resData) => resData.info.avgRating > 4,
    );
    setRestaurantsData(filter);
  };

  const clearFilters = () => {};

  const fetchData = async () => {
    const data =
      await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
`);
    const json = await data.json();
    setRestaurantsData(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  if (restaurantsData.length === 0) return <ShimmerCard />;

  const searchFilter = () => {
    const filter = restaurantsData.filter((resData) =>
      resData.info.name.includes(searchText),
    );
    setRestaurantsData(filter);
  };

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.filterContainer}>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => searchFilter()}>Search</button>
        </div>
        <button
          className={styles.topRatedButton}
          onClick={() => filterTopRatedRestaurants()}
        >
          Top rated restaurants
        </button>
        <button onClick={() => fetchData()}>Clear Filters</button>
      </div>
      <div className={styles.restaurantListContainer}>
        {restaurantsData.map((resData) => (
          <RestaurantCard key={resData.info.id} resData={resData.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
