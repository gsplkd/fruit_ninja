var sword;
var swordimg;
var bg;
var PLAY = 1;
var END = 0;
var score = 0;
var gameState = PLAY;
var fruit, monster;
var fruit_group, monster_group;
var f1,f2,f3,f4;
var m1,m2;
var gameOver,gameOverimg,gameover_music ;
var knife_music;


function preload(){
  swordimg = loadImage("sword.png")
  bg = loadImage("bg.png");
  f1 = loadImage("fruit1.png");
  f2 = loadImage("fruit2.png");  
  f3 = loadImage("fruit3.png");
  f4 = loadImage("fruit4.png");
  gameover = loadImage("gameover.png");
  
  
  m1 =loadAnimation("alien1.png","alien2.png");
  knife_music=loadSound("Knife-Sharpen-C-www.fesliyanstudios.com.mp3");
  gameover_music=loadSound("gameover.mp3");
 
}

function setup(){
  createCanvas(600,600);
  sword = createSprite(300,300);
  sword.addImage(swordimg);
  sword.scale = 0.65;
  
  
  fruit_group = createGroup();
  monster_group = createGroup();
}

function draw(){
  background(bg);
  drawSprites();

  
  fill("black");
  textSize(22);
  text("Score: "+ score,260,130);
  
  
  if(gameState===PLAY){  
  sword.x=mouseX;
  sword.y=mouseY;
    enemy();
    fruits();
    
  
    if(fruit_group.isTouching(sword)){
      fruit_group.destroyEach();
      score=score+2;
      knife_music.play();
      
      
    }
  

    if(monster_group.isTouching(sword)){
      gameState= END;
      fruit_group.destroyEach();
      monster_group.destroyEach();
      fruit_group.setVelocityXEach(0);
      monster_group.setVelocityXEach(0);
      sword.addImage(gameover);
      sword.scale=2.5;
      sword.x=300;
      sword.y=300;
      gameover_music.play();
    }
   
    
}

}

function enemy(){
  if(frameCount%200===0){
    monster = createSprite(400,200,20,20);
    monster.addAnimation("moving",m1);
    monster.y =Math.round(random(100,300));
    monster.velocityX =-8-score/10;
    monster.lifetime = 50;
    monster_group.add(monster)
  }
}
   function fruits(){
    if(World.frameCount%80===0){
     fruit=createSprite(400,200,20,20);
  
     r=Math.round(random(1,4));
     if (r==1){
       fruit.addImage(f1)
}else if(r==2) {
  fruit.addImage(f2)
}else if(r==3) {
  fruit.addImage(f3)
}else if(r==4) {
  fruit.addImage(f4)
}
fruit.scale=0.3;
      fruit.y=Math.round(random(50,340));
     var position=Math.round(random(1,2));
      if (position ==1)
        {fruit.x=100;
         fruit.velocityX=-7-score/4;
        }
      else{
        fruit.x=0;
    fruit.velocityX=7+score/4;
      }
      
      fruit.setLifetime=100;
      fruit_group.add(fruit);
    }
   }









