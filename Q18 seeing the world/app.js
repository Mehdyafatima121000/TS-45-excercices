// EX 18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['capetown', 'newyork', 'colombo', 'paris', 'rome'];
//console.log('original :' + places);
//print your array in alphabetical order without modifying
//console.log('copy ' +[...places].sort());
//show that your array is still in its original order by printing it.
//console.log('original :' + places);
//print your array in reverse alphabetical order without changing order
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
//show that your order is still in its original order
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
//Reverse the order of list 
console.log('copy ' + __spreadArray([], places, true).sort());
//reverse again
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
