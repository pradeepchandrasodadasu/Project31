class Rain {
    constructor(x,y){
        var options = {
            //isStatic : false,
            friction : 0.1,
            density : 1
        }
        this.drop = Bodies.circle(x,y,3,options);
        this.radius = 3;
        World.add(world,this.drop);
        //this.rainDrops = [];
    }
    display(){
        var pos = this.drop.position;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius);
              
    }
    updateY(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop,{x:random(0,500),y:random(0,400)})
        }
        
    }
}