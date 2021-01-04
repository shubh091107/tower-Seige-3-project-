class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 50
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){
 if(this.sling.bodyA){
            var a = this.sling.bodyA.position;
            var b = this.pointB;
            push()
            stroke(48,22,8)
           
            line(a.x,a.y,b.x,b.y)    
            pop()



        }
    }
    
}