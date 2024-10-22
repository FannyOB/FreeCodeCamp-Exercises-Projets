/**
 * Note du cours
 * 
 * Objet :  
 * 
 * constructeur est une méthode, composé de propriété: 
 *  function constr(){
 *       this.name = "Rupert";
         this.color = "brown";
         this.numLegs = 4;
 *  }
 * 
 * this: mot clé pour se référer à l'objet.
 * 
 * instance de l'objet :  let objectInstance = new constr()
 * 
 * 
 * propriété constructor: est une référence à la fonction constructeur qui a créé l'instance.
 * L'avantage de la propriété constructeur est qu'il est possible de vérifier cette propriété pour savoir de quel type d'objet il s'agit.
 * Voici un exemple de la façon dont cela pourrait être utilisé :
 * 
 *  function joinBirdFraternity(candidate) {
        if (candidate.constructor === Bird) {
            return true;
        } else {
            return false;
        }
    }

 * Changer la propriété prototype en objet. Rappelez-vous que le prototype est comme la "recette" pour créer un objet.
    D'un sens, la recette de Bird comprend maintenant tous les "ingrédients" clés d'Animal.

 * Use isPrototypeOf to check the prototype of instance.

 * Use  Object.create  to make two instances of Animal named duck and beagle.

 */