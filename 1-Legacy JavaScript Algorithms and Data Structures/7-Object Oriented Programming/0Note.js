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

 * Use mixin : Pour les objets non liés, il est préférable d'utiliser des mixins. Un mixin permet à d'autres objets d'utiliser une collection de fonctions.
    
 * Use closure : La façon la plus simple de rendre cette propriété publique privée est de créer une variable dans la fonction constructeur. Cela modifie la portée de cette variable pour être à l'intérieur de la fonction constructeur par rapport à la fonction disponible globalement. 
    De cette façon, la variable n'est accessible et modifiée que par des méthodes également au sein de la fonction constructeur.

 *

 */