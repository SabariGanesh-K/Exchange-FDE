import { useState, useEffect } from 'react';

export function usePriceUpdater(initialData) {
  const [updatedData, setUpdatedData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedPrices = Object.keys(updatedData).reduce((acc, currency) => {
        const originalPrice = updatedData[currency].price;
        const changePercentage = Math.random() < 0.5 ? 0.03 : -0.03;
        const newPrice = originalPrice * (1 + changePercentage);

        acc[currency] = {
          ...updatedData[currency],
          price: newPrice.toFixed(2), // Round to 2 decimal places
          date: new Date().toLocaleDateString()
        };

        return acc;
      }, {});

      setUpdatedData(updatedPrices);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [updatedData]);

  return updatedData;
}
