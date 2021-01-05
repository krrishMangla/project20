var cat , catImg , catImg2 , catAnimation;
var rat , ratImg , ratImg2 , ratAnimation;
var garden , gardenImg;


function preload() {

    gardenImg = loadImage("garden.png");
    
    catImg = loadImage("tomOne.png");
    catAnimation = loadAnimation("tomThree.png","tomTwo.png");
    catImg2 = loadAnimation("tomFour.png");
  
    ratImg = loadImage("jerryOne.png");
    ratAnimation = loadAnimation("jerryThree.png","jerryTwo.png");
    ratImg2 = loadAnimation("jerryFour.png"); 
}

function setup(){
    createCanvas(1000,800);
   
     //garden = createSprite(400,350);
     //garden.addImage("background",gardenImg)
    
     cat = createSprite(870,700,30,30);
     cat.addImage("cat_sitting",catImg);
     cat.scale = 0.1;
     cat.setCollider("rectangle",0,0,1100,900);
     cat.debug = true;

     rat = createSprite(200,700,30,30);
     rat.addImage("rat_eating_cheese",ratImg);
     rat.scale = 0.1;
     rat.setCollider("rectangle",0,0,800,800);
     rat.debug = true;
}

function draw() {

    background(gardenImg);

    if(cat.x-rat.x < rat.width/2+cat.width/2) 
       {
        cat.velocityX = 0;
        cat.addAnimation("cat_standing",catImg2);
        cat.x = 300;       
        cat.changeAnimation("cat_standing",catImg2);

        rat.addAnimation("rat_standing",ratImg2);
        rat.changeAnimation("rat_standing",ratImg2);
       
       } 
   
    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
     cat.velocityX = -1; 
     cat.addAnimation("cat_running",catAnimation);
     cat.changeAnimation("cat_running",catAnimation);
     rat.addAnimation("rat_running",ratAnimation);
     rat.frameDelay = 25;
     rat.changeAnimation("rat_running",ratAnimation);
    }
   }
