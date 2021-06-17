class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.score = 0;
                // this.obstacle = undefined;
        this.background = new Image();
        this.background.src = './images/road.png';
        this.car = new Car(this.canvas.width/2 - 17, this.canvas.height - 100, this.context);

    }

init(){
    setInterval(this.updateCanvas, 5);
}




    updateCanvas = () => {
        this.context.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
        this.car.draw();    
    }

    startObstacle(){

    }

}