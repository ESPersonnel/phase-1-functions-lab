// Code your solution in this file!

// Scuber, our transportation company, has gained some traction among moms and dads in New York City. It has also received a few requests.

// First, Scuber's executives want to ensure that Scuber's headquarters is near its customers. They would like you to write a function, distanceFromHqInBlocks, that takes in a pickup location for a passenger, and returns the number of blocks from Scuber headquarters on 42nd Street. For example, if the pickup location is 50 (i.e., 50th Street), the return value should be 8.

// The distanceFromHqInBlocks function's return value can then be used for another function, distanceFromHqInFeet, that translates the number of blocks from headquarters to the distance in feet. Each block in Manhattan is 264 feet long.

// Next, customers want Scuber to calculate the number of feet travelled based on the distance. Write a function called distanceTravelledInFeet that takes in both the start and destination blocks, and returns the number of feet travelled. Remember, each block in Manhattan is 264 feet long. For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St, returns 1056 ((38-34)*264). You can assume that we are only calculating distance uptown/downtown, not from river to river.

// Instructions
// To complete all of your work assignments, you'll need to write four functions:

// distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.
//   function distanceFromHqInBlocks(someValue) {
//     //returns the number of blocks given a value
//   }
// distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location. Use your distanceFromHqInBlocks function to help return the correct value here. Try something like this:
// function distanceFromHqInFeet(someValue) {
//   distanceFromHqInBlocks(someValue);
//   // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
//   // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

//   // the return value of distanceFromHqInBlocks can then be used to calculate feet
// }
// distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and an ending block — it only calculates distance North and South (uptown/downtown). It uses the knowledge that a block is 264 feet long.
//   function distanceTravelledInFeet(start, destination) {
//     //returns the number of feet traveled
//   }
// calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
//   function calculatesFarePrice(start, destination) {
//     //returns the fare for the customer
//   }

function distanceFromHqInBlocks(streetNumber) {
  return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet(streetNumber) {
  return distanceFromHqInBlocks(streetNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  }
    return (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  }
}