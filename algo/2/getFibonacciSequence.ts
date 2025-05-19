/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  let fibo: number[] = [];
  let numb: number;
  if (size >= 1) {
    fibo = [0];
    for (let i = 1; i < size; i++) {
      numb = fibo.length === 1 ? 1 : fibo[0] + fibo[1];
      fibo.unshift(numb);
    }
    fibo.reverse().slice(1);
  }
  return fibo;
}

export default getFibonacciSequence;
