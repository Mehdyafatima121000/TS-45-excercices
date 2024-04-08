var car = 'subaru';
var age = 25;
var numbers = [1, 2, 3, 4];
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
console.log(age > 30); //true
//test 10 less than (true)
console.log("Is age <= 25? I predict true.");
console.log(age > 25); //true
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
console.log(5, not in numbers); // true (negation of in operator)
