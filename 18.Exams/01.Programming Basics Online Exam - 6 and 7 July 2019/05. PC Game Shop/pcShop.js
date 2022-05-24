function pcGameShop (input){
    let index=0;
    let numGames = Number(input[index]);
    index++;
    let counterHearthstone = 0;
    let counterFornite = 0;
    let counterOverwatch = 0;
    let counterOthers = 0;
    let counterAll = 0;

    for(let i = 1 ; i <= numGames ; i++){
        let currentGame = input[i];
        if(currentGame === "Hearthstone"){
            counterHearthstone++;
            counterAll++;
        }else if ( currentGame === "Fornite"){
            counterFornite++;
            counterAll++;
        }else if ( currentGame === "Overwatch"){
            counterOverwatch++;
            counterAll++;
        }else{
            counterOthers++;
            counterAll++;
        }
    }
    let percentHearthstone = (counterHearthstone/counterAll)*100;
    let percentFornite = (counterFornite/counterAll)*100;
    let percentOverwatch = (counterOverwatch/counterAll)*100;
    let percentOthers = ( counterOthers/counterAll)*100;

    console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentOthers.toFixed(2)}%`);
}
