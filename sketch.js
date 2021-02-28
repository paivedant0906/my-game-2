  // defining variables.
  var player,playerimage;
  var earth,earthimage;
  var background1,background1image;
  var gameState="start";
  var obstacle,o1,o2,o3,o4;
  var iground;
  var obstaclesGroup;
  var bomb,bombImage;
  var play,playimage;
  var healthb1,healthb2,healthb3,healthb4;
  var healthholder;
  var bombblast;
  var bombGroup;
  var size=300;
  var start;
  var abouti,homei;
  var home,about;
  var name,name1;
  var ei1,ei2;
  var score=0;
  var safeprecent=0;
  var dangerprecent=0;
  var bottle,bottleimage;

  // function to load Images.
  function preload(){
    background1image=loadImage("bg.jpg");
    playerimage=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png");
    earthimage=loadImage("earth simple.png");
    o1=loadImage("wodcutter.png");
    o2=loadImage("car.png");
    o3=loadImage("industry.png");
    bombImage=loadImage("bomb.png");
    playimage=loadImage("play.png");
    bombblast=loadImage("bombblast.png");
    start=loadImage("start.jpg");
    abouti=loadImage("about.png");
    homei=loadImage("home.png");
    ei1=loadImage("EARTHHAPPY.png");
    ei2=loadImage("sadearthmain.png");
    bottleimage=loadImage("energydrink.png");
  }

  function setup() {
    // creating camvas.
    createCanvas(displayWidth-100,displayHeight-150);

   // creating background1.
    background1=createSprite(displayWidth/2,displayHeight/2-50,displayWidth*2,displayHeight);
    background1.velocityX=-6;
    background1.addImage("bg",background1image);
    background1.scale=1;

    // creating background2.
    background2=createSprite(-displayWidth/2,displayHeight/2-50,displayWidth*2,displayHeight);
    background2.velocityX=-6;
    background2.addImage("bg2",background1image);
    background2.scale=1;

    // creating borders for health.
    healthholder=createSprite(displayWidth-350,50,300,10);

    healthholder2=createSprite(displayWidth-350,100,300,10);

    healthholder3=createSprite(displayWidth-200,75,10,60);

    healthholder4=createSprite(displayWidth-500,75,10,60);

    // giving colours to healthhlders.
    healthholder.shapeColor="black";

    healthholder2.shapeColor="black";

    healthholder3.shapeColor="black";

    healthholder4.shapeColor="black";
    
    //  creating safe percent block.
    healthb1=createSprite(displayWidth-350,75,300,50);

    //giving colour to safe percent block1.
    healthb1.shapeColor="blue";

    // creating safe percent block safe percent block2.
    healthb2=createSprite(displayWidth-350,75,225,50);

   
    //giving colour to safe percent block2.
    healthb2.shapeColor="blue";
    
     //creating safe percent block3.
    healthb3=createSprite(displayWidth-350,75,150,50);

    //giving colour to safe percent block3.
    healthb3.shapeColor="blue";
    
    // creating safe percent block4.
    healthb4=createSprite(displayWidth-350,75,75,50);

    //giving colour to safe percent block4.
    healthb4.shapeColor="blue";
     
    //creating player and giving animation.
    player=createSprite(100,displayHeight/2+140,50,50);
    player.addAnimation("player",playerimage);
    player.addAnimation("blast",bombblast);
    player.scale=2;

     // creating home button  and adding image to it.
    home=createSprite(displayWidth-350,50,50,50);
    home.addImage(homei);

    // creating about button and adding image to it.
    about=createSprite(displayWidth/2,displayHeight/2,50,50);
    about.addImage(abouti);
    about.scale=1.2;

    // creating invisible ground to collide with player.
    iground=createSprite(displayWidth/2,displayHeight/2+160,displayWidth,10);
    iground.visible=false;

    // creating play button and adding image to it.
    play=createSprite(displayWidth/2,displayHeight/2-150,50,50);
    play.addImage(playimage);

    // creating earth and adding image to it.
    earth=createSprite(player.x+5,100,50,50);
    earth.addImage("e",earthimage);
    earth.scale=0.5;

    // creating groups.
    obstaclesGroup=new Group();
    bombGroup=new Group();
    bottleGroup=new Group();
  
    
  }

  function draw(){
    // creating gamestates.

    // creating gamestate start.
  if(gameState==="start"){
    // adding image to background
    background(start);

    // setting visibility of sprites.    
    home.visible=false;
    player.visible=false;
    earth.visible=false;
    background1.visible=false;
    background2.visible=false;
    play.visible=true;
    about.visible=true;
    healthholder.visible=false;
    healthholder2.visible=false;
    healthb1.visible=false;
    healthb2.visible=false;
    healthb3.visible=false;
    healthb4.visible=false;
    healthholder3.visible=false;
    healthholder4.visible=false;

    // adding images to design start page.
    image(ei1,200,displayHeight/2-300,100,100);
    image(ei2,displayWidth/2-100,displayHeight/2+50,150,150);
    image(earthimage,displayWidth-400,displayHeight/2-350,150,150);
    
    // text to welcome the player to the game.
    fill("black");
    textSize(30);
    text("WELCOME TO THE SURVIVAL OF EARTH",displayWidth/2-300,displayHeight/2-300);
    
    // giving instructions for pressing on play button.
    if(mousePressedOver(play)){
      gameState="play";
    }

    // giving instructions for pressing on about button.
      if(mousePressedOver(about)){
      gameState="about";
    }
    
    drawSprites();

    }

    // creating gamestate about.

     if(gameState==="about"){

    // creating Canvas.
    createCanvas(displayWidth-20,displayHeight+500);

    // setting background colour.
    background("white");

    // setting visibility to sprites.
    play.visible=false;
    about.visible=false;
    home.visible=true;

    // giving instructions for pressing on home button.
    if(mousePressedOver(home)){
      gameState="start";  
    }
    home.debug=true;
    
  drawSprites();

  // filling colour to text.
  fill("black");
  // setting size of text.
  textSize(20);
  //text instructions.
  text("Story:",50,50);
  text("Sonic has to save the earth from the clutches of death by global warming.",50,100);
  text("You have to help sonic for carrying the earth on his head and save it from carbon dioxide bomb, woodcutter, industries and cars that",50,150);
  text("produce gases and meanwhile also collect the seeds and water and so on for earth. In return the earth will give you energy drink and food to eat.",50,200);
  text("ALL THE BEST TO SAVE THE EARTH!",50,250);
  text("Goal:",50,320);
  text("Winning:",50,360);
  text("You win if:",50,400);
  text("The player touches all the nutrients to make the safe percentage to 100 and the score is 100",50,440);
  text("Losing:",50,480);
  text("You lose if:",50,520)
  text("The player touches the obstacles four times to make the danger percentage to 100 or if the player blasts with the bomb",50,560);
  text("OBSTACLES:",50,600);
  text("BOMB,INDUSTRY,CAR,AXE.",50,640);
  text("NUTRIENTS:",50,700);
  text("seed,water,ozonemolecule,energy bottle",50,740);
  text("INSTRUCTIONS:",50,780);
  text("IF THE PLAYER TOUCHES THE BOTTLE THE SCORE INCREASES BY 2",50,820);
  text("IF THE PLAYER TOUCHES ANY OF THE NUTRIENT EXCLUDING BOTTLE THE SAFE PERCENT INCREASES BY 25",50,860);
  text("IF THE PLAYER TOUCHES ANY OF THE OBSTACLE EXCLUDING BOMB THE DANGER PERCENT INCREASES BY 25",50,900);
  text("IF THE PLAYER TOUCHES  BOMB THE GAME IS OVER",50,940);
  text("CONTROLS:",50,980);
  text("PRESS SPACE TO JUMP",50,1020);
  text("PRESS RIGHT TO MOVE RIGHT TO A CERTAIN EXTENT TO PROTECT FROM BOMB",50,1060);
  text("PRESS LEFT TO MOVE RIGHT TO A CERTAIN EXTENT TO PROTECT FROM BOMB",50,1100);
   }
    
    // creating gamestate play.
    if(gameState==="play"){

    // setting colour to background.
    background(255,255,255);  
    
    // setting visibility to sprites.
    player.visible=true;
    earth.visible=true;
    play.visible=false;
    about.visible=false;
    home.visible=false;
    healthholder.visible=true;
    healthholder2.visible=true;
    healthb1.visible=true;
    healthholder3.visible=true;
    healthholder4.visible=true;
    background1.visible=true;
    background2.visible=true;

    // setting earth's position according to player.
    earth.y=player.y-100;
    earth.x=player.x;
     
    // reseting backgrounds.
    if(background1.x<0){
      background1.x=background1.width/2;
    }

    if(background2.x<0){
      background2.x=background2.width/2;
    }

   
     // giving controls to the player.
    if(keyDown("right")){
      player.x+=10;
    }

    if(keyDown("left")){
      player.x-=10;
    }

    if(keyDown("space")&& player.y>=320){
      player.velocityY=-12;
    }

    // adding gravity to player.
    player.velocityY=player.velocityY+0.8;
    
    // colliding player to invisible ground.
    player.collide(iground);
    
    // giving instructions to do certain taks using if condition.
    if(bombGroup.isTouching(earth)){
      gameState="bombend";
    }
    
    if(earth.isTouching(bottleGroup)){
      score=score+2;
      bottleGroup.destroyEach();
    }

    if(player.x>240){
      player.x=240;
    }
    if(player.x<40){
      player.x=40;
    }
   
  // displaying functions.
  spawnenergy();
  spawnobstacles();
  spawnbomb();
    
  drawSprites();

  // displaying score.
  textSize(40);
  fill("black");
  text("SCORE:"+score,displayWidth/2,50);
  }

  // creating gamestate bombend.
    if(gameState==="bombend"){
    // giving image to background.
    background(background1image);

    // displaying bombblast image.
    image(bombblast,player.x,player.y-100,100,100);

    }
  }

  // function to spawn obstacles at a certain framecount.
  function spawnobstacles(){

    // declaring framecount
    if(frameCount%150===0){

      // creating obstacle,giving velocityX and adding images to it.
      obstacle=createSprite(displayWidth+20,displayHeight/2+120,50,50);
      obstacle.velocityX=-6;

      // giving random value to obrand.
      var obrand=Math.round(random(1,3));

      // switching obrand to display random obstales.
      switch(obrand){
        case 1:obstacle.addImage(o1);
               obstacle.scale=1.6;
               obstacle.y=displayHeight/2+80;

        break;
        case 2:obstacle.addImage(o2);
               obstacle.y=displayHeight/2+80;
               obstacle.scale=0.9;
  
        break;
        case 3 :obstacle.addImage(o3);
                obstacle.y=displayHeight/2+80;

        break;
        default:break
      
      // adding obstacle to obstaclesGroup.
      obstaclesGroup.add(obstacle);
      };
    }
  }

  // function to spawn bomb at certain framecount.
  function spawnbomb(){

    // declaring framecount
    if(frameCount%100===0){

      // creating bomb,giving velocityX and adding images to it.
      bomb=createSprite(80,displayHeight/2-800,50,50);
      bomb.velocityY=6;
      bomb.addImage(bombImage);
      bomb.scale=0.4;

      // setting the x position of bomb to random.
      bomb.x=Math.round(random(20,480));
    
      // adding bomb to bombGroup.
      bombGroup.add(bomb);
    }
  }

  // function to spawn energy bottle at certain framecount.
  function spawnenergy(){

    // declaring framecount
    if(frameCount%250===0){

    //  // creating bottle,giving velocityX and adding images to it.
    bottle=createSprite(displayWidth/2+500,displayHeight/2-200,50,50);
    bottle.addImage(bottleimage);
    bottle.scale=0.6 ;   
    bottle.velocityX=- 6;

    // setting the depth of bottle.
    bottle.depth=background1.depth;
    bottle.depth=background2.depth;
    bottle.depth=bottle.depth+1;
    bottle.depth=bottle.depth+1;

    // adding bottle to bottleGroup.
    bottleGroup.add(bottle);
    }
  }