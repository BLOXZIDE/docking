var iss,issImg;


function preLoad() {
  issImg = loadImage("iss.png")

}


function setup() {
  createCanvas(800,400);
   iss = createSprite(800,400,200,200);
   iss.addImage( issImg);
  
}



function draw() {
  background(255,255,255);  
  drawSprites();
}