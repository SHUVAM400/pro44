var earth, earthImg;
var spaceShip, spaceshipImg
var backgroundImg

function preload(){
  earthImg.loadImage("earth.png")
spaceShipImg.loadImage("spaceship")
backgroundImg.loadImage("space.jpg")
}
function setup() {
  createCanvas(600,600);
  earth.createSprite(600,600,600,80)
  earth.addImage(earthImg)
  spaceShip.createSprite(300,300,50,50)
  spaceShip.addImage(spaceshipImg)
 
}

function draw() {
  background("blue");  
  
  
  
  
  
  drawSprites();
}