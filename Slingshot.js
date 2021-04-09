class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,70,38,150);
        image(this.sling2,170,70,this.sling2.width,85);
        // console.log()
        // console.log(this.sling2.height);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke('rgb(48, 22, 8)');
            
            if(pointA.x<200){
                strokeWeight(10);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y-10);
                line(pointA.x-20, pointA.y, pointB.x-15, pointB.y-10);
                image(this.sling3,pointA.x-22,pointA.y-7);
            }
            else{
                strokeWeight(7);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y-10);
                line(pointA.x+20, pointA.y, pointB.x-15, pointB.y-10);
                image(this.sling3,pointA.x+22,pointA.y-5);
            }
        }
    }
    
}