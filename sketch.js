const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1200,600);
    // var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    // ground = new Ground(600,height,1200,20);
    ground = new Ground (600,590,1200,20);
    platform = new Ground(150, 492, 300, 470);

    box1 = new Box(845,550);
    box2 = new Box(1015,550);
    box3 = new Box(845,450);
    box4 = new Box(1015,450);
    box5 = new Box(931,330);
  
    log1 = new Log(930,500,250,PI/2);
    log2 = new Log(930,380,250,PI/2);
    log3 = new Log(980,325,150,-5*PI/18);
    log4 = new Log(880,325,150,5*PI/18);
  
    pig1 = new Pig(930,550);
    pig2 = new Pig(930,440);
  
    bird = new Bird(250,150);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:150});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        // console.log('hi');
        slingshot.reattach(bird.body);
        Matter.Body.setPosition(bird.body, {x: 200 , y: 150});
    }
}