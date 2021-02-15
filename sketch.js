const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,pig2,pig3;
var log1,log2,log3,log4;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(800,160,70,70);
    pig1=new Pig (810,350);
    log1=new Log1(810,260,300,PI/2);
    log2=new Log2(760,120,150,PI/7);
    log3=new Log3(870,120,150,-PI/7);
    bird = new Bird(400,200);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    pig1.display();
    ground.display();
    log1.display();
    log2.display();
    log3.display();
    bird.display();
}

















