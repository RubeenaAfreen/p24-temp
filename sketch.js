
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render=Matter.Render;

var engine,world,paper,dustbin;

function setup() {
	createCanvas(1500, 700);
    

	engine = Engine.create();
	world = engine.world;
	
	   

	paper=new Paper(200,400,30);
	


	
	//var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
}


function draw() {
  
  background(0);
  
  Engine.update(engine);
paper.display();




  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5});
	}
}



