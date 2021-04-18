class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    Matter.Body.setDensity(this.body, 2)
    this.transparency = 255;
  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed <3){
      super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      tint(255,this.transparency);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      this.transparency = this.transparency-5;
      pop();
    }
  }
};