
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1= new Ground(600,height,1200,20)
	Engine.run(engine);
    roof1= new roof(540,20,500,20);
    bob1=new bob(400,340);
    bob3=new bob(540,340);
    bob2=new bob(470,340);
    bob4=new bob(610,340);
    bob5=new bob(680,340);
    slingshot1=new SlingShot(bob1.body,{x:400, y:20});
    slingshot2=new SlingShot(bob2.body,{x:470, y:20});
    slingshot3=new SlingShot(bob3.body,{x:540, y:20});
    slingshot4=new SlingShot(bob4.body,{x:610, y:20});
    slingshot5=new SlingShot(bob5.body,{x:680, y:20});
}


function draw() {
  rectMode(CENTER);
  background("brown");
  
  drawSprites();
 ground1.display();
 roof1.display();
 slingshot1.display();
 slingshot2.display();
 slingshot3.display();
 slingshot4.display();
 slingshot5.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:0})
}
	
}
