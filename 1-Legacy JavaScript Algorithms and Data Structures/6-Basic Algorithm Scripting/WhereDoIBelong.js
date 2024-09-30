/**
 * Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */


//Solution:
function getIndexToIns(arr, num) {

    // On trie le tableau
    let arrSort = arr.sort((a,b) => a-b);
    console.log(arrSort);
  
    // Parcourir le tableau pour trouver où insérer num
    for(let i = 0 ; i < arrSort.length; i++){
        console.log(arrSort[i]);
        if(num <= arrSort[i]){ // Si num est inférieur ou égal à l'élément à l'indice i
        console.log(i) ;
        return i;// On retourne cet indice
        }
    }
    // Si num est plus grand que tous les éléments, on retourne la longueur du tableau
    return arrSort.length;
  }
  
  getIndexToIns([40, 60], 50);
  getIndexToIns([10, 20, 30, 40, 50], 35);
  