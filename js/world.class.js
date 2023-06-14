class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw(){
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.height, this.character.width);

        for (let i = 0; i < this.enemies.length; i++) {
            const enemy = this.enemies[i];
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.height, enemy.width);
        }
    }
}
