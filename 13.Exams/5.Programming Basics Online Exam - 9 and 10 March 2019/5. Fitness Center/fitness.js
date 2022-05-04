function fitnessCenter (input){
    let index = 0;
    let members = Number(input[index]);
    index++;
    let backWorkout = 0;
    let chestWorkout = 0;
    let legsWorkout = 0;
    let absWorkout = 0;
    let sellsProteinShakes = 0;
    let sellsProteinBars = 0;
    let activeMembers = 0;
    let inActiveMembers = 0;
    
    let typeOfActivity = (input[index]);
    index++;

    for(let i = 1; i <= members; i++){
        if(typeOfActivity === "Back"){
            backWorkout++;
            activeMembers++;
        }else if( typeOfActivity === "Chest"){
            chestWorkout++;
            activeMembers++;
        }else if( typeOfActivity === "Abs"){
            absWorkout++;
            activeMembers++;
        }else if( typeOfActivity === "Legs"){
            legsWorkout++;
            activeMembers++;
        }else if( typeOfActivity === "Protein shake"){
            sellsProteinShakes++;
            inActiveMembers++;
        }else if( typeOfActivity === "Protein bar"){
            sellsProteinBars++;
            inActiveMembers++;
        }
        typeOfActivity = (input[index]);
        index++;
    }
    console.log(`${backWorkout} - back`);
    console.log(`${chestWorkout} - chest`);
    console.log(`${legsWorkout} - legs`);
    console.log(`${absWorkout} - abs`);
    console.log(`${sellsProteinShakes} - protein shake`);
    console.log(`${sellsProteinBars} - protein bar`);
    console.log(`${((activeMembers / members)*100).toFixed(2)}% - work out`);
    console.log(`${((inActiveMembers / members)*100).toFixed(2)}% - protein`);
}
