// Q #2 Personal Message

let personName: string="ERIC";
console.log(`hello ${personName} ,would you like to learn some Python today?
`)

// Q #3

// lower case
let personName: string = "Babar"
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toLocaleUpperCase());

// titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));

//Q #4  Famous Quote


let quote: string="A person who never made a mistake never tried anything new";
let author: string="Albert Einstein"
console.log(`${author} once said, "${quote}`);


//Q #5 Famous Quote 2


let quote: string= "A person who never made a mistake never tried anything new";
let famous_person="Albert Einstien";
let message=`${famous_person} once said, ${quote}`;
console.log(message);

//Q #6 Stripping Names
//  \n is for enter wali space and \t is for 4 time space


let personName: string =`\n\t BABAR AZAM\t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);

//Q #7 NUMBER 8

console.log(5 +3);
console.log(11 -3);
console.log(4 *2);
console.log(16 /2);

//Q #8

console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);

//Q #9 Favorite Number


let favoriteNumber: number = 4;
console.log(`My favourite number is ${favoriteNumber}`);

//Q #10 Comment simple code

//my name is Mehdya
//Dated 18/02/2024
//this program will run simple code just like hello world
console.log(`hello world simple program`);

//Q #11 Array

let members: string[ ]=[`Aazam`,`saqi`,`shahid`];
for(let i=0; i<members.length; i++){
    console.log(members[i]);
}

//Q #12 Message Greetings

let members: string[ ]=[`Aazam`,`saqi`,`shahid`];
let message: string=`kal birthday hai kis ki:`;
for(let i=0; i<members.length; i++){
    console.log(message + members[i]);
}

//Q #13 Transportation

let transportation : string [] = [`bus`,`car`,`suzuki`,`bike`];
for (let i=0; i<transportation.length; i++){
console.log(`I would like to own a ` + transportation[i]);
}

//Q #14 INVITATION AND REMOVING A GUEST NAME

let guest_list : string [ ]= [`anum`,`sana`,`fariha`,`urwa`];
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Friends ' + guest_list[i] + `,\nWe invited you on dinner Today.\n\nThank you`)
}
console.log(`Sorrymadam/sir.${remove_guest} You are not invited for lunch.`);

for(let i=0; i<guest_list.length; i++){
console.log('Respected Madam ' + guest_list[i] + ',\nYes you are still invited for tommorow lunch\nThank You\n')}
guest_list.splice(0,2)

console.log(guest_list)

//Q #15 Replacing a Guest


let guest_list : string [ ]= [`anum`,`sana`,`fariha`,`urwa`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThank you\n`)
}
let not_present : string = `fariha`;
let new_guest : string = `rina`;
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThank you\n`)
}
console.log(`Dear. ${not_present} Will not coming today. `)

//Q #16 Invite some more guest

let guest_list : string [ ]= [`anum`,`sana`,`fariha`,`urwa`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThank you\n`)
}
let not_present : string = `fariha`;
let new_guest : string = `rina`;
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThank you\n`)
}

guest_list.unshift(`reema`,`waqas`,`asad`);
for(let i=0; i<guest_list.length; i++){
    console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.we found big table so we decided to invite 3 more guests\nThank you\n`)
}

//Q #17 Shrink Guest

let guest_list : string [ ]= [`anum`,`sana`,`fariha`,`urwa`];
//for(let i=0; i<guest_list.length; i++){
 //   console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThank you\n`)
//}
let not_present : string = `fariha`;
let new_guest : string = `rina`;
guest_list[2] = new_guest;
//for(let i=0; i<guest_list.length; i++){
   // console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThank you\n`)
//}

guest_list.unshift(`reema`,`waqas`,`asad`);
//for(let i=0; i<guest_list.length; i++){
 //   console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.we found big table so we decided to invite 3 more guests\nThank you\n`)
//}
console.log(`\nunfortunately we can not arrange big table , only two people allow.`)
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Guyz.${remove_guest} you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
     console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThankyou\n`)
}
    guest_list.splice(0,2)
    console.log(guest_list)


//Q #18 SEEING THE WORLD

let places : string [] = ['capetown','newyork','colombo','paris','rome'];
//console.log('original :' + places);
//print your array in alphabetical order without modifying
//console.log('copy ' +[...places].sort());
//show that your array is still in its original order by printing it.
//console.log('original :' + places);
//print your array in reverse alphabetical order without changing order
console.log('copy ' +[...places].sort().reverse());
//show that your order is still in its original order
console.log('copy ' +[...places].sort().reverse());
//Reverse the order of list 
console.log('copy ' +[...places].sort());
//reverse again
console.log('copy ' +[...places].sort().reverse());

//Q #19  Finally select guest for invitation

import{ guest_list } from '../Q14 GUEST LIST/app'
console.log(`n\ Printing number of guest invited`)
console.log(`We had finally invited ${guest_list.length} from excercise 14`)
//agar 14 and 19 dono folders ek sath open na hue to ye import export ni hota 

//Q #20 Languages Array

let languages : string [] = ['urdu','turkish','punjabi','chinese']
console.log("list of languages:")
for(let top of languages){
    console.log(top)
}

//Q #21 TYPESCRIPT Interface / object

interface item {
    name : string
    price : number
}
//create two objects
const book: item ={
    name: 'ESSENTIAL TYPESCRIPT',
    price:450
}
const apple: item ={
    name: 'apple',
    price:500
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`)
//two $$ mein ek $ to run krane k liye hote hai or dusra
//hota hai price mention k lye dala hai hum ek dollar kam bhi ker sakte the or ruppes likh skte the

