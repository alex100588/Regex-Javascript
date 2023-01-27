// Using the test method

let myString = 'Hello world'
let myRegex = /Hello/
let result = myRegex.test(myString)
// console.log(result);



// Match literal strings

let waldoIsHiding = 'Somewhere Waldo is hiding in this text'
let waldoRegex = /Waldo/
let result1 = waldoRegex.test(waldoIsHiding)
// console.log(result1);



// Match a literal string with different possibilities

let petString = 'James has a pet cat'
let petRegex = /dog|cat|bird/
let result2 = petRegex.test(petString)
// console.log(result2);



// Ignore case while matching

let myString2 = 'freeCodeCamp'
let fccRegex = /freecodecamp/i
let result3 = fccRegex.test(myString2)
// console.log(result3);



// Extract matches

let extractStr = "Extract the word 'coding' from this string"
let codingRegex = /coding/
let result4 = extractStr.match(codingRegex)
// console.log(result4);




// Find more than the first match

let testStr = 'Repeat, Repeat, Repeat'
let ourRegex = /Repeat/g
console.log(testStr.match(ourRegex));


// Match Anything with the wildcard period

