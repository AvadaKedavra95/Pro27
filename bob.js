class Bob{
    constructor(x,y){
        var options = {
            density:1,
            restitution:1,
            friction:0,
            frictionAir : 0,
            inertia : Infinity,
            slop : 1

        }

        this.body=Bodies.circle(x,y,30,options);
        World.add(world,this.body);
        this.radius=30;
    }

    display(){
        var pos=this.body.position;

        fill("black");
        stroke("red");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}