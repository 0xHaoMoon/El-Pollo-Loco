class BackgroundObject extends MovableObject{

width = 1000;
height = 400;
constructor(imagePath, x, y){
super().loadImage(imagePath);
this.y=y;
this.x=x;
}


}