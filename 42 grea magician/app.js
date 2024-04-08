var magicians = ['harry poter', 'suhani shah', 'humple dumple', 'ron wasley'];
function make_great(magiciansArray) {
    for (var i = 0; i < magiciansArray.length; i++) {
        magicians[i] = 'the great ' + magiciansArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magicians);
show_magicians(magicians);
