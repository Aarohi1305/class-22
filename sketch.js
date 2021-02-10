const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,400,800,50,options); 
  ball = Bodies.circle(200,50,20,{restitution:1});                        
  World.add(world,ground);
  World.add(world,ball);
  console.log(ground);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,50,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}