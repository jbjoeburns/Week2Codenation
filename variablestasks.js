// Task 1
let myname = "Joe"
let age = "24"
let colour = "purple"

console.log(`Hi my name is ${myname}, my age is ${age} and my favourite colour is ${colour}`)

myname = "test1"
age = "test2"
colour = "test3"

console.log(`This is a test for the variable updates! ${myname} ${age} ${colour}`)

// Task 2
let breakfast = "Omlette"
let lunch = "Spaghetti"
let dinner = "Roast Chicken"

console.log(`For breakfast I had ${breakfast}, lunch I had ${lunch} and dinner I had ${dinner}`)

breakfast = "cereal"
lunch = "sandwich"
dinner = "lasagna"

console.log(`Tomorrow, for breakfast I'll have ${breakfast}, lunch I have ${lunch} and dinner I have ${dinner}`)

// Task 3
const datenow = new Date();
let datenowdays1 = datenow.toString()
const datelater = new Date("2023-03-28");
var timeuntil = datelater - datenow;
var days = Math.floor(timeuntil / (1000 * 60 * 60 * 24)) + 1;
console.log(`It is ${days} days until my birthday!`)

// Task 4
const gridparts = ["   |", "------------",];
const space1 = "x"
const space2 = "o"
const space3 = " "
const space4 = "x"
const space5 = "x"
const space6 = " "
const space7 = "o"
const space8 = " "
const space9 = " "

let i = 1;

while (i < 12) {
    if(i % 4 == 0)
        console.log(gridparts[1]);
    else if (i == 2)
        console.log(` ${space1} | ${space2} | ${space3}`);
    else if (i == 6)
        console.log(` ${space4} | ${space5} | ${space6}`);
    else if (i == 10)
        console.log(` ${space7} | ${space8} | ${space9}`);
    else
        console.log(gridparts[0] + gridparts[0]);
    i++;
}