class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
   this.v=255
  }
 display(){
  
   if (this.body.speed >3){
     this.v=this.v-5
    World.remove(world, this.body)
    push ()
    tint (255,this.v)
     image(this.image,this.body.position.x,this.body.position.y,50,50)
     pop ()
   }
   else{
     super.display()
   }
console.log(this.body.speed)
 }
};