//Q #22 Intentional error

//jan bujh k error create kerna hai
let array: (string | number) [] = ['babar','taha',3,5,8,]
console.log(array[5])
//errorko correct kerna hai program close kernese pehle so,
let array: (string | number) [] = ['babar','taha',3,5,8,"rahi"];
console.log(array[5])
//if you wanna print someone else name so,
console.log(array[2])
console.log(array[3])

//Q 23 Conditional test

let cars : string = 'subaru';
//Test 1: Equality comparision(True) 
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru'); //true
//conditional is a data type of bolean

//Test 2 : Strict equality comparision (True) isme 3 time === hote hen to check strict data type
console.log("Is car === 'subaru'? I predict True.");
console.log(cars === 'subaru'); //true
//Test 3 : Strict InEquality comparision (Flase) inequalitymeans car truck k barabar na ho to answer false dena
console.log("Is car = 'subaru'? I predict True.");
console.log(cars = 'subaru'); //false is mein ek = hoga
//Test 4 : Strict InEquality comparision (Flase) is mein do ba ==
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru'); //false

//Test 5 : Less then comparision comparision (Flase) is mein < less then lage ga
//means agar woh chota hai to 
console.log("Is car < 'subaru'? I predict True.");
console.log(cars < 'subaru'); //lexicography predict 
//agar 3 number 5 se chota hua to ye true ker dega

//Q #24 MORE CONDITIONAL TEST

let car: string = 'subaru';
let age: number = 25;
let numbers: number[] = [1,2,3,4];



//string tests


//Test 1: Equality (True) 
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //true case-insensitive
//conditional is a data type of bolean


//Test 3 : Inequality  (true) ! ke sath ek = hoga to ye true krega
console.log("Is car != 'toyota'? I predict true.");
console.log(car === 'toyota'); //true

//Test 4 : Inequality  (false)
console.log("Is car !== 'subaru'? I predict true.");
console.log(car === 'subaru'); //false case sensitive


//Test 5: lower case conversion (true) 
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru'); //true converted to lower case

//Test 6: lower case conversion
console.log("Is car === car.toLowerCase() ? I predict false.");
console.log(car === car.toLowerCase()); //false (orignal value remains uppercase) 

//** Numerical Tests**

//Test 7 : Equality (True)
console.log("Is age == 25? I predict true.");
console.log("age == 25"); //true

//Test 8 : InEquality (false)
console.log("Is age != 30? I predict true.");
console.log("age != 30"); //false
//! ke agey jab ek = laga hoto ye not equal kehlae ga


//test 9 greater than (false)
console.log("Is age >= 30? I predict false.");
console.log(age > 30) //true

//test 10 less than (true)
console.log("Is age <= 25? I predict true.");
console.log(age > 25) //true

//Logical operators

//Test 11: AND (True)
console.log("Is age > 20 && age < 30? I predict True,");
console.log(age > 20 && age < 30); // true both conditions met

//Test 12: OR (False)
console.log("Is age > 30 || age < 18? I predict false,");
console.log(age > 30 || age < 18); // neither conditions met



//***Array tests ***

//Test 13: In array (true)
console.log("Is 3 in numbers? I predict true,");
console.log(3 in numbers); // true (checks for index existence)

//Test 14: Not In array (false)
console.log("Is 5 in numbers? I predict true,");
console.log(5 not in numbers); // true (negation of in operator)

//Q #25 Alien Color

//create a variable called alien color
let alien_color: string ="green";

//write an if statement to test whether the alien's color is green.
//if it is print a message that the player just earned 5 points.
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}

//write one version of this program that passes the iftest an other that
// the version that fails will have no output

alien_color = "red";
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}

//Q #26 Alien Color 2

//Choose a color for an alien as you did in excercise 25 and write an if-else chain

let alien_color: string ="green";

