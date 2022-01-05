var trex, trex_running, edges;
var groundImage, ground;
var invisibleground;
var cloud, cloudImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
  trex.scale = 0.5;
  trex.x = 50;
  ground=createSprite(200,180,400,20);
  ground.addImage("ground", groundImage);
  invisibleground=createSprite(200,190,400,10);
  invisibleground.visible=false;
  //var r = Math.round (random(0,10));
  //console.log (r);
}

function draw(){
  //establecer color de fondo.
  background(220);
  
  //cargar la posición Y del Trex
  //console.log(trex.y);
  
  ground.velocityX = -2;
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space") && trex.y > 150){
    trex.velocityY = -10;
    
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //evitar que el Trex caiga
  trex.collide(invisibleground);
  //trex.bounceOff(edges);
  clouds();
  drawSprites();
}

function clouds (){
  if(frameCount%60==0){
    cloud=createSprite(600,100,40,10);
    //cloud.addImage(cloudImage);
    cloud.velocityX =-3;
    cloud.y = Math.round(random(10,100));
    cloud.depth=trex.depth;
    trex.depth+=1;
  }
}