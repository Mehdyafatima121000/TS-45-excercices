function makesandwich (item: string[]) {
    console.log('Making your sandwich with:');
    item.forEach(Element =>("- " + Element));
    console.log('Enjoy your sandwich !');
}
makesandwich(['Ham','Cheese','Lettuce']);
makesandwich(['Turkey','Bacon']);
makesandwich(['Jelly','Peanut butter']);