class bob {
constructor (x,y){
var options={
    'restitution':1,
    'friction':1.0,
    'density':1.0
}
this.body = Bodies.circle(x, y, 35, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      ellipse(0, 0,70);
      pop();
    }
  };
