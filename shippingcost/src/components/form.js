import React, { useState } from 'react';

const ShippingForm = ({ onCalculate }) => {
  const [destination, setDestination] = useState('');
  const [weight, setWeight] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(destination, parseFloat(weight), priority);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Destination: </label>
        <select value={destination} onChange={(e) => setDestination(e.target.value)}>
          <option value="">Select Destination</option>
          <option value="domestic">Domestic</option>
          <option value="international">International</option>
        </select>
      </div>
      <div>
        <label>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          step="0.01"
        />
      </div>
      <div>
        <label>Priority: </label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Select Priority</option>
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <button type="submit">Calculate</button>
    </form>
  );
};

export default ShippingForm;
