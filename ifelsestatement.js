// Task1
const age = 17;
const country = "UK";

if (age <= 17 && country === "UK")
    console.log("Yes I can serve you");
else
    console.log("No you aren't old enough");

// Task2
const toppings = ["Pepperoni", "Cheese", "Sausage"];
const topping = "Pepperoni"

console.log("These are important ingredients for my pizza")
const test = '${topping} should not be on a pizza.'

if (toppings.includes(topping) === true)
    console.log(`I don’t mind having ${topping} on my pizza`);
else
    console.log(`${topping} should not be on a pizza.`);

// Task3
const password = "testpass"
let lengthofpass = parseInt(password.length);
console.log(typeof lengthofpass)
if (lengthofpass >= 8)
    console.log("Password is long enough");
else
    console.log("Password is too short");

// Task4
const num = 202
if(num % 3 == 0 || num % 5 == 0)
    console.log("Divisible by 3 or 5");
else
    console.log("Not divisible by 3 or 5");

// Task 5
if(num % 3 == 0 && num % 5 == 0)
    console.log("fizzbuzz");
else if(num % 3 == 0)
    console.log("fizz");
else if(num % 5 == 0)
    console.log("buzz");
else
    console.log("not fizz or buzz");

// Task6
num2string = num.toString()
function reverse(s){
    return s.split("").reverse().join("");
}
if ( reverse(num2string) == num2string)
    console.log("Palendrome!");
else
    console.log("not palendrome...");

// Task7
const time = 7
const placeOfWork = "work"
const townOfHome = "home"
if (time === 7)
    console.log(`${placeOfWork}`);
if (time === 8)
    console.log("commuting!");
if (time === 9)
    console.log(`${townOfHome}`);

// Task8
const jumble = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
const reversejumble = reverse(jumble)
const lengthjumb = reversejumble.length
const vowls = ["e", "a", "i", "o", "u"];
let position = 1
while (position != lengthjumb){
    let letter = reversejumble[position]
    if(vowls.includes(letter) === true){
        let letterstring = letter.toString()
        let positionreal = lengthjumb - position
        let positionstring = positionreal.toString()
        console.log(`${letterstring} at position ${positionstring}`);
        break
    }
    position++
}

//Task9
const word = "epepe"
const revword = reverse(word)
if (word[0] == revword[0])
    console.log("Yes!")
else
    console.log("No!")

//Task10
const num1 = 2
const num2 = 35

let addnums = num1 + num2
let multinumbs = num1 * num2
if (addnums % 2 == 0)
    console.log(addnums);
else   
    console.log(multinumbs)

    