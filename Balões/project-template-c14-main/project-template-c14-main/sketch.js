var bow, arrow, bll1, bll2, bll3, bll4, wall
var backg;
var gamestate = "play"
var bowImg, arrowImg, green_bllImg, red_bllImg, pink_bllImg ,blue_bllImg, backgImg;
var score = 0, pont = [], p = 0
function preload(){
  ballons = new Group();
  arow = new Group();
  wal = new Group();
  backgImg = loadImage("background0.png");
  arrowImg = loadImage("arrow0.png");
  bowImg = loadImage("bow0.png");
  red_bllImg = loadImage("red_balloon0.png");
  green_bllImg = loadImage("green_balloon0.png");
  blue_bllImg = loadImage("blue_balloon0.png");
  pink_bllImg = loadImage("pink_balloon0.png");
  wall = createSprite(410, 200, 2, 400)
  wal.add(wall)
}



function setup() {
  createCanvas(400, 400);
  
  backg = createSprite(0,0,400,400);
  backg.addImage(backgImg);
  backg.scale = 2.5
  
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImg); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
 if (gamestate == "play"){
  backg.velocityX = -3 

    if (backg.x < 0){
      backg.x = backg.width/2;
    }
  
  bow.y = World.mouseY
  
  
  if (keyWentDown("space")) {
    createArrow();
    
  }
  
  var alebll = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(alebll){
    case 1:
    redBalloon()
    pont[p] = 2
    break;
    case 2:
    blueBalloon()
    pont[p] = 1
    break;
    case 3:
    greenBalloon()
    pont[p] = 2.5
    break;
    case 4:
    pinkBalloon()
    pont[p] = 3
break;
p = p + 1
  }}
  if (arow.isTouching(ballons)){
    score = score + pont[0]
    pont.shift()
ballons.destroyEach()
arow.destroyEach()
  }
  if (wal.isTouching(ballons)){
    gamestate = "end"
  }
  drawSprites();
  text("Pontuação: "+score, 300, 20)
}
if (gamestate == "end"){
  text("Pontuação: "+score, 200, 150)
  text("Game Over", 200, 200)
}
}


// criar flechas para o arco
 function createArrow() {
  var arrow
  arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImg);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -10;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arow.add(arrow)
}


function redBalloon() {
  var red
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_bllImg);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  ballons.add(red)
}

function blueBalloon() {
  var blue
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_bllImg);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  ballons.add(blue)
}

function greenBalloon() {
  var green
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_bllImg);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  ballons.add(green)
}

function pinkBalloon() {
  var pink
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_bllImg);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.5;
  ballons.add(pink)
}
