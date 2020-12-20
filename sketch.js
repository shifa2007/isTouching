var lion
var plant, ball


function setup() {
  createCanvas(800,400);
  lion=createSprite(200, 200, 50, 50);
  plant=createSprite(100,200,40,50)
  ball=createSprite(50,50,40,30)
}

function draw() {
  background(255,255,255);
  lion.x=mouseX
  lion.y=mouseY
  console.log(lion.x)
  if(isTouching(lion, ball)){
    lion.shapeColor='red'
    ball.shapeColor='red'
    
  }
  else{
    ball.shapeColor='green'
    lion.shapeColor='green'
    


  }
  drawSprites();


}
