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

console.log(reversedWords); 