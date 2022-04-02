function solve(input){
    let name = input[0];
    let nameLength = Number(name.length);
    let sum = 0;
    for(let i = 0 ; i<nameLength; i++){
        switch(name[i]){
            case "a": sum+=1; break;
            case "e": sum+=2; break;
            case "i": sum+=3; break;
            case "o": sum+=4; break;
            case "u": sum+=5; break;
        }
    }
    console.log(sum)
}
