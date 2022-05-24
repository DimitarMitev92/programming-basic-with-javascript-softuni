function carNumber (input){
    let firstDigit = Number(input[0]);
    let secondDigit = Number(input[1]);
    let result="";
        for(let n1 = firstDigit; n1 <=secondDigit; n1++ ){
            for(let n2 = firstDigit; n2 <= secondDigit; n2++){
                for(let n3 = firstDigit; n3 <= secondDigit; n3++){
                    for( let n4 = firstDigit; n4 <= secondDigit; n4++){
                        if(n1 > n4){
                            if(n1 % 2 == 0 || n1 % 2 != 0){
                                if(n4 % 2 != 0 || n4 % 2 == 0){
                                    if((n1-n4)%2 != 0 && (n2 + n3)%2 == 0){
                                        result+="" + n1 + n2 + n3 + n4 + " ";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log(result)
}
