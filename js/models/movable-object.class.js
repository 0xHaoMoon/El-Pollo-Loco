class MovableObject{
    x = 120;
    y = 400;
    img;

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