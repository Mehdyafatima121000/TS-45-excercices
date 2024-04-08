// lower case
let personName: string = "Babar"
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toLocaleUpperCase());

// titlecase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
