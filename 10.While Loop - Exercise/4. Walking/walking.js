function walking(input){
    let target = 10000;
    index=0;
    let comand = input[index];
    index++;
    let steps = 0;

    while(comand !== "Going home"){
        let currentSteps = Number(comand);
        steps += currentSteps;
        if(steps >= target){
            console.log(`Goal reached! Good job!`);
            console.log(`${steps - target} steps over the goal!`);
            break;
        }
        comand = input[index];
        index++;
    }
    if(comand === "Going home"){
        let currentSteps = Number(input[index]);
        index++;
        steps+=currentSteps;
        if(steps>=target){
            console.log(`Goal reached! Good job!`);
            console.log(`${steps - target} steps over the goal! `)
        }else{
            console.log(`${Math.abs(steps - target)} more steps to reach goal.`)
        }
    }
}
