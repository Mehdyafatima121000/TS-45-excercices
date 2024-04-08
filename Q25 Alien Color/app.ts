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