var fixedRect, movingRect, rect1,rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 60, 50);
  movingRect = createSprite(600, 200, 50, 50);
  rect1 = createSprite(700, 100,70,50);
  rect2 = createSprite(200,100,40,60);
  movingRect.shapeColor = "yellow";


}

function draw() {
  background(220,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  // console.log("movingRect.y " +( movingRect.y - fixedRect.y));

  //  console.log("Height / 2 "+ ( (movingRect.height + fixedRect.height)/2));


if(isTouching(movingRect,rect2)===2)
{
  console.log("movinRect is touching rect2" );
}
if(isTouching(movingRect,fixedRect) ===2)
{
  fixedRect.shapeColor = "red"
}
else{
  fixedRect.shapeColor = "green"
}

result = addnumbers(10,50)
console.log("The result is " + result)


  drawSprites();
}


// function isTouching(movRect,anyRect)
// {
//   if(movRect.x - anyRect.x < (movRect.width/2 + anyRect.width/2)
//   // && AnyRect.x - movRect.x < (movRect.width/2 + AnyRect.width/2)
//   // && movRect.y - AnyRect.y < (movRect.height/2 + AnyRect.height/2)
//   // && AnyRect.y  - movRect.y < (movRect.height/2 + AnyRect.height/2)
//   )
// {
//   movRect.shapeColor = "red";
//   AnyRect.shapeColor = "red";
// }
// else
// {
//   movRect.shapeColor = "green";
//   AnyRect.shapeColor = "green";
// }
// }
