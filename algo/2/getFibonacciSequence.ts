/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  let fibonacciArr = [] as number[];
  if (size === 1) {
    fibonacciArr.push(0);
  } else if (size === 2) {
    fibonacciArr = [0, 1];
  } else if (size > 2) {
    for (let i = 2; i < size; i++) {
      fibonacciArr.push(fibonacciArr[i - 2] + fibonacciArr[i - 1]);
    }
  }
  return fibonacciArr;
}

// Original solution, passing test but refused by Biome

/*
function getFibonacciSequence(size: number): number[] {
  if (size <= 0) {
    return []
  } else if (size === 1) {
    return [0]
  } else if (size === 2) {
    return [0, 1]
  } else {
    let fibonacciArr = [0, 1]
    for (let i=2; i<size; i++) {
      fibonacciArr.push(fibonacciArr[i - 2] + fibonacciArr[i - 1])
    }
    return fibonacciArr;
  }
}
*/

export default getFibonacciSequence;
