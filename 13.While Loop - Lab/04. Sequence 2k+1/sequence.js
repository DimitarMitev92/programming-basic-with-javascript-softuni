function Sequence2k1 (input){
  let num = input[0]
  let sum = 0;
  while(sum <= num){
    sum = sum*2 + 1;

    if(sum <= num){
    console.log(sum)
    }
  }
}
