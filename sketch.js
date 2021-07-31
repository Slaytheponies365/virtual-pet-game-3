var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var foodcount
var button
var button2
var milk

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
milk = loadImage("Milk.png")
}

function setup() {
  var dog = createSprite(800,300,10,10)
  database=firebase.database();
  console.log(database)
  createCanvas(1000,800);
  dog.addImage(sadDog)
  dog.scale = 0.5

  var foodcountRef = database.ref("foodcount")
  foodcountRef.on("value", function(data){
    foodcount = data.val()
  })
  button = createButton("feed dog")
  button.position(600,100)
  button2 = createButton("add food")
  button2.position(500,100)
}

function draw() {
  background(46,139,87);
  textSize(30)
  text("food remaining:" + foodcount,600,100)
 
  if(keyDown("UP_ARROW")){

  }

    button.mousePressed(()=>{
      if(foodcount != 0){
      database.ref("/").update({
        foodcount: foodcount - 1
      })
     }
    })

    button2.mousePressed(()=>{
      database.ref("/").update({
        foodcount: foodcount + 1
      })
    })

    var h = 100
    for(var i = 1; i<=foodcount; i = i+1){
      image(milk,h,250,50,50)
      h = h+20
    }

  drawSprites();
}
