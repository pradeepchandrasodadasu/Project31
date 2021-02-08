class Man{
    constructor(x,y,r){
        var options = {
            isStatic : true,
            friction : 1
        }
        this.man = Bodies.circle(x,y,10,options);
        this.image1 = loadImage("images/Walking Frame/walking_1.png");
        this.image2 = loadImage("images/Walking Frame/walking_2.png");
        this.image3 = loadImage("images/Walking Frame/walking_3.png");
        this.image4 = loadImage("images/Walking Frame/walking_4.png");
        this.image5 = loadImage("images/Walking Frame/walking_5.png");
        this.image6 = loadImage("images/Walking Frame/walking_6.png");
        this.image7 = loadImage("images/Walking Frame/walking_7.png");
        this.image8 = loadImage("images/Walking Frame/walking_8.png");
        this.walking = [[this.image1,this.image2,this.image3,this.image4,this.image5,this.image6,this.image7,this.image8]];
    }

    display(){
            //var position = [this.man.position.x,this.man.position.y];
            var pos = this.man.position;
            //this.walking.push(pos);
            for(var i = 0;i<this.walking.length;i++){
                imageMode(CENTER);
                image(umbrella.walking[0][i],pos.x,pos.y,400,401);
              }
    }
        
}