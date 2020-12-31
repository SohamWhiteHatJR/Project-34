class Form{
    constructor(){

    }
    display(){

    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(600,20);

    var input = createInput("Name");
    input.position(500,160);

    var button = createButton("play");
    button.position(550,200);


    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name = input.value();
        playerCount += 1;
        player.update(name);
        player.update(playerCount);

        var greetings = createElement('h3');
        greetings.html("Hello "+name);
        greetings.position(500,160);
        
    })
    
}
}