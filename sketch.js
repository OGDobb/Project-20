var wall, thickness;
var speed, car;
var weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  car=createSprite(50, 200, 10, 30);
  
  speed=random(55,90);
  weight=random(400,1500);
  
  
  
  wall=createSprite(1500, 200, thickness, height/2);
  wall.shapeColor=(80,80,80);

  thickness=random(22,80);

  speed=random(223,321);
  weight=random(30,52);

  car.velocityX=speed;
}

function draw() {
  background("black");  

  if(wall.x=car <(car.width=wall.width)/2) {
  car.velocityX=0;
 

  if(hasCollided(car, wall)) {
  car.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage>10) {
  wall.shapeColor=color(255,0,0);
  }

  if(damage>10) {
  wall.shapeColor=color(0,255,0);
  }
  }

  car.display();
  wall.display();
  drawSprites();
}
}

function hasCollided(car, wall) {

  carRightEdge=lcar.x +lcar.width;
  wallLeftEdge=lwall.x;

  if (carRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}