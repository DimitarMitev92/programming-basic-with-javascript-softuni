function vetParking(input){
    let day = Number(input[0]);
    let hour = Number(input[1]);
    
    let price = 0;
    let totalPrice = 0;

    for(let i = 1; i <= day; i++){
        price = 0;
        for(let j = 1; j <= hour; j++){
            if(i % 2 === 0 && j % 2 != 0){
                price +=2.5;
            }else if(i % 2 != 0 && j % 2 === 0){
                price+=1.25
            }else{
                price+=1;
            }
            
        }
        console.log(`Day: ${i} - ${price.toFixed(2)} leva`)
    }
    for(let i = 1; i <= day; i++){
        for(let j = 1; j <= hour; j++){
            if(i % 2 === 0 && j % 2 != 0){
                totalPrice +=2.5;
            }else if(i % 2 != 0 && j % 2 === 0){
                totalPrice+=1.25
            }else{
                totalPrice+=1;
            }
            
        }
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`)
}
