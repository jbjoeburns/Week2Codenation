const gridparts = ["    |", "---------------"];

let i = 1;

while (i < 12) {
    if(i % 4 == 0)
        console.log(gridparts[1]);
    else
        console.log(gridparts[0] + gridparts[0]);
    i++;
}

