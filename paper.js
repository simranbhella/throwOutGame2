class Paper{
    constructor(x,y,radius)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image = loadImage("paperimage.png");
        this.body = Bodies.circle(x, y,30,options);
      this.radius=30;
        World.add(world, this.body);
    }
    display(){
        push();
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
      imageMode(CENTER);
          image(this.image, 0, 0, this.radius*2, this.radius*2);
        fill("white");
        pop();
       }
}