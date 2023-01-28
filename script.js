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
let mystr = "Let's have fun with regular expressions"
let unRegex = /hav./
// console.log(mystr.match(unRegex));


// Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /b[aue]gs/; 
let result5 = quoteSample.match(vowelRegex); 
// console.log(result5);


// Match Letters of the Alphabet

let quote= "The quick brown fox jumps over the lazy dog.";
let alphabet = /[a-z]/gi; 
let result6 = quote.match(alphabet); 
// console.log(result6);


// Match Numbers and Letters of the Alphabet

let quotes = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[0-7]/g; 
let result7 = quotes.match(myRegex1); 
// console.log(result7);


// Match Single Characters Not Specified

let quote2= "3 blind mice.";
let myRegex2 = /[^0-7]/g; 
let result8 = quote2.match(myRegex2); 
// console.log(result8);


// Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let myRegex3 = /[sp]+/g; 
let result9 = difficultSpelling.match(myRegex3);
// console.log(result9);


// Match Characters that Occur Zero or More Times
let cheweQuote = 'Aaaaaaaaaaarrrrgh'
let chewieRegex = /Aa*r*/; 

let result10 = cheweQuote.match(chewieRegex);
// console.log(result10);


// Find Characters with Lazy Matching

let string = 'titanic'
let regex = /t[a-z]*?i/
// console.log(string.match(regex)); 

let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/;
let result11 = text.match(myRegex4);
console.log(result11);
