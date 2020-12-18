
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here


	roofObject = new roof(600,300,300,30)

	bobObject1= new Bob(600,600)
	bobObject2=new Bob(550,600)
	bobObject3 = new Bob(650,600)
	bobObject4 = new Bob(500,600)
	bobObject5 = new Bob(700,600)

	rope1=new rope(bobObject1.body,roofObject.body,0,0)
	rope2=new rope(bobObject2.body,roofObject.body,-50,0)
	rope3=new rope(bobObject3.body,roofObject.body,50,0)
	rope4=new rope(bobObject4.body,roofObject.body,-100,0)
	rope5=new rope(bobObject5.body,roofObject.body,100,0)
	
	

	Engine.run(engine);
  
}


function draw() {
  background("gray");
 
  rectMode(CENTER);


	



  roofObject.display();


  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

}

function KeyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x: 1500,y: 0})
	}
}


 