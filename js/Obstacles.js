class Obstacles{
    constructor(x, y, width, context){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = 30;
        this.context = context;
    }

    draw(){
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
}
