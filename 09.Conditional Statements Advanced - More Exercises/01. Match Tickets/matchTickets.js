function matchTickets (input){

    let budget = Number(input[0]);
    let categoryTicket = input[1];
    let numPeople = Number(input[2]);

    let transport = 0;
    let moneyForTickets = 0;
    let restMoney = 0;

    let ticketsVip = 499.99;
    let ticketsNormal = 249.99;

    if ( categoryTicket === "VIP"){
        if(numPeople >= 1 && numPeople <=4){
            transport = 0.75 * budget;
            restMoney = budget - transport;
            moneyForTickets = ticketsVip * numPeople;
            if(restMoney >= moneyForTickets){
                console.log(`Yes! You have ${(restMoney - moneyForTickets).toFixed(2)} leva left.`)
            }else{
                console.log(`Not enough money! You need ${(moneyForTickets - restMoney).toFixed(2)} leva.`)
            }
        }else if ( numPeople >=5 && numPeople <= 9){
            transport = 0.6 * budget;
            restMoney = budget - transport;
            moneyForTickets = ticketsVip * numPeople;
            if(restMoney >= moneyForTickets){
                console.log(`Yes! You have ${(restMoney - moneyForTickets).toFixed(2)} leva left."`)
            }else{
                console.log(`Not enough money! You need ${(moneyForTickets - restMoney).toFixed(2)} leva.`)
            }
        }else if ( numPeople >=10 && numPeople <= 24){
            transport = 0.5 * budget;
            restMoney = budget - transport;
            moneyForTickets = ticketsVip * numPeople;
            if(restMoney >= moneyForTickets){
                console.log(`Yes! You have ${(restMoney - moneyForTickets).toFixed(2)} leva left.`)
            }else{
                console.log(`Not enough money! You need ${(moneyForTickets - restMoney).toFixed(2)} leva.`)
            }
        }else if ( numPeople >= 25 && numPeople <= 49){
            transport = 0.4 * budget;
            restMoney = budget - transport;
            moneyForTickets = ticketsVip * numPeople;
            if(restMoney >= moneyForTickets){
                console.log(`Yes! You have ${(restMoney - moneyForTickets).toFixed(2)} leva left.`)
            }else{
                console.log(`Not enough money! You need ${(moneyForTickets - restMoney).toFixed(2)} leva.`)
            }
        }else if ( numPeople >= 50){
            transport = 0.25 * budget;
            restMoney = budget - transport;
            moneyForTickets = ticketsVip * numPeople;
            if(restMoney >= moneyForTickets){
                console.log(`Yes! You have ${(restMoney - moneyForTickets).toFixed(2)} leva left.`)
            }else{
                console.log(`Not enough money! You need ${(moneyForTickets - restMoney).toFixed(2)} leva.`)
            }
        }
    }else if ( categoryTicket === "Normal"){
        if(numPeople >= 1 && numPeople <=4){
            transport = 0.75 * budget;
            restMoney = budget - transport;
            moneyForTickets = ticketsNormal * numPeople;
            if(restMoney >= moneyForTickets){
                console.log(`Yes! You have ${(restMoney - moneyForTickets).toFixed(2)} leva left.`)
            }else{
                console.log(`Not enough money! You need ${(moneyForTickets - restMoney).toFixed(2)} leva.`)
            }
        }else if ( numPeople >=5 && numPeople <= 9){
            transport = 0.6 * budget;
            restMoney = budget - transport;
            moneyForTickets = ticketsNormal * numPeople;
            if(restMoney >= moneyForTickets){
                console.log(`Yes! You have ${(restMoney - moneyForTickets).toFixed(2)} leva left.`)
            }else{
                console.log(`Not enough money! You need ${(moneyForTickets - restMoney).toFixed(2)} leva.`)
            }
        }else if ( numPeople >=10 && numPeople <= 24){
            transport = 0.5 * budget;
            restMoney = budget - transport;
            moneyForTickets = ticketsNormal * numPeople;
            if(restMoney >= moneyForTickets){
                console.log(`Yes! You have ${(restMoney - moneyForTickets).toFixed(2)} leva left.`)
            }else{
                console.log(`Not enough money! You need ${(moneyForTickets - restMoney).toFixed(2)} leva.`)
            }
        }else if ( numPeople >=25 && numPeople <=49){
            transport = 0.4 * budget;
            restMoney = budget - transport;
            moneyForTickets = ticketsNormal * numPeople;
            if(restMoney >= moneyForTickets){
                console.log(`Yes! You have ${(restMoney - moneyForTickets).toFixed(2)} leva left.`)
            }else{
                console.log(`Not enough money! You need ${(moneyForTickets - restMoney).toFixed(2)} leva.`)
            }
        }else if ( numPeople >= 50){
            transport = 0.25 * budget;
            restMoney = budget - transport;
            moneyForTickets = ticketsNormal * numPeople;
            if(restMoney >= moneyForTickets){
                console.log(`Yes! You have ${(restMoney - moneyForTickets).toFixed(2)} leva left.`)
            }else{
                console.log(`Not enough money! You need ${(moneyForTickets - restMoney).toFixed(2)} leva.`)
            }
        }
    }
}
