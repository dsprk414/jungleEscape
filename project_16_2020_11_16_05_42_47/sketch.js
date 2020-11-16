
  var monkey , monkey_running
  var banana ,bananaImage, obstacle, obstacleImage
  var FoodGroup, obstacleGroup
  var score

  function preload(){


    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");
 survivalTime=0;
  }



  function setup() {
    createCanvas(600,400)

    monkey=createSprite(60,320,20,20)
    monkey.addAnimation("monkey",monkey_running)
    monkey.scale=0.095



   ground = createSprite(400,350,1500,10);
  ground.x=ground.width/2;
  console.log(ground.x);
    ground.velocityX=-4;


    obstaclesGroup=new Group();
    bananaGroup=new Group();
  }


  function draw() {
   background("lightgreen")
    if(ground.x<0){
      ground.x=ground.width/2
    }

    if(keyDown("space")&&monkey.y >=290){
      monkey.velocityY=-13.5;
   
  }
 monkey.velocityY=monkey.velocityY +0.7
     monkey.collide(ground)
    
    
    stroke("black");
    fill("black");
      textSize(20)
       survivalTime = Math.ceil(frameCount/frameRate());
       text("survival Time:"+  survivalTime, 100, 50);



if(obstaclesGroup.isTouching(monkey)){
  ground.velocityX = 0;
  monkey.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  bananaGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  bananaGroup.setLifetimeEach(-1); } 















    bananas();
    obstacles();
    drawSprites();
  }


  function bananas(){
    if(frameCount%80===0){
    banana=createSprite(600,120,40,10)
      banana.y=Math.round(random(120,200))
      banana.addImage("banana",bananaImage)
      banana.scale=0.09
      banana.velocityX=-4
      bananaGroup.add(banana);
      banana.lifetime=430;
    }
  }

  function obstacles(){
    if(frameCount%300===0){
      obstacle=createSprite(600,330,20,10)
      obstacle.addImage(obstacleImage)
      obstacle.velocityX=-4
      obstacle.scale=0.14
      obstacle.lifetime=430;
      obstaclesGroup.add(obstacle);
    }
  }


























