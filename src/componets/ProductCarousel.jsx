import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './ProductCarousel.css';

const ProductCarousel = ({ products }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div className="carousel-item" key={product.id}>
            <img src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${product.images[0]}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;


