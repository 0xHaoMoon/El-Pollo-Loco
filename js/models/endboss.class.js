class Endboss extends MovableObject {

    
    height = 400;
    width = 400;
    x = 2000;
    y = 110;

    IMAGES_WALKLING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];



    constructor(){
        super().loadImage(this.IMAGES_WALKLING[0]);
        this.loadImages(this.IMAGES_WALKLING);
        this.animate();

    }


    animate(){

    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKLING);
    }, 100);


    }

    
    }

