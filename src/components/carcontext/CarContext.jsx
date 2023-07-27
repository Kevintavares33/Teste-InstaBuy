import React, { createContext, useContext, useState } from 'react';

const CarContext = createContext();

export function useCar() {
  return useContext(CarContext);
}

export const CarProvider = ({ children }) => {
  const [carItems, setCarItems] = useState([]);

  const addToCar = (item) => {
    setCarItems((prevItems) => {
      const existingItem = prevItems.find((prevItem) => prevItem.id === item.id);
      if (existingItem) {
        return prevItems.map((prevItem) =>
          prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + 1 } : prevItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <CarContext.Provider value={{ carItems, addToCar }}>
      {children}
    </CarContext.Provider>
  );
};
