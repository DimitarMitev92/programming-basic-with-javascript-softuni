function gymnastics (input){
    let country = (input[0]);
    let device = (input[1]);

    let sum = 0;

    if(country === "Russia"){
        if(device === "ribbon"){
            sum += 18.5;
        }else if( device === "hoop"){
            sum += 19.1;
        }else if(device === "rope"){
            sum += 18.6;
        }
    }else if(country === "Bulgaria"){
        if(device === "ribbon"){
            sum += 19
        }else if( device === "hoop"){
            sum += 19.30;
        }else if(device === "rope"){
            sum += 18.9;
        }
    }else if(country === "Italy"){
        if(device === "ribbon"){
            sum += 18.7;
        }else if( device === "hoop"){
            sum += 18.8;
        }else if(device === "rope"){
            sum += 18.85
        }
    }
    let leftPoints = 20 - sum ;
    let percent = (leftPoints / 20)* 100;

    console.log(`The team of ${country} get ${sum.toFixed(3)} on ${device}.`);
    console.log(`${percent.toFixed(2)}%`)
}
