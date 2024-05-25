
function plantGrowthControl(weeks) {
    const PI = 3.1415; 
    const radius = 5; 
    const area = PI * radius * radius; 
    const initialPlants = 20; 
    const spacePerPlant = 0.8; 
    const maxCapacity = area / spacePerPlant; 
  
  
    const plantCount = initialPlants * Math.pow(2, weeks);
  

    if (plantCount > maxCapacity * 0.8) {
      console.log(`Week ${weeks}: Prune the plants. Too many plants!`);
    }
    
    else if (plantCount >= maxCapacity * 0.5 && plantCount <= maxCapacity * 0.8) {
      console.log(
        `Week ${weeks}: Monitor the plants. They are growing within acceptable limits.`
      );
    }
    
    else {
      console.log(`Week ${weeks}: Plant more. There is room for more plants.`);
    }
  }
 
  plantGrowthControl(1); 
  plantGrowthControl(2); 
  plantGrowthControl(3); 
  
  function calculateNeededSpace() {
    
    const initialPlants = 100; 
    const weeks = 10;
    const spacePerPlant = 0.8; 
  
    
    const plantCount = initialPlants * 1024; 
  
    // Calculate the total required space for the plants after 10 weeks
    const requiredSpace = plantCount * spacePerPlant; 
  
    
    const PI = 3.1415; 
  
  
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