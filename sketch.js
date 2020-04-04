var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,cloudImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  cloudImage = loadImage("cloud.png")
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(400);
  
  if(keyDown("space") && trex.y>=160) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
 console.log(trex.y)
  
  spawnclouds()
  trex.collide(invisibleGround);
  drawSprites();


}
function spawnclouds(){
if(World.frameCount % 120 === 0) {
var cloud;
cloud = createSprite(600,60,20,20)  ;
cloud.addImage(cloudImage);
cloud.velocityX=-3;
cloud.scale= 0.7;
  }

}






