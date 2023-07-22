import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './BannerCarousel.css';

const BannerCarousel = ({ banners }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    arrows: false,
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