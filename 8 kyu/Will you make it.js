const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
   let weith = distanceToPump / mpg;
   return weith <= fuelLeft
};