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

// Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

let crowd = 'PIP232CCCCC23321'
let testCriminals = /C+/
// console.log(crowd.match(testCriminals).pop());



// Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result12 = rickyAndCal.match(calRegex);
// console.log(result12);


// Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/
let result13 = lastRegex.test(caboose);
// console.log(result13);



// Match All Letters and Numbers

let quoteSample3 = "The 5 boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result14 = quoteSample3.match(alphabetRegexV2);
// console.log(result14);


// Match Everything But Letters and Numbers

let quoteSample4 = "The ... five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result15 = quoteSample4.match(nonAlphabetRegex);
// console.log(result15);


// Match All Numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result16 = movieName.match(numRegex);
// console.log(result16);


// Match All Non-Numbers

let movieNames = "2001: A Space Odyssey";
let noNumRegex = /\D/; // Change this line
let result17 = movieName.match(noNumRegex);
// console.log(result17);


// Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z]{2,}\d*/; // Change this line
let result18 = userCheck.test(username);
// console.log(result18)


// Match Whitespace

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result19 = sample.match(countWhiteSpace);
// console.log(result19)


// Match Non-Whitespace Characters

let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result20 = sample.match(countNonWhiteSpace);
// console.log(result20)


// Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
let result21 = ohRegex.test(ohStr);
// console.log(result21)



// Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let result22 = haRegex.test(haStr);
// console.log(result22)


// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result23 = timRegex.test(timStr);
// console.log(result23)



// Check for All or None

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result24 = favRegex.test(favWord);
// console.log(result24)


// Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\D*\d{2})/
let result25 = pwRegex.test(sampleWord);
// console.log(result25)
