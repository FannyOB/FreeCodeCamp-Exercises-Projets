/**
 * Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument)
 and returns them as a two-dimensional array.
 */

 function chunkArrayInGroups(arr, size) {
    
    let newArray = [];

    for(let i = 0; i < arr.length; i += size){
      //console.log(arr[i]);
      
      // slice() pour extraire chaque sous-groupe du tableau d'origine. slice() permet de copier une partie du tableau.
      let arrSplit = arr.slice(i, i + size);
      //console.log(arrSplit);
      newArray.push(arrSplit);
      //console.log(newArray);
    }
    
    return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);