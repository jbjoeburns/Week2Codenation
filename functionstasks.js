// Task 1
const factorial = (n) => {
    if ((n===0) || (n===1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));

// Task 2
let orderCount = 0;

const takeOrder = (topping, drink) => {
    console.log(`Pizza with ${topping}, and a ${drink}.`);
    orderCount++
}

takeOrder("pineapple", "pepsi")
console.log(orderCount)

// Task 3
let cash = 3000
let pin = 1234

function cashmachine (withdraw, pininput) {
    if (pininput != pin){
        console.log("Incorrect Pin")
    }
    else{
        if (withdraw > cash){
            console.log("Insufficent Funds")
        }
        else{
            console.log(`Withdrawing ${withdraw}`)
        }
    }
}

cashmachine(200, 1234)
cashmachine(8000, 1234)
cashmachine(200, 9999)