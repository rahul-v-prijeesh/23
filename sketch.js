
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stoneimg,slingshot
function preload(){
	boy=loadImage("images/boy.png");
	stonimg=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    
	var options={
		isStatic:true
	}
	
    stoneObj=Bodies.rectangle(240,420,30,30)
	treeObj=new tree(1050,580);
	World.add(world,stoneObj)
	groundObject=new ground(width/2,600,width,20);
	slingshot=new SlingShot(stoneObj,{x:240,y:420})
	m3=new mango(935,235,20,options)
	m4=new mango(1145,235,20,options)
	m5=new mango(1080,220,20,options)
	m6=new mango(1035,220,30,options)
	mango1=new mango(1100,100,30,options);
	m2=new mango(1000,100,20,options)
	Engine.run(engine);

}

function draw() {
console.log(mouseX)
console.log(mouseY)
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  imageMode (CENTER)
  
  treeObj.display();
  mango1.display();
  m2.display();
  m3.display();
  m4.display();
 m5.display();
  m6.display();

detectcollision(stoneObj,mango1.body)
detectcollision(stoneObj,m2.body)
detectcollision(stoneObj,m3.body)
detectcollision(stoneObj,m4.body)
detectcollision(stoneObj,m5.body)
detectcollision(stoneObj,m6.body)



slingshot.display();
  groundObject.display();
  image(stonimg,stoneObj.position.x,stoneObj.position.y,30,30)
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed()
{
    if(keyCode=== 32)
    {
       slingshot.attach(stoneObj)
    }
}
function detectcollision(movingRect,fixedRect)
{
	/*if (movingRect.x - fixedRect.x < fixedRect.radius + movingRect.width/2
		&& fixedRect.x - movingRect.x < fixedRect.radius + movingRect.width/2
		&& movingRect.y - fixedRect.y < fixedRect.radius + movingRect.height/2
		&& fixedRect.y - movingRect.y < fixedRect.radius + movingRect.height/2) *
		
{
	Matter.Body.setStatic(fixedRect.body, false);
}
}


*/}