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


