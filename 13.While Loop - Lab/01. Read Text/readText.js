function readingWords (input){
  index=0;
  let name = (input[index]);
  index++;
  i = 0;
  while(i < input.length){
    let currentName=(input[i]);
    i++;
    if(currentName === "stop" || currentName === "Stop"){
      break;
    }else{
      console.log(currentName);
    }
    index++;
  }
}
