/**
 * Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};

duck.sayName();
The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. Notice that the method accessed the name property in the return statement using duck.name. The next challenge will cover another way to do this.
Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.
 */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){
      return "This dog has " + dog.numLegs + " legs."; }
};
  
dog.sayLegs();

/**
* Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.
*/

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog;

/**
 * Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4.
 * Then create a new Dog saved in a variable terrier.
 * Pass it two strings as arguments for the name and color properties.
 */

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
  
let terrier = new Dog("Dave","blue");
console.log(terrier);

/**
 * Verify an Object's Constructor with instanceof
 * Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:

Example Code
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
This instanceof method would return true.

If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:

Example Code
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
This instanceof method would return false.

Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. 
Then, use instanceof to verify that it is an instance of House.
 */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4);

console.log("myHouse l'instance de House retourne la valeur: ",myHouse instanceof House);