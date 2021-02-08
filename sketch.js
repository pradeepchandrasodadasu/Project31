const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var drops = [];

function preload(){
    
}

function setup(){
   createCanvas(500,600);
   engine = Engine.create();
   world = engine.world;
   
   umbrella = new Man(250,400);
   for(var i = 0; i < 100; i++){
      drop1 = new Rain(random(0,500),random(0,400));
      drops.push(drop1);
   }
   

   Engine.run(engine);
    
}

function draw(){
    background(0)
    //Engine.update(engine);

    for(var i = 0;i<umbrella.walking.lenght;i++){
       umbrella.display();
    }
    
    for(var i = 0; i < 100; i++ ){
       drops[i].display();
       drops[i].updateY();
    }
    
    
}   

