/**
 * Mutations
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

 */

function mutation(arr) {
    //convertir les chaines en minuscule pour ignore la casse
    let firstElement = arr[0].toLowerCase();
    console.log(firstElement);
    let secondElement = arr[1].toLowerCase();
    console.log(secondElement);
  
    //boucler dans le 2 eme element
    for(let i = 0; i < secondElement.length; i++){
        console.log(secondElement[i]);
        //verifier si les lettres de arr[0] sont present dans arr[1]
        //La méthode indexOf() des instances Array renvoie le premier index auquel un élément donné peut être trouvé dans le tableau, ou -1 s'il n'est pas présent.
        if(firstElement.indexOf(secondElement[i]) === -1){
          return false;
        }
    }
    
    return true;
}
  
mutation(["hello", "hey"]);