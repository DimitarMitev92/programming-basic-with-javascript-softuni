function trainingLab(input){
    const w = Number(input[0])*100;
    const h = Number(input[1])*100;

    const tableInRow = (h - 100)/70;
    const tableInColoms = w / 120;
    const allTables = (((Math.floor(tableInColoms))* ( Math.floor(tableInRow))) - 3);
    console.log(allTables);
}
