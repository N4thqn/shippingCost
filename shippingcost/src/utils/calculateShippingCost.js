const calculateShippingCost = (destination, weight, priority) => {
    if (destination !== "domestic" && destination !== "international") {
      return "Invalid destination";
    }
    if (weight <= 0) {
      return "Invalid weight";
    }
    //kondisi berat dan destinasi
  
    let baseCost;
  
    //kondisi berdasarkan destinasi dan prioritas
    if (destination === "domestic") {
      if (priority === "standard") {
        baseCost = 5;
      } else if (priority === "express") {
        baseCost = 10;
      } else if (priority === "priority") {
        baseCost = 20;
      } else {
        return "Invalid priority";
      }
  
      // menghitung kondisi harga untuk domestik
      let totalCost = baseCost * weight;
      if (weight > 10) {
        totalCost += 10;
      }
      return totalCost;
  
    } else if (destination === "international") {
      if (priority === "standard") {
        baseCost = 15;
      } else if (priority === "express") {
        baseCost = 25;
      } else if (priority === "priority") {
        baseCost = 50;
      } else {
        return "Invalid priority";
      }
  
      // menghitung harga untuk destinasi internasional
      let totalCost = baseCost * weight;
      if (weight > 5) {
        totalCost += 50;
      }
      return totalCost;
    }
  };
  
  export default calculateShippingCost;
  