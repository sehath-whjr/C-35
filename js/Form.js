class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130,0);
        var inputBox = createInput("name");
        var button = createButton('Play');
        var greeting = createElement('h3');
        inputBox.position(130,160);
        button.position(250,300);
        button.mousePressed(function(){
            inputBox.hide();
            button.hide();
            var name = inputBox.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(130,160);
        });
    }
}