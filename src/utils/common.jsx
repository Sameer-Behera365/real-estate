//look i wanted the cards to be aligned in a row to avoive spavce between cards so we are doing this  , i could have written thsi logic also int the residencides .jsx but if u write in diff file its betteer


//sliderSettings object you imported and used in your Swiper component. 
// It controls how the Swiper.js slider behaves in your Residencies component.

export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
};
