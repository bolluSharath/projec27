class Bob {
    constructor(x, y,) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      
      
      this.body = Bodies.circle(x, y,50, options);
      World.add(world, this.body);

      console.log(this.body)
    }
    display(){
     

      push();
     
      stroke("black")
      fill("red")
      circle(this.body.position.x,this.body.position.y,50,50)
      pop();
    }
}