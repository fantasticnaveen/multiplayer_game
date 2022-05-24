var pos
var player
function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database()
  player = createSprite(200, 200, 50, 50)
  pos = database.ref("player/position")
  pos.on('value', readpos)

}

function draw() {
  background(0,0,255);
  if (keyDown("UP_ARROW")){
    changepos(0,-5)
  }  
  if (keyDown("DOWN_ARROW")){
    changepos(0,5)
  }
  if (keyDown("LEFT_ARROW")){
    changepos(-5,0)
  }
  if (keyDown("RIGHT_ARROW")){
    changepos(5,0)
  }
  drawSprites();
}
function changepos(x,y){
  database.ref("player/position")
  .set({
    "x":position.x + x,
    "y":position.y + y
  })
}
function readpos(data){
  position = data.val()
  player.x = position.x
  player.y = position.y
}