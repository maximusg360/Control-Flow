
function plantGrowthControl(weeks) {
    const PI = 3.1415; 
    const radius = 5; 
    const area = PI * radius * radius; 
    const initialPlants = 20; 
    const spacePerPlant = 0.8; 
    const maxCapacity = area / spacePerPlant; 
  
    // Plants double in number every week
    const plantCount = initialPlants * Math.pow(2, weeks);
  
    // Check if the plant count exceeds 80% of the garden's capacity
    if (plantCount > maxCapacity * 0.8) {
      console.log(`Week ${weeks}: Prune the plants. Too many plants!`);
    }
    // Check if the plant count is between 50% and 80% of the garden's capacity
    else if (plantCount >= maxCapacity * 0.5 && plantCount <= maxCapacity * 0.8) {
      console.log(
        `Week ${weeks}: Monitor the plants. They are growing within acceptable limits.`
      );
    }
    // Check if the plant count is below 50% of the garden's capacity
    else {
      console.log(`Week ${weeks}: Plant more. There is room for more plants.`);
    }
  }
  // Example function calls to simulate plant growth for 1, 2, and 3 weeks
  plantGrowthControl(1); // 1 week
  plantGrowthControl(2); // 2 weeks
  plantGrowthControl(3); // 3 weeks
  
  function calculateNeededSpace() {
    // Constants related to the plants and their spacing
    const initialPlants = 100; 
    const weeks = 10;
    const spacePerPlant = 0.8; 
  
    // Manually calculated number of plants after 10 weeks (doubling each week)
    const plantCount = initialPlants * 1024; 
  
    // Calculate the total required space for the plants after 10 weeks
    const requiredSpace = plantCount * spacePerPlant; // Total space needed based on plant count and space per plant
  
    // Constants for circle calculations
    const PI = 3.1415; 
  
    // Manually calculate the new radius required for the new area
    let newRadius = 0;
    let increment = 0.01; 
  

    while (currentArea < requiredSpace) {
      newRadius += increment;
      currentArea = PI * newRadius * newRadius;
    }
  
    newRadius -= increment;
  
    // Output the results
    console.log(
      `After 10 weeks with 100 initial plants: Required space is ${requiredSpace} square meters, New radius is ${newRadius.toFixed(
        2
      )} meters.`
    );
  }
  
  calculateNeededSpace();
  
  
  function validateGardenCapacity() {
   
    const initialPlants = 100;
    const spacePerPlant = 0.8;
    const PI = 3.1415;
    const radius = 5;
    const area = PI * radius * radius;
    const requiredSpace = initialPlants * spacePerPlant;
  
    // Try-Catch block to handle exceptions
    try {
     
      if (requiredSpace > area) {
        throw new Error("Insufficient garden space for the number of plants.");
      }
      
      console.log(
        "The garden has sufficient space for the initial number of plants."
      );
    } catch (error) {
      
      console.log(error.message);
    }
  }
  validateGardenCapacity();