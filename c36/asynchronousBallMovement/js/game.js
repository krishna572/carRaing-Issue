class Game{
    constructor(){}
    
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val;
        });
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",100,100);
        player.getPlayerInfo();

        for(var plr in allPlayers){
                   

        if (allPlayers !== undefined) {
        var display_Position = 130;
        if (plr === "player"+player.index) {
            fill("red");
        }else{
            fill("black");
        }
    }
        display_Position = display_Position+20;
        textSize (15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance,120,display_Position);

        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance+50;
            player.update();   
           }
    }



    update(state){
        database.ref('/').update({
            gameState:state
        });
    }


    async start(){
        if (gameState===0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount()
            }
            form = new Form();
            form.display();
        }
    }
}