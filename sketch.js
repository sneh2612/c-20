var movingrectangle,fixedrectangle;






function setup() {

  createCanvas(800,400);
  fixedrectangle=createSprite(300,200,30,80);
fixedrectangle.shapeColor="green";
fixedrectangle.debug=true;
movingrectangle=createSprite(500,200,80,30);
movingrectangle.shapeColor="green";
movingrectangle.debug=true;


}

function draw() {
  background(0);  

movingrectangle.x=mouseX;
movingrectangle.y=mouseY
if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2
  &&fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2
 &&movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2
 &&fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2 
  ){
movingrectangle.shapeColor="red";
fixedrectangle.shapeColor="blue";
}else{
  movingrectangle.shapeColor="green";
  fixedrectangle.shapeColor="green";
}


  drawSprites();
}
