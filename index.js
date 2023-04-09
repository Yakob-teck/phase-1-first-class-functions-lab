// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  //console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Antonia', 'Nuru']
  //console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Amari', 'Mo']
  
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    }
  }
  
  function fareDoubler(fares) {
      
        return fares * 2;
      }
    
  function fareTripler(fares) {
    
      return fares * 3;
    }
   function selectDifferentDrivers(drivers, driverSelector) {
        // Call the driverSelector function with the drivers argument to get the desired driver array
        return driverSelector(drivers);
        }
    
      
      
