var car,wall
var speed
var weight
var gameState = "Test Phase"
var deformation

function setup() {
  createCanvas(1600,400);
  wall = createSprite(900, 200, 50, 200);
  
  car =  createSprite(50,200,10,10)
  car.shapeColor = "cyan"
}
  
  


function draw() {
  background("blue")
  
  drawSprites();
  if(gameState === "Test Phase"){
    
    fill("orange")
    textSize(30)
    text("PRESS SPACE TO START",200,200)
    
    car.shapeColor = "cyan"
   
  }
  
  if(gameState === "Test Phase" && keyDown("space")){
   gameState = "play";
   
   speed =  Math.round(random(55,90))
   weight = Math.round(random(400,1500));
   deformation = (0.5 * speed * speed * weight/22500);
  }

  if(gameState === "play"){
    car.velocityX =  speed
    car.depth = 5
    fill("orange")
    textSize(15)
    text("Speed of the Car: "+speed,50,70)
    text("Weight of theCar: "+weight,50,120)
    
  }
  if(car.x + car.width > wall.x
    &&wall.x +wall.width > car.x
    &&car.y+car.height > wall.y
    &&wall.y+wall.height > car.y){
    
    if(keyWentDown("a")){
      fill("white")
      textSize(30)
      text("PRESS A TO RESTART",175,250)
      car.x =  40;
      car.velocityX = speed;
      speed = Math.round(random(55,90))
      weight = Math.round(random(400,1500))
      deformation = 0.5 * weight * speed * speed / 22500
    }
     
      car.velocityX = 0;
      textSize(15);
      text ("Deformation Rate: "+ Math.round(deformation),50,170);
      text("Press A to Restart.",175,300)
      
      if(deformation > 180){
        car.shapeColor = "red";
        textSize(15)
        fill("red")
        text("Deformation: Lethal",50,200)
      }
      
      if(deformation > 100 && deformation < 180){
        car.shapeColor = "yellow"
        textSize(15)
        fill("yellow")
        text("Deformation: Moderate",50,200)
      }

      if(deformation < 100){
        car.shapeColor = "green"
        textSize(15)
        fill("green")
        text("Deformation: Safe",50,220)
      }
      

  }



}


  

  