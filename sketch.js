
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var paperBall;
var ground;
var dustbin;



function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

	paperBall=new Paper(200,200,50);
	ground = new Ground(400, 650, 800, 20);
	dustbin= new Dustbin(660,630,50,200);

	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  
	paperBall.display();
	ground.display();
	dustbin.display();

  drawSprites();
}

	function keyPressed() {
		if (keyCode=== UP_ARROW) {
		  Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:60,y:-65});
		}
  }


