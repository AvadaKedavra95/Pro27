class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 200
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB=pointB;
    }

    fly(){
        this.sling.bodyA=null;
    }

    

    display(){
        if(this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
           var pointB = this.pointB;
           strokeWeight(4);
           line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}