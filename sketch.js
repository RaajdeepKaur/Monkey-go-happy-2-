var bananaImage;
var obstacleImage; 
var obstacleGroup; 
var background;
var score;
var ground;
var player;
var foodGroup;

function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(400, 400);
  
  background.velocityX = -4;
  background.x = background.width/2;
  
  player.addAnimation(player_running);
}

function draw() {
  background("jungle.jpg");
  
  if(player.isTocuhing(foodGroup)){
    score = score + 2;
    foodGroup.destroy();
  }
  
  switch(score){
    case 10 : player.scale = 0.12;
      break;
    case 20 : player.scale = 0.14;
      break;
    case 30 : player.scale = 0.16;
      break;
    case 40 : player.scale = 0.18;
      break;
      default : break;
  }
  
  if(obstacleGroup(player)){
    player.scale = 0.2;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  
  drawSprites();
}