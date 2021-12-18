const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 Button1=createImg("up.png")
 Button1.position(200,30)
 Button1.size(50,50)
Button1.mouseClicked(Vforce)
Button2=createImg("right.png")
Button2.position(20,30)
Button2.size(50,50)
Button2.mouseClicked(Hforce)
Ball=Bodies.circle(200,100,20,{restitution:1}) 
World.add(world,Ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(Ball.position.x,Ball.position.y,20)
  Engine.update(engine);
}

function Hforce() {
 Matter.Body.applyForce(Ball,{x:0,y:0},{x:0.05,y:0}) 
}
function Vforce() {
  Matter.Body.applyForce(Ball,{x:0,y:0},{x:0,y:0.05}) 
 }