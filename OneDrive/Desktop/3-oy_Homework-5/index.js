// 13-17 masalalar
//1-masala

// function findUniqueElements(arr1, arr2) {
//     return arr1.filter(item => !arr2.includes(item));
// }
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['b', 'c', 'd'];
// console.log(findUniqueElements(arr1, arr2)); 

//2-masala

// function groupByFirstLetter(arr) {
//     return arr.reduce((acc, item) => {
//         const firstLetter = item.charAt(0);
//         acc[firstLetter] = acc[firstLetter] || [];
//         acc[firstLetter].push(item);
//         return acc;
//     }, {});
// }
// const words = ['apple', 'banana', 'apricot', 'berry', 'cherry'];
// console.log(groupByFirstLetter(words));

//3-masala

// function countOccurrences(arr) {
//     return arr.map(item => [item, arr.filter(x => x === item).length]);
// }
// const elements = ['a', 'b', 'a', 'b', 'a'];
// console.log(countOccurrences(elements));

//4-masala

// function findNextGreater(arr) {
//     return arr.map((num, index) => {
//         const nextGreater = arr.slice(index + 1).find(x => x > num);
//         return nextGreater !== undefined ? nextGreater : null;
//     });
// }

// // Misol
// const numbers = [4, 5, 2, 10];
// console.log(findNextGreater(numbers)); 

//5-masala

// function countVowels(arr) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return arr.reduce((count, item) => {
//         return count + item.split('').filter(char => vowels.includes(char)).length;
//     }, 0);
// }

// // Misol
// const wordsToCount = ['apple', 'banana', 'cherry'];
// console.log(countVowels(wordsToCount)); 

//3-rasmdagi  5  masala

// //6-masala
// function doubleEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0) 
//               .sort((a, b) => a - b)      
//               .map(num => num * 2);       
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(doubleEvenNumbers(numbers)); 

//7-masala

// function reverseImage(arr) {
//     return arr.reverse().map(innerArr => innerArr.reverse());
// }
// const matritsa = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(reverseImage(matritsa));

//8-masala

// function changeNumberToString(arr) {
//     return arr.map(num => num.toString());
// }
// const numbersToString = [1, 2, 3, 4, 5];
// console.log(changeNumberToString(numbersToString));

//9-masala


// function addToArray(length) {
//     return Array.from({ length }, (_, index) => index + 1).concat([10]);
// }
// console.log(addToArray(10)); 

