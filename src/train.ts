// K-TASK
function countVowels(str:string): number {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("Uzbekistan")); 
// console.log(countVowels("SIMON")); 




// L-TASK
const sentence = "we like coding";

const reversedWords = sentence.split(" ")
  .map((word: string) => word.split("").reverse().join(""))
  .join(" ");

// console.log(reversedWords); 






// M-TASK
function getSquareNumbers(arr: any[]) {
  return arr.map(num => {
    return {
      number: num,
      square: num * num 
    };
  });
}

const input = [2, 5, 9];
const result = getSquareNumbers(input);
// console.log(result);





// N-TASK
function palindromCheck(str: string) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(palindromCheck("racecar")); 
console.log(palindromCheck("dad")); 
console.log(palindromCheck("kiyik")); 
console.log(palindromCheck("kiyii")); 



