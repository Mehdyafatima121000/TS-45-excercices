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