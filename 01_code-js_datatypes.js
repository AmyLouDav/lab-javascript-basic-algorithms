// Students code

var globasNamespaceVariable = "This is global" //can go into every scope inc curly brackets 

let blockScopedVariable = "I am valid in ablock"

const constantAndBlockScopedVar = "I am a const"

const cappucino = "Hello I am Mr. Cappucino"

// cappucino = "I have been reassigned"

{
// A block is a place in the file where certain variables and functions are readabble (defined)
    let cappucino = "I am inside a funciton"
}

const todaysdate = "18/10/2021"
// computer just sees characters doesnt understand its a date, string defined by quotes, quotes arent a part of the string

const iamyearsold = 34
// make a choice about data types and giving a value

const millionsinthebank = null

const doIlikeGermany = undefined

const amIEnglish = true
const doIlikebananas = false
// data types that signify that something is true or false - logic (boolean) go together in pairs

const expressionhere = (2+5) * 6
//value isnt here, it is an expression

const powerfulstrings = `I am ${iamyearsold} years old`
// string templetes - allow you to write string in natural language, can bring in a value with dollar and curly brackets 

console.log(powerfulstrings)
