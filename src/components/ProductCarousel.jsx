import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import raioo from '..//assets/raioo.png';
import './ProductCarousel.css';
import { useNavigate } from 'react-router-dom';

const ProductCarousel = ({ products }) => {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    arrow: true, 
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
     <h2 id='ofertas'>
     <img id='oferta-img' src={raioo} alt='oferta-img' className="overlay-color" />
        Ofertas
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="carousel-item" onClick={() => navigate({ pathname: `/p/${product.slug}}` })} key={product.id}>
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