//if statement to test whether the alien's color is green.
//if it is print a message that the player just earned 5 points.

if(alien_color == "green"){
    console.log("the player just earned 5 points for shooting the alien.");

}

//if the alien color isn't green print a statement that the player just earned 10 points
else{
    console.log("the player just earned 5 points.")
}


// task is write the program ifnot run then else run

alien_color = "red";
if(alien_color == "green"){
    console.log("the player just earned 5 points for shooting the alien.");
}

//Q #27 ALIEN COLOR 3

let alien_color: string ="green";
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}


else if(alien_color == "yellow"){
    console.log("the player just earned 10 points.");
}

else if(alien_color == "red"){
    console.log("the player just earned 15 points.");
}


else{
    console.log("please select right color")
}

//version 2
alien_color ="red";
if(alien_color == "green"){
    console.log("the player just earned 5 points.");
}


else if(alien_color == "yellow"){
    console.log("the player just earned 10 points.");
}

else if(alien_color == "red"){
    console.log("the player just earned 15 points.");
}


else{
    console.log("please select right color")}

    //Version 3
    alien_color ="yellow";
    if(alien_color == "green"){
        console.log("the player just earned 5 points.");
    }
    
    
    else if(alien_color == "yellow"){
        console.log("the player just earned 10 points.");
    }
    
    else if(alien_color == "red"){
        console.log("the player just earned 15 points.");
    }
    
    
    else{
        console.log("please select right color")}

        //Q #28 STAGES OF LIFE

        let age: number = 25;
if(age<2){
    console.log("the person is a baby.")
}

//if the baby is 2 yrs old but less than 4
else if(age>= 2 && age <4){
console.log("person is toddler.")
}

//if the person is at least 4 but less than 13

else if(age>=4 && age <13){
    console.log("person is kid.")
    }

    //if the person is at least 13 but less than 19
    else if(age>= 13 && age <19){
        console.log("person is teenager.")
        }


 //if the person is at least 20 but less than 65 is an adult

 else if(age>= 13 && age <19){
 console.log("person is adult.")
 }

 //if the person is 65 or older is an elder
else{
 console.log("person is adult.")
 }

// Q #29 FAVORITE FRUIT ARRAY

//Favorite Fruit: Make a array of your favorite fruits, 
//and then write a series of independent if
 //statements that check for certain fruits in your array.
 //Make a array of your three favorite fruits and call it favorite_fruits.


 //Write five if statements. Each should check whether a certain kind
 // of fruit is in your array. If the fruit is in your array,
 // the if block should print a statement, such as You really like bananas!

 //*** is ke terminal ko run krega sirf tsc cause is mein cofig.json ki file bani h
 let favorite_fruits : string [ ] = ['apple','guava','banana'] 
 
 if(favorite_fruits.includes('apple')){  //.includes find and print the name in your array
    console.log('you really like apple!')
 }

 if(favorite_fruits.includes('guava')){
    console.log('you really like guava!')
 }

 if(favorite_fruits.includes('orange')){
    console.log('you really like orange!')
 }

 if(favorite_fruits.includes('banana')){
    console.log('you really like banana!')
 }

 if(favorite_fruits.includes('mango')){
    console.log('you really like mango!')

 }

 
//Q #30 HELLOADMIN ARRAY

//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let users: string [] = ['peehu','meehu','batota','sheru','admin']

for(let user of users ){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }


else{
    console.log(`Hello ${user}, thankyou for logging in again.`)

    }   
}

//Q #31  NO USERS
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!



let users: string [] = ['peehu','meehu','batota','sheru','admin']

    if(users.length === 0){
        console.log("We need to find some users!")
    }
//• Remove all of the usernames from your array, and make sure the correct message is printed.

else{
    users = [];
    console.log("All users have been removed" + users.length)

    }   

    //Q #32 CHECKING NAMES

    //array of current users
let current_users = ['maha','riya','mehu','pehu','waniya'];
//array of new users
let new_users  = ['mahai','rina','hamihu','santa','mehu'];

//loop through new_users check for available user names

new_users.forEach(newUsername => {
let our_condition = current_users.some (current_one_user => current_one_user.toLowerCase() === newUsername.toLowerCase())

if(our_condition){
    console.log('sorry ${newUsername} is already taken!')
}else{
    console.log('This user name ${newUsername} is available')
}
})

//Q #33 
//ceating an array


let numbers = [1,2,3,4,5,6,7,8,9];

//using for-loop
for(let oneNumber of numbers){
    let ordinalEnding: string;
    if(oneNumber === 1){
        ordinalEnding = "st"
    }else if(oneNumber === 2){
        ordinalEnding = "nd"

    }else if(oneNumber === 3){
        ordinalEnding = "rd"

    }else{
        ordinalEnding = "th"
    }
console.log(`${oneNumber}${ordinalEnding}`);
    }


    //Q #34 STORE PIZZA FLAVORS IN ARRAY

    let pizza = ["chicken tikka","malai boti","afghani feast"]

