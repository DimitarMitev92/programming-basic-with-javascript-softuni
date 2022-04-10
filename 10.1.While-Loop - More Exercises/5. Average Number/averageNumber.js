function avrgNumbers(input){
    let index=0;
    let num = input[index];
    index++;
    sum=0;

    for( let i=1; i <=num ; i++){
        sum+=Number(input[i]);
    }
    let avrg = sum / num;
    console.log(avrg.toFixed(2))
}
