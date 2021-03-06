var canvas;
var cars, car1, car2, car3, car4,car5,robber;

var track, car1_img, car2_img, car3_img, car4_img,car5_img,robber_img;
var PLAY=1;
var END=0;
var gameState=PLAY
var carGroup;

function preload(){
  track_img = loadImage("image/track.jpg");
  car1_img = loadImage("image/car1.png");
  car2_img = loadImage("image/car2.png");
  car3_img = loadImage("image/car3.png");
  car4_img = loadImage("image/car4.png");
  car5_img = loadImage("image/car5.png");
  robber_img = loadImage("image/theft.png");
 
}

function setup(){
  canvas = createCanvas(displayWidth-30,displayHeight-20);

  carGroup =new Group();

  track=createSprite(1000,1000,2000,2000);
  track.addImage("track",track_img);

  robber=createSprite(1000,500,50,50);
  robber.addImage("theft",robber_img);

  

}


function draw()
{
  
  background("lightblue");

if(gameState===PLAY)
{
  track.velocityY = 3;

  if(track.y > 3000)
  {
    track.y= 1000;
  }

  if(keyDown("LEFT_ARROW"))
  {
    robber.x= robber.x-2;
  }

  if(keyDown("RIGHT_ARROW"))
  {
    robber.x= robber.x+2;
  }

  Spawncars();

  if(carGroup.isTouching(robber))
  {
    gameState = END;
  }

}
else if (gameState === END)
{
  track.velocityY = 0;
  carGroup.setVelocityYEach(0)
}
  
 
  
  drawSprites();
  
}
//create function
function Spawncars()
{
  if(frameCount % 200 ===0){
    var randX=random(800,1200);
    var cars = createSprite(randX,100,50,50)
    cars.velocityY=3;
    var randcar =Math.round(random(1,5));
    switch(randcar)
    {
      case 1 : cars.addImage(car1_img);
      break;
      case 2 : cars.addImage(car2_img);
      cars.scale = 0.23;
      break;
      case 3 : cars.addImage(car3_img);
      cars.scale = 0.23;
      break;
      case 4 : cars.addImage(car4_img);
      cars.scale = 0.05;
      break; 
      case 5 : cars.addImage(car5_img);
      break;
      
    }
    carGroup.add(cars);
  }

}