//using for loop ye loop yani curly bracket ke ander wala msg h jo jitne array honge un ke sath print hoga
for (let onePizza of pizza){
    console.log(`i like ${onePizza} pizza`);
}

//print a message outide of the for-loop
//ye loopyani curly bracket ke bahar wala msg haijo ek bar he print hoga
console.log("pizza is love")

//Q #35 PRINT ANIMALS NAMES WITH A MESSAGE

//creating a array
let petAnimals = ["cat","dog","rabbit"]

//using for-loop
for(let OnePet of petAnimals){
console.log(`A ${OnePet} g would make a great pet. `)
}
//print a message outtside for-loop
console.log("Any of these animals would make a great pet!")



//Q #36

//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
//that should be printed on the shirt. The function should print a sentence 
//summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt (size: string, printMessage: string){
    console.log(`You Selected ${size} size shirt with ${printMessage} prints on shirt`)
    }
    
    make_shirt("Medium","CODE WITH MEHDYA")
    
    make_shirt("small","Mehdya")

    //Q #37
    //Large Shirts: Modify the make_shirt() function so that shirts are large by 
//default with a message that reads I love TypeScript. Make a large shirt and
// a medium shirt with the default message, and a shirt of any size with a different message.


//Making a Function
function make_shirt (size: string = "Large", printMessage: string = "I love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
    }
    //Calling a Function with by-default values
    make_shirt();
    //Calling a function now with Medium size and default message
    make_shirt("Medium")
    //Calling a function now with Small size and Different print message
    make_shirt("Small", "I love java script")
    
    
//Q #38 CITY
// cities at least 3 print a simplr sentence 


function describe_city(city: string, country:string = 'default country'){
    console.log(` ${city} is in ${country}`);

}
describe_city('Karachi','Pakistan');
describe_city('Tokyo','Japan');
describe_city('Paris');

//Q #39 CITY COUNTRY

function city_country(city: string, country: string){
    return `${city},${country}`;

}
console.log (city_country('karachi','pakistan'));
console.log (city_country('Tokyo','Japan'));
console.log (city_country('Paris','France'));

//Q #40 ALBUM

import { stringify } from "querystring";

//40 album
function make_album (artist: string, title: string, tracks?:number) {

    const album: {artist: String, title: string, tracks?: number} = {
    
    artist : artist,
      title : title 
}


if(tracks !== undefined){
    album.tracks =tracks
}
return album;
}
const album1 = make_album('artist 1', 'album title 1');
console.log(album1);
const album2 = make_album('artist 2', 'album title 2');
console.log(album2);
const album3 = make_album('artist 3', 'album title 3',12);
console.log(album3);


//Q #41 MEGICIANS

//41 magician
let magicians : string[] = ['harry poter', 'suhani shah', 'humple dumple', 'ron wasley'];
function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magicians)

//Q #42 GREAT MEGICIANS




let magicians : string[] = ['harry poter', 'suhani shah', 'humple dumple', 'ron wasley'];


function make_great (magiciansArray:string[] ){

for(let i=0; i<magiciansArray.length; i++){
    magicians[i] = 'the great ' + magiciansArray[i]
}
}

function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magicians);
show_magicians(magicians);

//Q #43 UNCHANGED MEGICIANS

let magicians : string[] = ['harry poter', 'suhani shah', 'humple dumple', 'ron wasley'];

function copyarray(arr:string[]){
    return [...arr]
}
function make_great (magiciansArray:string[] ){

for(let i=0; i<magiciansArray.length; i++){
    magiciansArray[i] = 'the great ' + magiciansArray[i]
}
}

function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagiciansArray =  copyarray(magicians)

make_great(copyMagiciansArray);

console.log('This is my original array');
show_magicians(magicians);

console.log('/n/nThis is my modified copy of the array');
show_magicians(magicians);

//Q #44 SANDWICHES

function makesandwich (item: string[]) {
    console.log('Making your sandwich with:');
    item.forEach(Element =>("- " + Element));
    console.log('Enjoy your sandwich !');
}
makesandwich(['Ham','Cheese','Lettuce']);
makesandwich(['Turkey','Bacon']);
makesandwich(['Jelly','Peanut butter']);

//Q #45 CARS
type car = {
    manufacture: string
    model: string
    [key: string]: any;
    }
    function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
        return{
            manufacture,
            model,
            ...optional,
        }
    }
    const mycar: car = createCar("toyota","corolla", {color: "silver" , year: "2024"})
    console.log(mycar)
    





        
        







