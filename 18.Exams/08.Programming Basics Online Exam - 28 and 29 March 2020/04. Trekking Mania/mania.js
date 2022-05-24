function trekkingMania (input){
    index = 0 ;
    let numGroups = Number(input[index]);
    index++;
    let counterMusala = 0;
    let counterMonblan = 0;
    let counterKilimandjaro = 0;
    let counterK2 = 0;
    let counterEverest = 0;
    let allPeople = 0;
    for(let i = 0; i <numGroups;i++){
        let currnetGroup = Number(input[index]);
        if(currnetGroup <= 5){
            counterMusala+=currnetGroup;
            allPeople+=currnetGroup;
        }else if ( currnetGroup >= 6 && currnetGroup <=12){
            counterMonblan+=currnetGroup;
            allPeople+=currnetGroup;
        }else if ( currnetGroup >=13 && currnetGroup <= 25){
            counterKilimandjaro+=currnetGroup;
            allPeople+=currnetGroup;
        }else if ( currnetGroup >= 26 && currnetGroup <=40){
            counterK2+=currnetGroup;
            allPeople+=currnetGroup;
        }else if ( currnetGroup >= 41){
            counterEverest+=currnetGroup;
            allPeople+=currnetGroup;
        }
        index++
    }
    let percentMusala = (counterMusala / allPeople)*100;
    console.log(`${percentMusala.toFixed(2)}%`);
    let percentMonblan = (counterMonblan/allPeople)*100;
    console.log(`${percentMonblan.toFixed(2)}%`);
    let percentKilimandjaro = (counterKilimandjaro/allPeople)*100;
    console.log(`${percentKilimandjaro.toFixed(2)}%`);
    let percentK2 = (counterK2/allPeople)*100;
    console.log(`${percentK2.toFixed(2)}%`);
    let percentEverest = (counterEverest/allPeople)*100;
    console.log(`${percentEverest.toFixed(2)}%`);

}
