const app = "I don't do much."

    function bumpCounter() {
        var counter = 0;
        function addBump() {
          counter = counter + 1;
          return counter;
       }
        function getBumps() {
         return counter;
      }
      return {addBump, getBumps}
    }

  function createAnimal(animalType) {
    return function(deadlyDevice) {
      return { animalType, deadlyDevice }
    }

  }
  var sharkCreator = createAnimal('Shark');
  var sharkWithFrickinLaserbeam = createAnimal({sharkCreator, deadlyDevice:'Laserbeam'});
  var sharkWithFrickinCannon = createAnimal({sharkCreator, deadlyDevice:'Cannon'});
