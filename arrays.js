// PART1

// Task1

favsongs = ["song1", "song2", "song3"]
favsongs.push("song4")
favsongs.push("song5")
favsongs.pop()
console.log(favsongs)

// Task2

Testlist = ["test1", "test2", "test3", "test4", "test5"]
console.log(Testlist);
SliceList = Testlist.slice(2);
console.log(SliceList);

// PART2

// Task1

favfilms = ["film1", "film2", "film3", "film4", "film5"]
favfilms.push("film6")
favfilms.push("film7")
let favfilmslength = favfilms.length;
let i = 0;

while (i < favfilmslength) {
    console.log(favfilms[i]);
    i++;
}

// Task2

let j = 0;

while (j < 6) {
    let randomnumber = Math.random() * 51 + 1;
    console.log(randomnumber)
    j++;
}

// Task3

let k = 0;

while (k < 10) {
    console.log(9 - k)
    k++;
}

// Task 4

filmsarray2 = ["film1", "film2", "film3", "film4"]

for (const element of filmsarray2) {
    console.log(element);
}

if(filmsarray2[2] == "Ghostbusters"){
    console.log("Yay it's Ghostbusters!")
}
else{
    console.log("Boo! We want Ghostbusters!!!")
}

//Task 5

let l = 0;

while (l < 6) {
    let randomnumber2 = Math.random() * 31 + 1;
    randomnumber2 = randomnumber2.toFixed();
    if(randomnumber2 % 7 == 0){
        console.log(`${randomnumber2} is divisible by 7`)
    }
    else{
        console.log(`${randomnumber2} is NOT divisible by 7`)
    }
    l++;
}

//Task6

bobsFollowers = ["John", "Sarah", "Rick", "Bill"]
hannahsFollowers = ["Claire", "Jane", "Bill", "Tim"]

for (const element1 of bobsFollowers) {
    for (const element2 of hannahsFollowers){
        if (element1 == element2){
            console.log(element1)
        }
    }
}

//Task7
// do{    
//     //code to be executed / loop body  
//     //update statement   
//     }while (condition);    

//For loop coninues for each element in an array for example, whereas a do...while loop continues to loop so long as a condition is fufilled
//while loops can be used to iterate indefinately until a desired change is detected which is an advantage, but are not ideal for going over each element in an array for example or some sort of list, which is a task more suited to for loops as they ensure the same entry isnt iterated over twice