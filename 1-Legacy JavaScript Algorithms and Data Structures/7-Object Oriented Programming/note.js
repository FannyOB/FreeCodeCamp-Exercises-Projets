/**
 * Note du cours:
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
 * mot clé: this 
 * 
 * instance de l'objet :  let objectInstance = new constr()
 * 
 * propriété constructor: est une référence à la fonction constructeur qui a créé l'instance.
 * L'avantage de la propriété constructeur est qu'il est possible de vérifier cette propriété pour savoir de quel type d'objet il s'agit.
 * Voici un exemple de la façon dont cela pourrait être utilisé :
 *  function joinBirdFraternity(candidate) {
        if (candidate.constructor === Bird) {
            return true;
        } else {
            return false;
        }
    }
 */