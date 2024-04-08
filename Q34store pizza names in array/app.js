var pizza = ["chicken tikka", "malai boti", "afghani feast"];
//using for loop ye loop yani curly bracket ke ander wala msg h jo jitne array honge un ke sath print hoga
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("i like ".concat(onePizza, " pizza"));
}
//print a message outide of the for-loop
//ye loopyani curly bracket ke bahar wala msg haijo ek bar he print hoga
console.log("pizza is love");
