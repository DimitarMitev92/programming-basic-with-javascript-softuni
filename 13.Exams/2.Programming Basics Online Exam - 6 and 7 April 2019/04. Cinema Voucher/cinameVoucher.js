function cinemaVoucher(input){
    let index = 0;
    let voucherPrice = Number(input[index]);
    index++;
    let ticketsNum = 0;
    let otherPrNum = 0;
    let sumMovie = 0;
    let sumPr = 0;

    while(voucherPrice >= 0){
        let movieName = input[index];
        index++;
        if(movieName === "End"){
            console.log(ticketsNum);
            console.log(otherPrNum);
            break;
        }
        if(movieName.length > 8){
            sumMovie = movieName.charCodeAt(0) + movieName.charCodeAt(1);
            if(sumMovie > voucherPrice){
                console.log(ticketsNum);
                console.log(otherPrNum);
                break;
            }
            voucherPrice-=sumMovie;
            ticketsNum++;
        }else if ( movieName.length <= 8){
            sumPr = movieName.charCodeAt(0);
            if(sumPr > voucherPrice){
                console.log(ticketsNum);
                console.log(otherPrNum);
                break;
            }
            voucherPrice-=sumPr;
            otherPrNum++;
        }
    }
}
