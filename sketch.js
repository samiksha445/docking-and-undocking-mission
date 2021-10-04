var iss,spaceCraft;
var bg,issImage;
var hasDocked = false

function preload()
{
bg=loadImage("space.jpg");
issImg=loadImage("iss.png");
sImage=loadImage("spaceCraft1.png")
sImage1=loadImage("spaceCraft2.png")
sImage2=loadImage("spaceCraft3.png")
sImage3=loadImage("spaceCraft4.png")
}




function setup() {




  createCanvas(600,350);
  spaceCraft=createSprite(285,240);
  spaceCraft.addImage(sImage)
  spaceCraft.scale=0.15;
  iss=createSprite(330,130);
  iss.addImage(issImg);
  iss.scale=0.25;

  
}

function draw() {
  background(bg);  
  spaceCraft.addImage(sImage);
  if(!hasDocked)
  {
  spaceCraft.x=spaceCraft.x+random(-1,1);
  if(keyDown("UP_ARROW")){
    spaceCraft.y=spaceCraft.y-2
  }
  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(sImage3)
    spaceCraft.x=spaceCraft.x-1
  }
  if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(sImage2)
    spaceCraft.x=spaceCraft.x+1
  }
  if(keyDown("DOWN_ARROW")){
    spaceCraft.addImage(sImage1)
    
  }

  }
  if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25);
    fill ("white")
    text("DokingSuccessful",200,300)
  }
  drawSprites();
}