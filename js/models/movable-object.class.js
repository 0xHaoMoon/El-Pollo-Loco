class MovableObject{
    x = 50;
    y = 350;
    img;
    height = 150;
    width = 200;

    imageCache = [];

    // loadImage('img/test.png')
    loadImage(path){
        this.img = new Image () // this.img = document.getElementById('image') <img id="image" src>
        this.img.src = path;

    }

    loadImages(arr){
        arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        this.imageCache[path] = path;
        });
    }
     
    moveRight(){
        console.log('Moving right')
    };

    moveLeft(){

    };
}