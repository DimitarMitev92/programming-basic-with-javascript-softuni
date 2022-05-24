function oldBooks (input){
    index=0;
    let favBook = input[index];
    index++;
    let currentBook = input[index];
    index++;
    let counterBooks = 0;
    let isFound = false;

    while(currentBook !== favBook){
        counterBooks++;
        currentBook=(input[index]);
        index++;
        if(currentBook === "No More Books"){
            console.log(`The book you search is not here!`)
            console.log(`You checked ${counterBooks} books.`)
            isFound = true;
            break;
        }
        
    }
    if(!isFound){
    console.log(`You checked ${counterBooks} books and found it.`)
    }
    
}
