class MovableObject{
    x = 50;
    y = 350;
    img;
    height = 150;
    width = 200;

    // loadImage('img/test.png')
    loadImage(path){
        this.img = new Image () // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;

    }
    moveRight(){
        console.log('Moving right')
    };

    moveLeft(){

    };
}