const sliderSettings = (props) => {
  return {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props,
  };
};
export default sliderSettings;
