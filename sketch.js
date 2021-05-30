var bgImg;
var cat;
var mouse;

function preload(){
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png")
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    cat = createSprite(850,680);
    cat.addAnimation("catStill", catImg1);
    cat.scale = 0.2;
    cat.velocityX = 0;

    mouse = createSprite(200,680);
    mouse.addAnimation("mouseStill", mouseImg1);
    mouse.scale = 0.15;
}

function draw(){
    background(bgImg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.addAnimation("catHappy", catImg3);
       cat.changeAnimation("catHappy");
       cat.x = 330;
       cat.velocityX = 0;
       mouse.addAnimation("mouseHappy", mouseImg3);
       mouse.changeAnimation("mouseHappy");
       mouse.velocityX = 0;
    }

    drawSprites();
}

function keyPressed(){

    if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
    }

    if(keyCode === LEFT_ARROW){
    cat.addAnimation("catWalking", catImg2);
    cat.changeAnimation("catWalking");
    cat.velocityX = -3;
    }
}