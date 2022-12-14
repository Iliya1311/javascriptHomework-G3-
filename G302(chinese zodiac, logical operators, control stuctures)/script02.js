console.log("Console online");

/*Write javascript code that will
get an input from the user
and calculate which Chinese Zodiac 
a given year is in
Formula for Chinese Zodiac caluclation:
(year - 4) % 12. 
Possible values:
0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig 
*/

let Rat = 0;
let Ox = 1;
let Tiger = 2;
let Rabbit = 3;
let Dragon = 4;
let Snake = 5;
let Horse = 6;
let Goat = 7;
let Monkey = 8;
let Rooster = 9;
let Dog = 10;
let Pig = 11;

let userinput = 11;
let formula = ((userinput - 4) % 12);

if (formula == 0) {
    console.log("Rat");
} else if (formula == 1) {
    console.log("Ox");
} else if (formula == 2) {
    console.log("Tiger");
} else if (formula == 3) {
    console.log("Rabbit");
} else if (formula == 4) {
    console.log("Dragon");
} else if (formula == 5) {
    console.log("Snake");
} else if (formula == 6){
    console.log("Horse");
} else if (formula == 7) {
    console.log("Goat");
} else if (formula == 8) {
    console.log("Monkey");
} else if (formula == 9) {
    console.log("Rooster");
} else if (formula == 10) {
    console.log("Dog");
} else if (formula == 11) {
    console.log("Pig");
} else {
    console.log("There is no other left, sorry!");
}
