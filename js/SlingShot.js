class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,              // slingshot class; constructing object, options for slingshot, 
            pointB: pointB,            // stiffness and length for constraint
            stiffness: 0.04,
            length: 100
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;                             //created constraint

        World.add(world, this.sling);

    }
    fly(){                                     //fly function
        this.sling.bodyA = null;                 
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;            //display function
        var pointB = this.pointB;                          //pointA on BodyA; pointB: on the point.
        
        strokeWeight(4);   
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}
