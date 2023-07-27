import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './CollectionItems.css';

const CollectionItems = ({ collectionItems }) => {
  const navigate = useNavigate();

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

  const kitChurrascoSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const kitChurrasco = collectionItems.find((category) => category.slug === 'Kit-Churrasco');
  const otherItems = collectionItems.filter((category) => category.slug !== 'Kit-Churrasco');

  return (
    <div className="collection-items">
      {kitChurrasco && (
        <div>
          <h2>Kit Churrasco</h2>
          <Slider {...kitChurrascoSettings}>
            {kitChurrasco.items.map((product) => (
              <div className="items" onClick={() => navigate({ pathname: `/p/${product.slug}` })} key={product.id}>
                <img
                  src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${product.images[0]}`}
                  alt={product.name}/>
              </div>
            ))}
          </Slider>
        </div>
      )}

      {otherItems.map((category, index) => (
        <div key={category.id} className={index > 0 ? 'carousel-margin' : ''}>
          <h2>{category.title}</h2>
          <Slider {...settings}>
            {category.items.map((product) => (
              <div className="items" onClick={() => navigate({ pathname: `/p/${product.slug}` })} key={product.id}>
                <img src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${product.images[0]}`} alt={product.name}/>
                <p className='price' >R$ {product.prices[0].price}</p>
                <p className='nome-produto'>{product.name}</p>
               </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default CollectionItems;
