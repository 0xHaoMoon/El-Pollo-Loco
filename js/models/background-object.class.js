class BackgroundObject extends MovableObject{

width = 1000;
height = 400;
constructor(imagePath, x){
super().loadImage(imagePath);
this.y= 550 - this.height;
this.x=x;
}


}