class Side {
    constructor(x,y,width,height){
    this.width = width;
    this.height = height;
    var option ={
    
    restitution:1,
    density:1,
    friction:0.5,
    isStatic:true
    
    
    }
    this.body = Bodies.rectangle(x,y,width,height,option)
    World.add(world,this.body)
    
    
    } 
    
    
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    angleMode(RADIANS)
    rectMode(CENTER)
    fill("red")    
    rect(0,0,this.width,this.height)
    pop();
    
    }
    }