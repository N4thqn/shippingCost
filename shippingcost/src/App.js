import React, { useState } from 'react';
import ShippingForm from './components/ShippingForm';
import ShippingCost from './components/ShippingCost';
import calculateShippingCost from './utils/calculateShippingCost';

const App = () => {
  const [cost, setCost] = useState(null);

  const handleCalculate = (destination, weight, priority) => {
    const shippingCost = calculateShippingCost(destination, weight, priority);
    setCost(shippingCost);
  };//handler untuk menyimpan data sementara destinasi, berat dan prioritas

  return (
    <div className="App">
      <h1>Shipping Cost Calculator</h1>
      <ShippingForm onCalculate={handleCalculate} />
      {cost !== null && <ShippingCost cost={cost} />}
    </div>
  );//memanggil form 
};

export default App;
