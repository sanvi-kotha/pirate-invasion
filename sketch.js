const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world, canvas, tower;


function preload() {

}

function setup() {
canvas = createCanvas(1200,600);
engine = Engine.create();
world = engine.world;
tower = new Tower(150,300,200,400);
  
}

function draw() {
    background("rgb(102,178,255)");

   Engine.update(engine);
   tower.display();
   
}







