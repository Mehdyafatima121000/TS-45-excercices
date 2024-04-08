var guest_list = ["anum", "sana", "fariha", "urwa"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear Friends " + guest_list[i] + ",\nWe invited you on dinner Today.\nThank you\n");
}
var not_present = "fariha";
var new_guest = "rina";
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear Friends " + guest_list[i] + ",\nWe invited you on dinner Today.\nThank you\n");
}
guest_list.unshift("reema", "waqas", "asad");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear Friends " + guest_list[i] + ",\nWe invited you on dinner Today.we found big table so we decided to invite 3 more guests\nThank you\n");
}
