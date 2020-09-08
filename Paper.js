class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        Matter.Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
      }
      display(){
        var radius=this.body.radius;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        
        pop();
      }
}