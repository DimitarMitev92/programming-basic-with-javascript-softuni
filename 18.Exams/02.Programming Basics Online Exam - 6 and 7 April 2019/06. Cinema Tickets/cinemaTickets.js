function cinemaTickets(input){
    let index=0;
    let nameMovie = input[index];
    index++;
    let totalTicket = 0;
    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;
    while(nameMovie !== "Finish"){
        let freeSpace = Number(input[index]);
        index++;
        let typeTicket = input[index];
        index++;
        let sellsTicket = 0;
        while(typeTicket !== "End"){
            if(typeTicket === "student"){
                studentCounter++;
            }else if ( typeTicket === "standard"){
                standardCounter++;
            }else if ( typeTicket === "kid"){
                kidCounter++;
            }
            totalTicket++;
            sellsTicket++;
            if(sellsTicket >= freeSpace){
                break;
            }
            typeTicket=input[index];
            index++;
        }
        console.log(`${nameMovie} - ${((sellsTicket/freeSpace)*100).toFixed(2)}% full.`)
        nameMovie =input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${((studentCounter/totalTicket)*100).toFixed(2)}% student tickets.`);
    console.log(`${((standardCounter/totalTicket)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidCounter/totalTicket)*100).toFixed(2)}% kids tickets.`)

}
