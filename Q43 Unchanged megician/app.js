var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['harry poter', 'suhani shah', 'humple dumple', 'ron wasley'];
function copyarray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magiciansArray) {
    for (var i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = 'the great ' + magiciansArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
var copyMagiciansArray = copyarray(magicians);
make_great(copyMagiciansArray);
console.log('This is my original array');
show_magicians(magicians);
console.log('/n/nThis is my modified copy of the array');
show_magicians(magicians);
