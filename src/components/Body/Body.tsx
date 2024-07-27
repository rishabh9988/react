import React from 'react';
import './Body.css';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

const styles = {
  bodyContainer: 'body-container',
  searchContainer: 'search-container',
  restaurantListContainer: 'restaurant-list-container',
};

const restaurantsData = [
  [
    {
      info: {
        id: '718482',
        name: 'Chinese Wok',
        cloudinaryImageId: 'e0839ff574213e6f35b3899ebf1fc597',
        locality: 'Phase 10',
        areaName: 'Phase 10',
        costForTwo: '₹250 for two',
        cuisines: ['Chinese', 'Asian', 'Tibetan', 'Desserts'],
        avgRating: 3.8,
        parentId: '61955',
        avgRatingString: '3.8',
        totalRatingsString: '100+',
        sla: {
          deliveryTime: 43,
          lastMileTravel: 8.2,
          serviceability: 'SERVICEABLE',
          slaString: '40-45 mins',
          lastMileTravelString: '8.2 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
          nextCloseTime: '2024-07-28 00:00:00',
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: 'F',
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: 'ITEMS',
          subHeader: 'AT ₹199',
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
          differentiatedUiMediaDetails: {
            mediaType: 'ADS_MEDIA_ENUM_IMAGE',
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: '3.1',
            ratingCount: '20+',
          },
          source: 'GOOGLE',
          sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
        },
        ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
        context: 'seo-data-579203fc-bb5b-4a38-94ca-bb447a9b39a0',
      },
      cta: {
        link: 'https://www.swiggy.com/restaurants/chinese-wok-phase-10-chandigarh-718482',
        text: 'RESTAURANT_MENU',
        type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
      info: {
        id: '772157',
        name: 'Wow! Momo',
        cloudinaryImageId: '64fd45fd9f44c1737bc446e470bed666',
        locality: 'Sector-67',
        areaName: 'Sector 67',
        costForTwo: '₹300 for two',
        cuisines: [
          'Tibetan',
          'Healthy Food',
          'Asian',
          'Chinese',
          'Snacks',
          'Continental',
          'Desserts',
          'Beverages',
        ],
        avgRating: 4,
        parentId: '1776',
        avgRatingString: '4.0',
        totalRatingsString: '100+',
        sla: {
          deliveryTime: 48,
          lastMileTravel: 9.8,
          serviceability: 'SERVICEABLE',
          slaString: '45-50 mins',
          lastMileTravelString: '9.8 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
          nextCloseTime: '2024-07-27 23:00:00',
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: 'F',
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: 'ITEMS',
          subHeader: 'AT ₹99',
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
          differentiatedUiMediaDetails: {
            mediaType: 'ADS_MEDIA_ENUM_IMAGE',
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: '2.1',
            ratingCount: '10+',
          },
          source: 'GOOGLE',
          sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
        },
        ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
        context: 'seo-data-579203fc-bb5b-4a38-94ca-bb447a9b39a0',
      },
      cta: {
        link: 'https://www.swiggy.com/restaurants/wow-momo-sector-67-chandigarh-772157',
        text: 'RESTAURANT_MENU',
        type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
      info: {
        id: '295099',
        name: 'Barbeque Nation',
        cloudinaryImageId: 'durpa8rlz2innph3xwgh',
        locality: 'Sector 26',
        areaName: 'Sector 26',
        costForTwo: '₹600 for two',
        cuisines: [
          'North Indian',
          'Barbecue',
          'Biryani',
          'Kebabs',
          'Mughlai',
          'Desserts',
        ],
        avgRating: 3.9,
        parentId: '2438',
        avgRatingString: '3.9',
        totalRatingsString: '1K+',
        sla: {
          deliveryTime: 32,
          lastMileTravel: 2.6,
          serviceability: 'SERVICEABLE',
          slaString: '30-35 mins',
          lastMileTravelString: '2.6 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
          nextCloseTime: '2024-07-27 23:30:00',
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: 'F',
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: '50% OFF',
          subHeader: 'UPTO ₹90',
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
          differentiatedUiMediaDetails: {
            mediaType: 'ADS_MEDIA_ENUM_IMAGE',
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: '4.4',
            ratingCount: '5K+',
          },
          source: 'GOOGLE',
          sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
        },
        ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
        context: 'seo-data-579203fc-bb5b-4a38-94ca-bb447a9b39a0',
      },
      cta: {
        link: 'https://www.swiggy.com/restaurants/barbeque-nation-sector-26-chandigarh-295099',
        text: 'RESTAURANT_MENU',
        type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
      info: {
        id: '51428',
        name: 'Jalandhar Sweets',
        cloudinaryImageId: 'gnfaeaeddfxdzrxzoikp',
        locality: 'Sector 23',
        areaName: 'Sector 23',
        costForTwo: '₹200 for two',
        cuisines: [
          'Sweets',
          'North Indian',
          'Thalis',
          'South Indian',
          'Desserts',
          'Beverages',
        ],
        avgRating: 4.1,
        veg: true,
        parentId: '109269',
        avgRatingString: '4.1',
        totalRatingsString: '10K+',
        sla: {
          deliveryTime: 24,
          lastMileTravel: 3,
          serviceability: 'SERVICEABLE',
          slaString: '20-25 mins',
          lastMileTravelString: '3.0 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
          nextCloseTime: '2024-07-27 21:30:00',
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: 'v1695133679/badges/Pure_Veg111.png',
              description: 'pureveg',
            },
          ],
        },
        isOpen: true,
        type: 'F',
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: 'pureveg',
                    imageId: 'v1695133679/badges/Pure_Veg111.png',
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: '₹125 OFF',
          subHeader: 'ABOVE ₹199',
          discountTag: 'FLAT DEAL',
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
          differentiatedUiMediaDetails: {
            mediaType: 'ADS_MEDIA_ENUM_IMAGE',
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: '3.8',
            ratingCount: '100+',
          },
          source: 'GOOGLE',
          sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
        },
        ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
        context: 'seo-data-579203fc-bb5b-4a38-94ca-bb447a9b39a0',
      },
      cta: {
        link: 'https://www.swiggy.com/restaurants/jalandhar-sweets-sector-23-chandigarh-51428',
        text: 'RESTAURANT_MENU',
        type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
      info: {
        id: '254108',
        name: "McDonald's",
        cloudinaryImageId: '535fc9f9c135f7982317bbb6a64a1ffc',
        locality: 'Sector 22',
        areaName: 'Sector 22',
        costForTwo: '₹400 for two',
        cuisines: ['American', 'Fast Food'],
        avgRating: 4,
        parentId: '630',
        avgRatingString: '4.0',
        totalRatingsString: '10K+',
        sla: {
          deliveryTime: 34,
          lastMileTravel: 1.9,
          serviceability: 'SERVICEABLE',
          slaString: '30-35 mins',
          lastMileTravelString: '1.9 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
          nextCloseTime: '2024-07-28 00:45:00',
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: 'Rxawards/_CATEGORY-Burger.png',
              description: 'Delivery!',
            },
          ],
        },
        isOpen: true,
        type: 'F',
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: 'Delivery!',
                    imageId: 'Rxawards/_CATEGORY-Burger.png',
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: '30% OFF',
          subHeader: 'UPTO ₹75',
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
          differentiatedUiMediaDetails: {
            mediaType: 'ADS_MEDIA_ENUM_IMAGE',
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: '4.3',
            ratingCount: '5K+',
          },
          source: 'GOOGLE',
          sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
        },
        ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
        context: 'seo-data-579203fc-bb5b-4a38-94ca-bb447a9b39a0',
      },
      cta: {
        link: 'https://www.swiggy.com/restaurants/mcdonalds-sector-22-chandigarh-254108',
        text: 'RESTAURANT_MENU',
        type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
      info: {
        id: '42802',
        name: 'Subway',
        cloudinaryImageId:
          'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/7693df43-93dc-4347-abbc-a813c9678521_42802.JPG',
        areaName: 'Sector 19',
        costForTwo: '₹350 for two',
        cuisines: [
          'Fast Food',
          'Healthy Food',
          'Salads',
          'Snacks',
          'Desserts',
          'Beverages',
        ],
        avgRating: 4.1,
        parentId: '2',
        avgRatingString: '4.1',
        totalRatingsString: '5K+',
        sla: {
          deliveryTime: 17,
          lastMileTravel: 0.6,
          serviceability: 'SERVICEABLE',
          slaString: '15-20 mins',
          lastMileTravelString: '0.6 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
          nextCloseTime: '2024-07-27 23:58:00',
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
              description: 'Delivery!',
            },
          ],
        },
        isOpen: true,
        type: 'F',
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: 'Delivery!',
                    imageId: 'Rxawards/_CATEGORY-Sandwiches.png',
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: '₹100 OFF',
          subHeader: 'ABOVE ₹599',
          discountTag: 'FLAT DEAL',
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
          differentiatedUiMediaDetails: {
            mediaType: 'ADS_MEDIA_ENUM_IMAGE',
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: '--',
          },
        },
        ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
        context: 'seo-data-579203fc-bb5b-4a38-94ca-bb447a9b39a0',
      },
      cta: {
        link: 'https://www.swiggy.com/restaurants/subway-sector-19-chandigarh-42802',
        text: 'RESTAURANT_MENU',
        type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
      info: {
        id: '106055',
        name: "La Pino'z Pizza",
        cloudinaryImageId: 'fco6bt4rjqr7hztnqwxo',
        locality: 'Sec 27',
        areaName: 'Sector 27',
        costForTwo: '₹300 for two',
        cuisines: ['Pizzas', 'Pastas', 'Italian', 'Desserts', 'Beverages'],
        avgRating: 4.2,
        parentId: '4961',
        avgRatingString: '4.2',
        totalRatingsString: '10K+',
        sla: {
          deliveryTime: 21,
          lastMileTravel: 1.7,
          serviceability: 'SERVICEABLE',
          slaString: '20-25 mins',
          lastMileTravelString: '1.7 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
          nextCloseTime: '2024-07-28 01:00:00',
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: 'Rxawards/_CATEGORY-Pizza.png',
              description: 'Delivery!',
            },
          ],
        },
        isOpen: true,
        type: 'F',
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: 'Delivery!',
                    imageId: 'Rxawards/_CATEGORY-Pizza.png',
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: '50% OFF',
          subHeader: 'UPTO ₹90',
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
          differentiatedUiMediaDetails: {
            mediaType: 'ADS_MEDIA_ENUM_IMAGE',
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: '--',
          },
        },
        ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
        context: 'seo-data-579203fc-bb5b-4a38-94ca-bb447a9b39a0',
      },
      cta: {
        link: 'https://www.swiggy.com/restaurants/la-pinoz-pizza-sec-27-sector-27-chandigarh-106055',
        text: 'RESTAURANT_MENU',
        type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
      info: {
        id: '435686',
        name: 'Pizza Hut',
        cloudinaryImageId:
          'RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/6b7a8af7-6d1e-4c6e-92a8-aa8577c57535_435686.jpg',
        locality: 'Sector 18',
        areaName: 'Sector 26',
        costForTwo: '₹350 for two',
        cuisines: ['Pizzas'],
        avgRating: 3.8,
        parentId: '721',
        avgRatingString: '3.8',
        totalRatingsString: '1K+',
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.6,
          serviceability: 'SERVICEABLE',
          slaString: '25-30 mins',
          lastMileTravelString: '2.6 km',
          iconType: 'ICON_TYPE_EMPTY',
        },
        availability: {
          nextCloseTime: '2024-07-28 04:00:00',
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: 'F',
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: 'ITEMS',
          subHeader: 'AT ₹189',
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
          differentiatedUiMediaDetails: {
            mediaType: 'ADS_MEDIA_ENUM_IMAGE',
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: '3.4',
            ratingCount: '500+',
          },
          source: 'GOOGLE',
          sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag',
        },
        ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY',
      },
      analytics: {
        context: 'seo-data-579203fc-bb5b-4a38-94ca-bb447a9b39a0',
      },
      cta: {
        link: 'https://www.swiggy.com/restaurants/pizza-hut-sector-18-sector-26-chandigarh-435686',
        text: 'RESTAURANT_MENU',
        type: 'WEBLINK',
      },
      widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
  ],
];

const Body: React.FC = (): Element => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.searchContainer}>Search</div>
      <div className={styles.restaurantListContainer}>
        {restaurantsData.map((resData) =>
          resData.map((data) => (
            <RestaurantCard key={data.info.id} resData={data.info} />
          )),
        )}
      </div>
    </div>
  );
};

export default Body;
