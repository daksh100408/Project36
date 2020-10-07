class Food{
constructor(x, y, width, height) {
var options={

    isStatic:true
}

this.foodStock = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.heght = height;
this.image = ("images/Milk.png");

this.lastFed = Bodies.rectangle(x, y, width, height);

}

}