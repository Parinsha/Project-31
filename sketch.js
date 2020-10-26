//creating Engine, World, Bodies, Constraint
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//creating particles array, plinkos array, divisions array, divisionHeight
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() 
{
  //creating Canvas
  createCanvas(480,800);
  //creating engine, world
  engine = Engine.create();
  world = engine.world;
  //creating ground
  ground = new Ground(80, 795, 800, 10);
  //creating divisions
  for(var k = 0; k <= 480; k = k + 80)
  {
    divisions.push(new Divisions(k, 790 - divisionHeight/2, 10, divisionHeight));
  }
  //creating first row of plinkos
  for(var j = 40; j <= 460; j = j + 50)
  {
    plinkos.push(new Plinko(j, 75, 10));
  }
  console.log(plinkos.length);
  //creating second row of plinkos
  for(var p = 15; p <= 480; p = p + 50)
  {
    plinkos.push(new Plinko(p, 175, 10));
  }
  console.log(plinkos.length);
  //creating third row of plinkos
  for(var q = 40; q <= 460; q = q + 50)
  {
    plinkos.push(new Plinko(q, 275, 10));
  }
  console.log(plinkos.length);
  //creating fourth row of plinkos
  for(var s = 15; s <= 480; s = s + 50)
  {
    plinkos.push(new Plinko(s, 375, 10));
  }
  console.log(plinkos.length);
  //running engine
  Engine.run(engine);
}

function draw() 
{
  //giving a color for background
  background(0);  
  //updating engine
  Engine.update(engine);
  //displaying ground
  ground.display();
  //creating particles
  if(frameCount % 60 === 0)
  {
    particles.push(new Particles(random(480/2-10, 480/2-10), 10, 10));
  }
  //displaying divisions
  for(var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }
  //displaying particles
  for(var i = 0; i < particles.length; i++)
  {
    particles[i].display();
  }
  //displaying first row of plinkos
  for(var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }
  console.log(plinkos.length);
  //displaying second row of plinkos
  for(var p = 0; p < plinkos.length; p++)
  {
    plinkos[p].display();
  }
  //displaying third row of plinkos
  for(var q = 0; q < plinkos.length; q++)
  {
    plinkos[q].display();
  }
  //displaying fourth row of plinkos
  for(var s = 0; s < plinkos.length; s++)
  {
    plinkos[s].display();
  }
  //drawing sprites
  drawSprites();
}