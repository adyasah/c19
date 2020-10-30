var r1,r2


function setup() {
  createCanvas(800,400);
  r1=createSprite(400, 200, 50, 50);
  r1.shapeColor="blue"
  r2=createSprite(40, 200, 100, 50);
  r2.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  r2.x=mouseX
  r2.y=mouseY

  if(r1.x-r2.x<r1.width/2+r2.width/2&&
    r2.x-r1.x<r1.width/2+r2.width/2&&
    r1.y-r2.y<r1.height/2+r2.height/2&&
    r2.y-r1.y<r1.height/2+r2.height/2 ){
    r1.shapeColor="pink"
    r2.shapeColor="red"
  }
  else{
    r1.shapeColor="blue"
    r2.shapeColor="blue"
  }
  
  drawSprites();
}