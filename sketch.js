var dog, happyDog, dogImage;
var database;
var foodS, foodStock;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
 database = firebase.database();
 foodStock = database.ref('Food');
 foodStock.on("value", readStock);

  createCanvas(500, 500);
  dog = createSprite(400, 450, 20, 20);
  dog.addImage(dogImage);
  dog.scale = 0.1;
}


function draw() {  
background(46, 139, 87);

if(keyCode === UP_ARROW) {
writeStock(foodS);
dog.addImage(happyDog);
}

if(keyCode === 32) {
 dog.addImage(dogImage);
}

  drawSprites();
  textSize(15);
  fill("grey");
  stroke(2);
  text("Note: Press UP Arrow to feed the dog", 120, 20);
}

function readStock(data) {
foodS = data.val();
}

function writeStock(x) {
 if(x <= 0) {
  x = 0;

 } else{
  
  x = x-1;
 }

database.ref('/').update({
  Food:x
})


}