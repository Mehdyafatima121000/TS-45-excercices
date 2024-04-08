function makesandwich(item) {
    console.log('Making your sandwich with:');
    item.forEach(function (Element) { return ("- " + Element); });
    console.log('Enjoy your sandwich !');
}
makesandwich(['Ham', 'Cheese', 'Lettuce']);
makesandwich(['Turkey', 'Bacon']);
makesandwich(['Jelly', 'Peanut butter']);
