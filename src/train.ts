/* Project Standat 
    - Logging standards
    - Naming standards
        function, method, variable => CAMELCASE      goHome
        class => PASCAL                              MemberService
        folder, file => KEBAB                              count-vowels
        css => SNAKE                                 button_style 
    - Error handling
                
*/


/** 
  Traditional API
  Rest API
  GraphQL API
  ...
**/





// K-TASK

function countVowels(str: string): number {
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

// console.log(palindromCheck("racecar")); 
// console.log(palindromCheck("dad")); 
// console.log(palindromCheck("kiyik")); 
// console.log(palindromCheck("kiyii")); 




// O-TASK
function calculateSumOfNumbers(arr: (string | number | boolean | { son: number; })[]) {
  let sum = 0;
 
  for (let item of arr) {
      if (typeof item === "number") {
          sum += item;
      }
  }
 
  return sum;
}
 
// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); 

 


// P-TASK
function objectToArray(obj: Record<string, number>): [string, number][] {
  return Object.entries(obj);
}

const natija = objectToArray({ a: 10, b: 20 });
// console.log('natija:', natija)





// Q-TASK
function hasProperty(obj: object, key: string): boolean {
  return key in obj;
}

console.log(hasProperty({name: "Porsche", model: "Taycan"}, "model")); 
console.log(hasProperty({name: "Porsche", model: "Taycan"}, "year"));  
