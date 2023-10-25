var bg,bgImg;
var player ,shooterImg,shooter_shooting;
var zombie,zombieImg;

var heart1,heart2,heart3;
var heart1Img,heart2Img,heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets= 70;

var heart1,heart2,heart3;

var gameState =  "fight"

var lose,winning,explosionSound;


function preload (){
    heart1Img = loadImage("assets/heart_1.png")
    heart2Img = loadImage("assets/heart_2.png")
    heart3Img = loadImage("assets/heart_3.png")

    shooterImg = loadImage("assets/shooter_2.png")
    shooter_shooting = loadImage("assets/shooter_3.png")

    zombieImg = loadImage ("assets/zombie.png")

    bgImg = loadImage ("assets/bg.jpeg")

    lose = loadSound("assets/lose.mp3")
    win = loadSound("assets/win.mp3")
    explosionSound = loadSound("assets/explosion.mp3")

}

function setup (){
    createCanvas (windoWidth.windoHeight)

    bg = createSprite (displayWidth/20-2,displayHeight/2-40,20,20)
    bg.addImage(bgImg)
    bg.scale = 1.1

    player = createSprite(displayWidth-1150, displayHeight-300,50,50);
    player.addImage=(shooterImg)
    player.scale= 0.3
    player.debug= true
    player.setCollider("rectangle",0,0,300,300)

    heart1 = createSprite(displayWidth-100,40,20,20)
    heart1.visible=false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-100,40,20,20)
    heart3.visible = false
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4

    bulletGroup= new Group ()
    zombieGroup = new Group ()
}

function draw (){
    background(0);
    if(gameState === "fight"){
        
    }
}



