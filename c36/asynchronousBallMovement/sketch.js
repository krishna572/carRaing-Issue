var canvas,backgroundImg;
var gameState = 0;
var playerCount, form,game,player, database;
var allPlayers;

function setup(){
    database = firebase.database();

 canvas = createCanvas(500,500);
 game = new Game();
 game.getState();
 game.start();

}

function draw(){
    if(playerCount === 4){
        game.update();
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}
