class Chicken extends MovableObject {

    
    height = 100;
    width = 100;
    x = 0;
    y = 380;

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');

        this.x = 200 + Math.random()*500;
    }

}