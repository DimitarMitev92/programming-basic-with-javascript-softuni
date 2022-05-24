function cinemaTickets(input){
    let index=0;
    let command = input[index];
    index++;

    let totalTicket = 0;
    let studentCount = 0;
    let standardCount = 0;
    let kidsCount = 0;
    while(command !== "Finish"){
        let name = command;
        let freeSpace = Number(input[index]);
        index++;
        let tempCommand = input[index];
        index++;
        let tempTicket = 0;
        while(tempCommand !== "End"){
            tempTicket ++;
            switch ( tempCommand){
                case "student": studentCount++; break;
                case "standard": standardCount++; break;
                case "kid": kidsCount++; break;
            }
            if(tempTicket >= freeSpace){
                break;
            }
            tempCommand= input[index];
            index++;
        }
        totalTicket +=tempTicket;
        let tempEmptySpace = tempTicket / freeSpace * 100;
        console.log(`${name} - ${tempEmptySpace.toFixed(2)}% full. `);
        command = input[index];
        index++;
    }

    console.log(`Total tickets: ${totalTicket}`);
    let studetnP = studentCount / totalTicket * 100;
    let standardP = standardCount / totalTicket * 100;
    let kidsP = kidsCount / totalTicket * 100;
    console.log(`${studetnP.toFixed(2)}% student tickets.`);
    console.log(`${standardP.toFixed(2)}% standard tickets.`);
    console.log(`${kidsP.toFixed(2)}% kids tickets.`)
}
