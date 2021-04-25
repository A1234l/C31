class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    Matter.Body.set(this.body, 'frictionAir', 0.005);
    Matter.Body.setMass(this.body, this.body.mass * 4);
    this.position = [];
    this.smoke = loadImage('sprites/smoke.png');
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.speed>10 && this.body.position.x>200){
      var pos = this.body.position;
      this.position.push([pos.x,pos.y]);
    }
    for(var x=0; x<this.position.length; x++){
      image(this.smoke,this.position[x][0],this.position[x][1]);
    }
  }
}
