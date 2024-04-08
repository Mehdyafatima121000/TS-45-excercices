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
