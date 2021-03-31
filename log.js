class log{
    constructor(x,y,height,angle){
        var option  = {
            "restitution": 1.0,
            'friction':0.3, 
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body, angle); 
        World.add(world, this.body);
    }
    display() {
        var pos= this.body.position
        var angle= this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("green")
        fill(255)
        rect(pos.x, pos.y, this.width, this.height);
        pop()
    }
}