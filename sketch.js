var ground;
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200);

  
  //create a trex sprite
  trex = createSprite(50,150,20,20);
  trex.addAnimation("Trex Animation",trex_running);
  trex.scale = 0.5;
  ground = createSprite(300,180,600,20);

 
}

function draw(){
  background("cyan");
  drawSprites(); 
  
  // ALL IF CONDITIONS IN DRAW FUNCTION
  if (keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 1;

  trex.collide(ground);

}
