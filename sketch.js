var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup,obstacleGroup;
var score,backGround,survivalTime;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600,360);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)

  score = 0;
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}

function draw() {
  background("white")
  
  stroke("black");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);

if(ground.x < 300){
  ground.x = ground.width/2;
}
  
if(keyDown("space")){
  monkey.velocityY = -12
}
  
monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground);
  
food();
obstacles();

drawSprites();  
}
function food(){
  if(World.frameCount%80===0){
    banana = createSprite(400,200,20,20);
    banana.scale = 0.1
    banana.y = Math.round(random(120,200));
    banana.velocityX=-7;
    banana.setLifetime=100;
    banana.addImage(bananaImage);
    FoodGroup.add(banana);
}
}
function obstacles(){
  if(World.frameCount%240===0){
    obstacle = createSprite(600,330,10,40);
    obstacle.velocityX = -6;
    obstacle.scale = 0.1
    obstacle.lifetime = 300;
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
}
}  