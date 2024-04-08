interface item {
    name : string
    price : number
}
//create two objects
const book: item ={
    name: 'ESSENTIAL TYPESCRIPT',
    price:450
}
const apple: item ={
    name: 'apple',
    price:500
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`)
//two $$ mein ek $ to run krane k liye hote hai or dusra
//hota hai price mention k lye dala hai hum ek dollar kam bhi ker sakte the or ruppes likh skte the