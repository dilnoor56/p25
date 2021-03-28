
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	Paperobj=new Paper(100,600,0)
    Paperobj.scale=1
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 
  engine = Engine.create();
  world = engine.world;
  //Key()
  

  groundObject.display();
  dustbinObj.display();
  Paperobj.display();
}

function Key(){
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(Paperobj.body, Paperobj.body.position, {x:130,y:-145})
	}
	}

