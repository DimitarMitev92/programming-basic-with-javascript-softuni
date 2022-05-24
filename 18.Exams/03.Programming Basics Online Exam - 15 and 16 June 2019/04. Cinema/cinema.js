function cinema(input){
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let command = (input[index]);
    index++;
    let totalSum = 0;

    while(command != "Movie time!"){
        let countPeople = Number(command);
        capacity-=countPeople;
        if(capacity < 0){
            break;
        }
        if(countPeople % 3 === 0){
            totalSum += (countPeople*5) - 5;
        }else{
            totalSum += countPeople*5;
        }
        command=(input[index]);
        index++;
    }
    if(capacity > 0 || capacity === 0){
        console.log(`There are ${capacity} seats left in the cinema.`)
    }else{
        console.log(`The cinema is full.`);
    }
    console.log(`Cinema income - ${totalSum} lv.`)
}
