import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './ProductCarousel.css';

const ProductCarousel = ({ products }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div className="carousel-item" key={product.id}>
            <img src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${product.images[0]}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.prices[0].price}</p>
            <p>Price: {product.prices[0].promo_price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;


