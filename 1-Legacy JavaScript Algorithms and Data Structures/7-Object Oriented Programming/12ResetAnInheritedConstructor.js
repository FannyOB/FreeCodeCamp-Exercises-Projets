/**
 * Reset an Inherited Constructor Property
 * 
 * Fix the code so duck.constructor and beagle.constructor return their respective constructors.
 */

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

let duck = new Bird();
let beagle = new Dog();

Bird.prototype.constructor = Bird;
duck.constructor;

Dog.prototype.constructor = Dog;
beagle.constructor;