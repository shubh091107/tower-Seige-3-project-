const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine
var world

var polygon1
var sling

var gr1
var gr2
var gr3



var score =0

var bl1
var bl2
var bl3
var bl4
var bl5
var bl6
var bl7
var bl8
var bl9
var bl10
var bl11
var bl12
var bl13
var bl14
var bl15
var bl16
var bl17
var bl18
var bl19
var bl20
var bl21
var bl22
var bl23
var bl24
var bl25
var bgimg

function preload(){
    bg()
}
function setup(){
var canvas = createCanvas(1600,700)
engine = Engine.create()
world = engine.world;
Engine.run(engine)


polygon1 = new Polygon()
sling = new SlingShot(polygon1.body,{x:100,y:400})
gr1 = new Base (500,700,10000,10)
gr2 = new Base(700,500,400,20)
gr3 = new Base(1300,300,250,20)



bl1 = new Block(700,450)
bl2 = new Block(650,450)
bl3= new Block(600,450)
bl4= new Block(550,450)
bl5= new Block(850,450)
bl6= new Block(750,450)
bl7= new Block(800,450)
bl8= new Block(700,350)
bl9= new Block(650,350)
bl10= new Block(600,350)
bl11= new Block(750,350)
bl12= new Block(800,350)
bl13= new Block(700,250)
bl14= new Block(650,250)
bl15= new Block(750,250)
bl16= new Block(700,150)
bl17= new Block(1300,250)
bl18= new Block(1350,250)
bl19= new Block(1400,250)
bl20= new Block(1250,250)
bl21= new Block(1200,250)
bl22= new Block(1300,150)
bl23= new Block(1250,150)
bl24= new Block(1350,150)
bl25= new Block(1300,50)
}





function draw(){
if (bgimg){
    background(bgimg)}
    Engine.update(engine)
    polygon1.display()
    sling.display() 
    gr1.display()
    gr2.display()
    gr3.display()
    fill("pink")
    bl1.display()
    bl2.display()
    bl3.display()
    bl4.display()
    bl5.display()
    bl6.display()
    bl7.display()
    fill("yellow")
    bl8.display()
    bl9.display()
    bl10.display()
    bl11.display()
    bl12.display()
    fill("lightblue")
    bl13.display()
    bl14.display()
    bl15.display()
    fill("blue")
    bl16.display()
    fill("lightgreen")
    bl17.display()
    bl18.display()
    bl19.display()
    bl20.display()
    bl21.display()
    fill("lightblue")
    bl22.display()
    bl23.display()
    bl24.display()
    fill("pink")
    bl25.display()
     

 bl1.score()
 bl2.score()
 bl3.score()
 bl4.score()
 bl5.score()
 bl6.score()
 bl7.score()
 bl8.score()
 bl9.score()
 bl10.score()
 bl11.score()
 bl12.score()
 bl13.score()
 bl14.score()
 bl15.score()
 bl16.score()
 bl17.score()
 bl18.score()
 bl19.score()
 bl20.score()
 bl21.score()
 bl22.score()
 bl23.score()
bl24.score()
 bl25.score()


    //bg()
    //strokeWeight(2)
    textSize(30)
    stroke("white")
    text("Press SPACE to get another chance",500,50)
    text("Score:"+score ,750,20)
}
function mouseDragged(){
    Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly()
}

function keyPressed(){
    sling.attach(polygon1.body)
}

async function bg(){
     var res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
     var res1 = await res.json();
     var dt = res1.datetime;
     var hr = dt.slice(11,13)
     console.log(hr)
     if (hr>06 && hr<18){
         bg = "38598.jpg"
     }
     else{
         bg = "download.jpg"
     }
     bgimg = loadImage(bg) 


}