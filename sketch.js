var  database;
var form, player,game;
var playerCount,gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  
  game = new Game();
  game.getState();
  game.Start();
}

function draw(){
}
