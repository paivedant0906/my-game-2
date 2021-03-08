  // defining variables.
  var player,playerimage;
  var earth,earthimage;
  var background1,background1image;
  var gameState="intro";
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
  var safepercent=0;
  var life=3;
  var bottle,bottleimage;
  var jumpsound
  var winsound
  var bombblastsound
  var morei,hearti;
  var n1,n2,n3;
  var nutrient,nutrientsGroup;
  var time=0;
  // function to load Images and sounds.
  function preload(){
    background1image=loadImage("bg.jpg");
    playerimage=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png");
    earthimage=loadImage("earth simple.png");
    o1=loadImage("wodcutter.png");
    o2=loadImage("car - Copy.png");
    o3=loadImage("industry.png");
    bombImage=loadImage("bomb.png");
    playimage=loadImage("play.png");
    bombblast=loadImage("bombblast.png");
    startii=loadImage("start.jpg");
    abouti=loadImage("about.png");
    homei=loadImage("home.png");
    ei1=loadImage("EARTHHAPPY.png");
    ei2=loadImage("sadearthmain.png");
    bottleimage=loadImage("energydrink.png");
    jumpsound=loadSound("jump.mp3")
    winsound=loadSound("win.mp3")
    bombblastsound=loadSound("bombblast.mp3")
    morei=loadImage("ReadMore.png");
    hearti=loadImage("heart.png");
    n1=loadImage("water.png");
    n2=loadImage("seed.png");
    n3=loadImage("ozone.png");
    reseti=loadImage("reset.png")
    cardi=loadImage("duplictecar-removebg-preview.png")
    starti=loadImage("start.png")
    introbackg=loadImage("introbackground.png")
    loselifes=loadSound("loselife.mp3")
    backbuttoni=loadImage("backbutton.png")
    jumpi=loadImage("jump.png")
    lefti=loadImage("left.png")
    righti=loadImage("right.png")
    earthdeadimage=loadImage("earthdead.png")
    backgimage=loadImage("backg.png")
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

    start=createSprite(displayWidth-200,displayHeight-200,50,50);
    start.addImage(starti)
    start.scale=0.4
    //creating player and giving animation.
    player=createSprite(100,displayHeight/2+140,50,50);
    player.addAnimation("player",playerimage);
    player.addAnimation("blast",bombblast);
    player.scale=2;

    // creating player for intro state.
    p1=createSprite(100,displayHeight/2+140,50,50);
    p1.addAnimation("player",playerimage);
    p1.scale=2;

    // creating earth for intro state.
    pearth=createSprite(player.x+5,100,50,50);
    pearth.addImage("e",earthimage);
    pearth.scale=0.5;

    // creating iground for intro state.
    piground=createSprite(displayWidth/2,displayHeight/2+160,displayWidth,10);
    piground.visible=false;

    // creating home button  and adding image to it.
    home=createSprite(displayWidth-350,50,50,50);
    home.addImage(homei);

    home1=createSprite(displayWidth/2-50,displayHeight-200,50,50);
    home1.addImage(homei);

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
    bombiGroup=new Group();
    bottleGroup=new Group();
    nutrientsGroup=new Group();
    nutrientsiGroup=new Group();
    obstaclesiGroup=new Group();
    
    // creating more button for about state.
    more=createSprite(displayWidth/2+340,displayHeight/2+100,50,50)
    more.addImage(morei)
    more.scale=0.5;

    // creating restart button to replay the game.
    restart=createSprite(200,displayHeight-200)
    restart.addImage(reseti)
    restart.scale=0.8

    // creating back button to show previous instructions.
     backbutton=createSprite(displayWidth-200,displayHeight-250)
     backbutton.addImage(backbuttoni)
     backbutton.scale=0.35

    // creating right button to move the player to the right.
     right=createSprite(200,displayHeight-200,50,50)
     right.addImage(righti)
     right.scale=0.15
     right.visible=false
    
     // creating left button to move the player to the left.
     left=createSprite(110,displayHeight-200,50,50)
     left.addImage(lefti)
     left.scale=0.15
     left.visible=false

     // creating jump button to make the player jump.
     jump=createSprite(displayWidth/2-150,displayHeight-200,50,50)
     jump.addImage(jumpi)
     jump.scale=0.4
     jump.visible=false

  }
  function draw(){
    // creating gamestates.
   if(gameState==="intro"){
   
     background(introbackg);
      earth.addImage(ei2)
     drawSprites()
     
        fill("white")
          strokeWeight(4)
        stroke(0)
      
     textSize(30)
     text("INTRODUCTION TO SURVIVAL OF EARTH",displayWidth/2-350,50)
     text("YOU HAVE TO SAVE THE EARTH FROM THE CLUTCHES OF GLOBAL WARMING",displayWidth/2-600,100)
     text("BY SAVING IT FROM THE FACTORS OF GLOBAL WARMING",displayWidth/2-450,150)
   
     fill("red")
          strokeWeight(4)
           textSize(40)
        stroke(255)
        text("TO SAVE THE EARTH PRESS START",displayWidth/2-300,displayHeight-180)
        start.visible=true;
     if(bombiGroup.isTouching(piground)){
       bombblastsound.play()
       bombiGroup.destroyEach()
     }
     if(mousePressedOver(start)){
       gameState="start"
     }
     player.visible=false;
     earth.visible=false;
     p1.visible=true
     backbutton.visible=false
     pearth.visible=true;
     piground.visible=false;
       home.visible=false;
     home1.visible=false;
      background1.visible=false;
    background2.visible=false;
    play.visible=false;
    about.visible=false;
    more.visible=false;
     restart.visible=false
      pearth.y=p1.y-100;
    pearth.x=p1.x;
    p1.collide(piground)
       image(ei2,pearth.x-100,pearth.y-120,200,200)
     
piground.y=displayHeight/2+70
p1.y=displayHeight/2+50

spawnbombi()
    spawnobstaclesi()
     
     p1.velocityX=2;

 }
    // creating gamestate start.
  else if(gameState==="start"){
    // adding image to background
    background(startii);
    obstaclesiGroup.destroyEach()
    bombiGroup.destroyEach()
    // setting visibility of sprites.    
    home.visible=false;
    p1.visible=false;
    backbutton.visible=false
    pearth.visible=false;
    piground.visible=false;
     home1.visible=false;
    player.visible=false;
    earth.visible=false;
    background1.visible=false;
    background2.visible=false;
    play.visible=true;
    about.visible=true;
    more.visible=false;
     restart.visible=false
     start.visible=false;
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

    else if(gameState==="about"){

    // creating Canvas.
   

    // setting background colour.
    background("white");

    // setting visibility to sprites.
    play.visible=false;
    about.visible=false;
    home.visible=true;
    backbutton.visible=false
      home1.visible=false;
    more.visible=true;
 restart.visible=false
    // giving instructions for pressing on home button.
    if(mousePressedOver(home)){
      gameState="start";  
    }

    if(mousePressedOver(more)){
      gameState="more";  
    }
    
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
  
  
   }
    
    // creating gamestate play.
    else if(gameState==="play"){

    // setting colour to background.
    background(255,255,255);  
    
    // setting visibility to sprites.
      player.visible=true;
      earth.visible=true;
      backbutton.visible=false
      play.visible=false;
      about.visible=false;
      home.visible=false;
      home1.visible=false;
      background1.visible=true
      background2.visible=true
      restart.visible=false
      jump.visible=true
      left.visible=true
      right.visible=true


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
    if(mousePressedOver(right)){
       player.x+=10;
    }
      if(mousePressedOver(left)){
       player.x-=10;
    }
      if(mousePressedOver(jump) && player.y>=320){
      
        player.velocityY=-12;
      jumpsound.play()
    }
    if(bombGroup.isTouching(iground)){
      bombblastsound.play()
      bombGroup.destroyEach()
    }

    if(keyDown("left")){
      player.x-=10;
    }

    if(keyDown("space")&& player.y>=320){
      player.velocityY=-12;
      jumpsound.play()
    }

    // adding gravity to player.
    player.velocityY=player.velocityY+0.8;
    
    // colliding player to invisible ground.
    player.collide(iground);
    
    // giving instructions to do certain taks using if condition.
    if(bombGroup.isTouching(earth)){
      gameState="bombend";
      bombblastsound.play()
    }
    
     if(obstaclesGroup.isTouching(earth) || obstaclesGroup.isTouching(player)){
      life=life-1;
      obstaclesGroup.destroyEach();
      safepercent-=25;
      score-=6;
    }
    
    if(earth.isTouching(bottleGroup)){
      score=score+2;
      bottleGroup.destroyEach();
      winsound.play()
    }

   if(nutrientsGroup.isTouching(player)){
      safepercent+=25;
      nutrientsGroup.destroyEach();
       
    }
    if(player.x>280){
      player.x=280;
    }
    if(player.x<40){
      player.x=40;
    }
  /* var functionrandom=Math.round(random(1,4))
   if(functionrandom===1){
     spawnnutrients()
   }
   else if(functionrandom===2){
     spawnenergy()
   }
     else if(functionrandom===3){
     spawnobstacles()
   }
   else if(functionrandom===4){
     spawnbomb()
   }*/
 // displaying functions.
  spawnenergy();
  spawnobstacles();
  spawnbomb();
  spawnnutrients();

  drawSprites();
if(life===3){
      text("LIVES:",50,50)
      image(hearti,100,8,50,50)
      image(hearti,150,8,50,50)
      image(hearti,200,8,50,50)
    }
   else if(life===2){
      text("LIVES:",50,50)
      image(hearti,100,8,50,50)
      image(hearti,150,8,50,50)
      
    }
   else if(life===1){
      text("LIVES:",50,50)
      image(hearti,100,8,50,50)
      
    }
  else if(life===0){
    gameState="end"
  }
  // displaying score.
  textSize(40);
  fill("black");
  text("SCORE:"+score,displayWidth/2-100,50);
  text("SAFEPERCENT:"+safepercent+"%",displayWidth/2+100,50)
  }



 
  // creating gamestate bombend.
    else if(gameState==="bombend"){
    // giving image to background.
    background(background1image);
    bombGroup.destroyEach()
    nutrientsGroup.destroyEach()
   bottleGroup.destroyEach()
   obstaclesGroup.destroyEach()
    drawSprites()
    fill("BLACK")
    textSize(40)
       text("YOU LOSE",50,50)
       text("YOU ARE BLASTED BY CARBON DIOXIDE BOMB",50,150)
       text("THE EARTH IS GLOBALLY WARM NOW",50,250)
       text("YOU WERE UNABLE TO SAVE THE EARTH",50,350)
         restart.visible=true;
         home1.visible=true;
          home.visible=false;
          backbutton.visible=false
           play.visible=false;
    about.visible=false;
      more.visible=false;
      player.visible=false;
    earth.visible=false;
    background1.visible=false
    background2.visible=false
        
         if(mousePressedOver(restart)){
    reset()
    }
       if(mousePressedOver(home1)){
      gameState="start";  
    }
    // displaying bombblast image.
    image(bombblast,player.x,player.y-350,300,300);
    image(ei2,player.x,player.y-100,300,300);
    player.y=displayHeight/2
    player.x=displayWidth/2+250

    }
    else if(gameState==="more"){
      if(mousePressedOver(home)){
      gameState="start";  
    }
     if(mousePressedOver(backbutton)){
      gameState="about";  
    }
    backbutton.visible=true;
      background("white");
       drawSprites();
       fill("black")
      textSize(20);
      text("OBSTACLES:",50,50);
text("BOMB,INDUSTRY,CAR,AXE.",50,100);
  text("NUTRIENTS:",50,150);
  text("seed,water,ozonemolecule,energy bottle",50,200);
  text("INSTRUCTIONS:",50,250);
  text("IF THE PLAYER TOUCHES THE BOTTLE THE SCORE INCREASES BY 2",50,300);
  text("IF THE PLAYER TOUCHES ANY OF THE NUTRIENT EXCLUDING BOTTLE THE SAFE PERCENT INCREASES BY 25",50,350);
  text("IF THE PLAYER TOUCHES ANY OF THE OBSTACLE EXCLUDING BOMB THE LIFE WILL BE DECREASED BY 1",50,400);
  text("IF THE PLAYER TOUCHES  BOMB THE GAME IS OVER",50,450);
  text("CONTROLS:",50,500);
  text("PRESS SPACE TO JUMP",50,550);
  text("PRESS RIGHT TO MOVE RIGHT TO A CERTAIN EXTENT TO PROTECT FROM BOMB",50,600);
  text("PRESS LEFT TO MOVE RIGHT TO A CERTAIN EXTENT TO PROTECT FROM BOMB",50,650);
    play.visible=false;
    about.visible=false;
    home.visible=true;
     home1.visible=false;
    more.visible=false;
     restart.visible=false
  }
   else if(gameState==="end"){
    background(backgimage)
    //text("GAME OVER")
    //text("GAME OVER")
    
  }
  }
  // function to spawn obstacles at a certain framecount.
  function spawnobstacles(){

    // declaring framecount
    if(frameCount%350===0){

      // creating obstacle,giving velocityX and adding images to it.
      obstacle=createSprite(displayWidth+20,displayHeight/2+120,50,50);
      obstacle.velocityX=-6;
      obstacle.lifetime=300;

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
      }
      // adding obstacle to obstaclesGroup.
      obstaclesGroup.add(obstacle);
      
    }
  }

  function spawnobstaclesi(){

    // declaring framecount
    if(frameCount%150===0){

      // creating obstacle,giving velocityX and adding images to it.
      obstaclei=createSprite(-20,displayHeight/2+120,50,50);
      obstaclei.velocityX=2;

      // giving random value to obrand.
      var obrandi=Math.round(random(1,3));

      // switching obrand to display random obstales.
      switch(obrandi){
        case 1:obstaclei.addImage(o1);
               obstaclei.scale=1.6;
               obstaclei.y=displayHeight/2+30;

        break;
        case 2:obstaclei.addImage(cardi);
               obstaclei.y=displayHeight/2+30;
               obstaclei.scale=0.9;
  
        break;
        case 3 :obstaclei.addImage(o3);
                obstaclei.y=displayHeight/2+30;

        break;
        default:break
      }
      // adding obstacle to obstaclesGroup.
      obstaclesiGroup.add(obstaclei);
      
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
      bomb.lifetime=300;

      // setting the x position of bomb to random.
      bomb.x=Math.round(random(20,displayWidth/2));
    
      // adding bomb to bombGroup.
      bombGroup.add(bomb);
    }
  }
 function spawnbombi(){

    // declaring framecount
    if(frameCount%80===0){

      // creating bomb,giving velocityX and adding images to it.
      bombi=createSprite(80,displayHeight/2-800,50,50);
      bombi.velocityY=6;
      bombi.addImage(bombImage);
      bombi.scale=0.4;

      // setting the x position of bomb to random.
      bombi.x=Math.round(random(displayWidth/2,displayWidth-50,));
    
      // adding bomb to bombGroup.
      bombiGroup.add(bombi);
    }
  }

  // function to spawn energy bottle at certain framecount.
  function spawnenergy(){

    // declaring framecount
    if(frameCount%220===0){

    //  // creating bottle,giving velocityX and adding images to it.
    bottle=createSprite(displayWidth/2+500,displayHeight/2-200,50,50);
    bottle.addImage(bottleimage);
    bottle.scale=0.6 ;   
    bottle.velocityX=- 6;
    bottle.lifetime=300;

    // setting the depth of bottle.
    bottle.depth=background1.depth;
    bottle.depth=background2.depth;
    bottle.depth=bottle.depth+1;
    bottle.depth=bottle.depth+1;

    // adding bottle to bottleGroup.
    bottleGroup.add(bottle);
    }
  }
  function spawnnutrients(){
    if(frameCount%263===0){
    nutrient=createSprite(displayWidth+20,displayHeight/2+120,50,50)
    nutrient.velocityX=-6;
    nutrient.lifetime=300;
    var nurand=Math.round(random(1,3));

    switch(nurand){
        case 1:nutrient.addImage(n1)
               nutrient.scale=0.5
               nutrient.y=displayHeight/2+100
        break;
        case 2:nutrient.addImage(n2)
               nutrient.scale=0.3
        break;
        case 3 :nutrient.addImage(n3)
                nutrient.scale=0.3
                nutrient.y=displayHeight/2+100
        break;
        default:break
    }
      nutrientsGroup.add(nutrient);
  
    }
  }
  function reset(){
    gameState="play";
    score=0;
    safepercent=0;
    life=3;
    frameCount=0;
    background2.visible=true;
    player.x=100;
    player.y=displayHeight/2+140;
  }

 /* function spawnnutrientsi(){
    if(frameCount%100===0){
    nutrienti=createSprite(displayWidth/2-displayWidth/2-40,displayHeight/2+120,50,50)
    nutrienti.velocityX=6;
    var nurandi=Math.round(random(1,3));

    switch(nurandi){
        case 1:nutrienti.addImage(n1)
               nutrienti.scale=0.5
               nutrient.y=displayHeight/2+100
        break;
        case 2:nutrienti.addImage(n2)
               nutrienti.scale=0.3
        break;
        case 3 :nutrienti.addImage(n3)
                nutrienti.scale=0.3
                nutrienti.y=displayHeight/2+100
        break;
        default:break
      
      nutrientsiGroup.add(nutrienti);
  }
    }
  }







 nutrient.addImage(n1)
        nutrient.scale=0.5
        nutrient.y=displayHeight/2+100
        

        nutrient.addImage(n2)
               nutrient.scale=0.3*/

