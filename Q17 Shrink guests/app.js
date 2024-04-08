var guest_list = ["anum", "sana", "fariha", "urwa"];
//for(let i=0; i<guest_list.length; i++){
//   console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThank you\n`)
//}
var not_present = "fariha";
var new_guest = "rina";
guest_list[2] = new_guest;
//for(let i=0; i<guest_list.length; i++){
// console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThank you\n`)
//}
guest_list.unshift("reema", "waqas", "asad");
//for(let i=0; i<guest_list.length; i++){
//   console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.we found big table so we decided to invite 3 more guests\nThank you\n`)
//}
console.log("\nunfortunately we can not arrange big table , only two people allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Guyz.".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear Friends " + guest_list[i] + ",\nWe invited you on dinner Today.\nThankyou\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
