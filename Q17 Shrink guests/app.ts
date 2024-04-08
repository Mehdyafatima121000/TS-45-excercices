let guest_list : string [ ]= [`anum`,`sana`,`fariha`,`urwa`];
//for(let i=0; i<guest_list.length; i++){
 //   console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThank you\n`)
//}
let not_present : string = `fariha`;
let new_guest : string = `rina`;
guest_list[2] = new_guest;
//for(let i=0; i<guest_list.length; i++){
   // console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThank you\n`)
//}

guest_list.unshift(`reema`,`waqas`,`asad`);
//for(let i=0; i<guest_list.length; i++){
 //   console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.we found big table so we decided to invite 3 more guests\nThank you\n`)
//}
console.log(`\nunfortunately we can not arrange big table , only two people allow.`)
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Guyz.${remove_guest} you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
     console.log(`Dear Friends ` + guest_list[i] + `,\nWe invited you on dinner Today.\nThankyou\n`)
}
    guest_list.splice(0,2)
    console.log(guest_list)
     