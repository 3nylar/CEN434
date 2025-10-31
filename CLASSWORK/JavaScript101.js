let Obj1 = {name: "Alex", Age: 20};

let area = function(r) {
    var pi = 3.14;
    var Area = pi * pi * r;
    return Area;
}

let r = 9;
console.log("Area of a circle of radius " + r + " is " + area(r));