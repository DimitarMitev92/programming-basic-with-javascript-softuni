function solve(input){
    let num = (input[0]);
    let numLength = Number(num.length);
    let sum = 0;
    for(let i = 0; i <numLength; i++){
        sum+= Number(num[i]);
    }
    console.log(`The sum of the digits is:${sum}`)
}
