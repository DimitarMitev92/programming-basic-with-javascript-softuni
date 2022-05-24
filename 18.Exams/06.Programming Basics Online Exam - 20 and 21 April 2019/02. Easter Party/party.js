function easterParty(input){
    let numGuests = Number(input[0]);
    let kuvertPerOnePerson = Number(input[1]);
    let budget = Number(input[2]);

    if(numGuests >= 10 && numGuests <= 15){
        kuvertPerOnePerson*=0.85;
    }else if(numGuests >= 15 && numGuests <= 20){
        kuvertPerOnePerson*=0.8;
    }else if(numGuests > 20){
        kuvertPerOnePerson*=0.75;
    }

    let cake = 0.1 * budget;
    let total = cake + kuvertPerOnePerson*numGuests;
    let result = Math.abs(total - budget);
    if(budget >= total){
        console.log(`It is party time! ${result.toFixed(2)} leva left.`)
    }else{
        console.log(`No party! ${result.toFixed(2)} leva needed.`)
    }

}
