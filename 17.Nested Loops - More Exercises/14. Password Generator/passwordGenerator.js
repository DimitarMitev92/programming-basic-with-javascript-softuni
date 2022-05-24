function passwordGenerator (input){
    let n = Number(input[0]);
    let l = Number(input[1]);
    let letter = 97 + l;
    let result = "";
    for(let i = 1 ; i <n ; i++){
        for(let j = 1 ; j < n ; j++){
            for(let m = 97 ; m < letter ; m++){
                for( let o = 97 ; o < letter ; o++){
                    for(let p = 2; p <= n ; p++){
                        if( p > i && p > j){
                            result += "" + i + j + String.fromCharCode(m) + String.fromCharCode(o) + p + " ";
                                                    }
                    }
                }
            }
        }
    }
    console.log(result)
}
