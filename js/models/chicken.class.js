class Chicken extends MovableObject {

    
    height = 100;
    width = 100;
    x = 0;
    y = 380;

    IMAGES_WALKLING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];



    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 200 + Math.random()*500;
        this.loadImages(this.IMAGES_WALKLING);
        this.animate();
        this.speed = 0.15 + Math.random()*0.25;

    }


    animate(){

    setInterval(() => {
        this.moveLeft();
        this.playAnimation(this.IMAGES_WALKLING);
    }, 100);

    }

    
    }

