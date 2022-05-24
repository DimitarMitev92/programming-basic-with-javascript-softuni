function solve(input){
    let index = 0;
    let openTabs = Number(input[index]);
    index++
    let salary = Number(input[index]);
    index++;

    let fine = 0;
    let isFinishSalary = false;

    for(let i = 0; i < openTabs; i++){
        let currentTab = input[index];
        switch(currentTab){
            case "Facebook": fine+=150; break;
            case "Instagram": fine+=100; break;
            case "Reddit": fine+=50; break;
        }
        if(fine >= salary){
            console.log(`You have lost your salary.`);
            isFinishSalary = true;
            break;
        }
        index++;
    }
    if(!isFinishSalary){
        console.log(salary -fine);
    }
}
