/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

const word = "natation";

function countLetters(givenString: string, letter: string): number {
  let word = 0;
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] === letter) {
      word++;
    }
  }
  return word;
}

console.log(countLetters("aaaaabbbaa", "a"));
console.log(countLetters("bbacbaaa", "c"));
console.log(countLetters("bbcc", "a"));

export default countLetters;
