class Block{
    constructor(x,y){
        var op = {
            isStatic : false,
            restitution:1,
            density:1,
            friction:0.5
        }
        this.body = Bodies.rectangle(x,y,50,100)
        
        this.width = 50
        this.height = 100
        
        World.add(world,this.body)
        this.visibility = 255
    }
score(){
    if(this.visibility<0&& this.visibility>-105){
        score++
    }
}

    display(){
      // console.log(this.body.speed)
        var pos = this.body.position
        if (this.body.speed < 3){
       
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
  
    }
        else{
            World.remove(world,this.body)
            push()
           this.visibility = this.visibility-5 
            tint(255,this.visibility)
           // rect(pos.x,pos.y,50,100)
            pop()
        }
    }
}