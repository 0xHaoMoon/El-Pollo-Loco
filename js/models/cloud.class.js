class Cloud extends MovableObject{

    y = 5;
    width = 400;
    height = 800;
    
    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random()*500;

    }


    
}