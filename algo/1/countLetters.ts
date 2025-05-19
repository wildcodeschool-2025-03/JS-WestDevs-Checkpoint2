/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string) {
  const string = "";

  for (let i = 0; i < string.length; i++)
    if (string[i] === letter) {
      // const indexOf = givenString.indexOf(letter);

      return 0;
    }
}

export default countLetters;
