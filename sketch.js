var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score = 0;
var turn = 0;
var particle;
var gameState = 'Start';
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    particle = new Particle(mouseX, 10, 10, 10);

    
}
 


function draw() {
  background("black");
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  text("500", 10, 570)
  text("500", 90, 570)
  text("500", 170, 570)
  text("500", 250, 570)
  text("100", 330, 570)
  text("100", 410, 570)
  text("100", 490, 570)
  text("200", 570, 570)
  text("200", 650, 570)
  text("200", 730, 570)
  
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
     turn = turn+1;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
          if(particle.body.position.x < 300){
            score = score+500;
            particle=null;
          }
          if(particle.body.position.x > 301&& particle.body.position.x < 500){
            score = score+100;
            particle=null;
          }
          if(particle.body.position.x > 501&& particle.body.position.x < 750){
            score = score+200;
            particle=null;
          }

      }
    }
   if(turn>=5){
    gameState = 'End'
   }
   if (gameState = 'End'){
    textSize(100)
    text("GAME OVER", 400, 400);
   }
  }

