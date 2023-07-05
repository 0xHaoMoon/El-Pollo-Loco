class Character extends MovableObject{

    height = 350;
    width = 150;
    x = 0;
    y = 140;
    IMAGES_WALKLING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    world;


    constructor(){
            super().loadImage('img/2_character_pepe/2_walk/W-21.png');
            this.loadImages(this.IMAGES_WALKLING);
            this.animate();
    }

    animate(){
        setInterval(() => {

            if(this.world.keyboard.RIGHT){
            let i = this.currentImage % this.IMAGES_WALKLING.length;
            let path = this.IMAGES_WALKLING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            }
        }, 100);
    }

    jump(){

    }

}