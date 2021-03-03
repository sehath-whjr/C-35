var canvas, database;
var form, player, game;
var playerCount, gameState = 0, backgroundImg;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    drawSprites();
}