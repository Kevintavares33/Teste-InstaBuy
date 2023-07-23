import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import oferta from '..//assets/oferta.png';
import './ProductCarousel.css';

const ProductCarousel = ({ products }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2 id='ofertas'><img id='oferta-img' src={oferta} alt='oferta-img'/> Ofertas</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="carousel-item" key={product.id}>
            <img src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${product.images[0]}`} alt={product.name} />
            <div className='price-promo'>
              <span>R$ {product.prices[0].promo_price}</span>
              <del>R$ {product.prices[0].price}</del>
            </div>
            <p className='nome-produto'>{product.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
