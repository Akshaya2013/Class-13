var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage


function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")

  cloudImage= loadImage("cloud.png")
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
 
invisibleGround=createSprite(200,190,400,1)
invisibleGround.visible=false;



}




function draw() {
background(220);

//console.log(round)random(12,50))

//jump when the space button is pressed
if (keyDown("space")&& trex.y>145) {
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(invisibleGround);
spawnClouds()
drawSprites();
}

function spawnClouds(){

  if(frameCount%60===0){
    cloud=createSprite(550,20,10,10)
  cloud.velocityX=-3;
  cloud.y=random(10,100)
  cloud.addImage("cloud",cloudImage)
  cloud.scale=0.6;
  trex.depth=cloud.depth
  trex.depth +=1  
  }
  
  

}