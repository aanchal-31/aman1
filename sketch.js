
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bob,bob1,bob2,bob3,bob4;
var bobHolder;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    bobDiameter = 40;

	Engine.run(engine);
	bob = new Bob(300,450,40)
	bob1 = new Bob(350,450,40)
	bob2 = new Bob(400,450,40)
	bob3 = new Bob(450,450,40)
	bob4 = new Bob(500,450,40)
	bobHolder = new BobHolder(400,200,270,20)
	
	rope1=new Rope (bob.body,bobHolder.body,-bobDiameter*2,0);
	rope2=new Rope (bob1.body,bobHolder.body,-bobDiameter*1,0);
  rope3=new Rope (bob2.body,bobHolder.body,0,0)
  rope4=new Rope (bob3.body,bobHolder.body,bobDiameter*1,0);
  rope5=new Rope (bob4.body,bobHolder.body,bobDiameter*2,0);

  
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bobHolder.display();
  rope1.display(); 
  rope2.display(); 
  rope3.display();
  rope4.display();
  rope5.display(); 
  drawSprites();
  
 
}

function drawLine(constraint)
{
  bobBodyPosition=constraint.bodyA.position
  bobHolderBodyPosition=constraint.bodyB.position

  bobHolderOffset=constraint.pointB;

  bobHolderBodyX=bobHolderBodyPosition.x+bobHolderOffset.x
  bobHolderBodyy=bobHolderBodyPosition.y+bobHolderOffset.y
  line(bobHolderPosition.x, bobHolderBodyPosition.y, bobHolderBodyX,bobHolderBodyY)

}



function keyPressed() {
  if(keyCode ===  UP_ARROW) {

    Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-45});

  
  }
}