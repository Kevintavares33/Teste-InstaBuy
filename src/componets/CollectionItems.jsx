import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './CollectionItems.css';

const CollectionItems = ({ collectionItems }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  
  const kitChurrasco = collectionItems.find((category) => category.slug === 'Kit-Churrasco');
  const otherItems = collectionItems.filter((category) => category.slug !== 'Kit-Churrasco');
  

  return (
    <div className="collection-items">
      {kitChurrasco && ( 
      <div>
          <h2>Kit Churrasco</h2>
          <Slider {...settings}>
            {kitChurrasco.items.map((product) => (
              <div className="items" key={product.id}>
                <img
                  src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${product.images[0]}`}
                  alt={product.name}
                />
                <h3>{product.name}</h3>
                <p>Price: {product.prices[0].promo_price}</p>
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
              <div className="items" key={product.id}>
                <img
                  src={`https://assets.instabuy.com.br/ib.item.image.medium/m-${product.images[0]}`}
                  alt={product.name}
                />
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default CollectionItems;
