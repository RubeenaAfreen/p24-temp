class Paper{
    constructor(x, y,radius){

        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        
        this.body=Bodies.circle(x,y, radius, options);
        this.width = width;
    this.height = height;
    this.radius = radius;
       World.add(world, this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        var angle = this.body.angle;
       fill("yellow");
       rotate(angle);
       ellipseMode(RADIUS);
       ellipse(200,200,20);
       pop();
    }
}