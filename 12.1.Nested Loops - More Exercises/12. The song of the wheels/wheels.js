function TheSongOfTheWeels (input){
    let controlNumber = Number(input[0]);
    let counter = 0;
    let password = 0;
    let fourthNum = false;
    let result = "";

    for(let a = 1 ; a <= 9 ; a++){
        for(let b = 1 ; b <= 9 ; b++){
            for(let c = 1 ; c <= 9 ; c++){
                for(let d = 1 ; d <= 9 ; d++){
                    let neededNum = ( a * b ) + ( c * d );
                    if(a < b && c > d && (neededNum == controlNumber)){
                        result +="" + a + b + c + d + " ";
                        counter++;
                        if(counter == 4){
                            password = 1000 * a + 100 * b + 10 * c + d;
                            fourthNum = true;
                        }
                    }
                }
            }
        }
    }
    console.log(result)
    if(fourthNum == true){
        console.log(`Password: ${password}`);
    }else{
        console.log(`No!`);
    }
}
