// ZADANIE 1
let box1 = document.getElementById("zad1")
for (let i = 0; i < 10; i++) {
    if (i < 5) {
        box1.innerHTML += "_ " 
    } else {
        box1.innerHTML += "* "
    }
}

// ZADANIE 2 
let string = "";
for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 10; i++) {
        if (i < 5) 
        {
        string += "_ "
        } else {
        string += "* " 
        }      
}
string = string + "\n"
}
document.getElementById("zad2").innerHTML = string;

// ZADANIE 3
let string1 = "";
for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
    if (i < j + 1) {
        string1 += "*" 
    } else {
        string1 += "-"
    } 
}
string1 = string1 + "\n"
}
document.getElementById("zad3").innerHTML = string1;

