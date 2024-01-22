// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var Kalvian_1 = "Shyaam"
console.log("The driver's name is "+Kalvian_1)
var Kalvian_2 = "Raghava"
console.log("The navigator's name is "+Kalvian_2)




// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if(Kalvian_1.length>Kalvian_2.length) {
  console.log("The driver has the longest name, it has "+Kalvian_1.length+" characters.")
} 
else if (Kalvian_1.length<Kalvian_2.length) {
  console.log("It seems that the navigator has the longest name, it has "+Kalvian_2.length+" characters.")
}
else {
  console.log("Wow, you both have equally long names, "+Kalvian_1.length+" characters!")
}




// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 

function findVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var newString = string.toLowerCase()
  var vowelsIndices = []
  
  for (let i=0; i<newString.length; i++) {
    if (vowels.includes(newString[i])) {
      vowelsIndices.push(i)
    }
  }

  if (vowelsIndices.length>0) {
    var vowelsPresent = vowelsIndices.map((index) => newString[index])

    console.log(`${vowelsPresent.join(' ')} ${vowelsIndices.join(' ')}`)
  }

  else {
    console.log('no vowels')
  }
}


findVowels('Kalvian')




// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function countCase(string) {
  var caseUpper=0
  var caseLower=0

  for (let i=0; i<string.length; i++) {
    if (string[i]>='A' && string[i]<='Z') {
      caseUpper++
    }
    else if (string[i]>='a' && string[i]<='z') {
      caseLower++
    }
  }

  console.log('Uppercase letters = '+ caseUpper)
  console.log('Lowercase letters = '+ caseLower)
}


countCase('Kalvian')




// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

function convertIntoCaps(string) {
  let newDriver = []
  for (let i=0; i<string.length; i++) {
    newDriver.push(string[i].toUpperCase())
  }

  console.log(newDriver.join(' '))
}


convertIntoCaps(Kalvian_1)




// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

function reverseString(string) {
  let newNavigator = ''
  for (let i=string.length-1; i>=0; i--) {
    newNavigator+=string[i]
  }

  console.log(newNavigator)
}


reverseString(Kalvian_2)




// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

var mergeNames = Kalvian_1 + " " + Kalvian_2
console.log(mergeNames)

var revMergeNames = Kalvian_2 + " " + Kalvian_1
console.log(revMergeNames)




// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

if (Kalvian_1<Kalvian_2) {
  console.log("The driver's name goes first.")
}
else if (Kalvian_1>Kalvian_2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
   console.log("What?! You both have the same name?")
}




// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

var lorenText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Tortor dignissim convallis aenean et tortor at. Purus gravida quis blandit turpis. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Et leo duis ut diam."

function countWords(string) {
  var words = string.trim().split(/\s+/)

  console.log(words.length)
}


countWords(lorenText)



function countOccurence(string,word){
  var words = string.trim().split(/\s+/)
  let count=0

  for (let i=0; i<words.length; i++) {
    if (words[i].toLowerCase() === word) {
      count++
    }
  }
  console.log(count)
}


countOccurence(lorenText,"et")




// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 


function checkPalindrome(string) {
  var stringLowerCase = string.toLowerCase()
  var stringTrimed = stringLowerCase.replace(/[^a-zA-Z]/g, '')

  var reverseStringTrimed = ""

  for (let i=stringTrimed.length-1; i>=0; i-- ) {
    reverseStringTrimed += stringTrimed[i]
  }

  if (stringTrimed == reverseStringTrimed) {
    console.log("Yes, it's a Palindrome!")
  }
  else {
    console.log("Oops, not a Palindrome")
  }
  
}



const phraseToCheck = "Was it a car or a cat I saw?"
checkPalindrome(phraseToCheck)
