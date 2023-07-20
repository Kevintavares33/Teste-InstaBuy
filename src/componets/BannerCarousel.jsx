import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './BannerCarousel.css';

const BannerCarousel = ({ banners }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner-carousel-container">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <img
              src={`https://assets.instabuy.com.br/ib.store.banner/bnr-${banner.image}`}
              alt={banner.title}
              className="banner-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
