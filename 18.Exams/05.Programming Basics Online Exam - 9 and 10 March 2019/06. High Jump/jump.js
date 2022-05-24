function solve(input) {
    let index= 0;
    let jumpHeightWanted = Number(input[index]);
    index++;
    let jumpHeight = Number(input[index]);
    index++;
    let firstJump = jumpHeightWanted - 30;
    let numJumps = 1;
    let failJumps = 0;
    while (true) {
        if (jumpHeight > firstJump) {
            if (firstJump >= jumpHeightWanted) {
                console.log(`Tihomir succeeded, he jumped over ${jumpHeightWanted}cm after ${numJumps} jumps.`);
                break;
            }
            firstJump += 5;
            failJumps = 0;
        } else {
            failJumps++;
            if (failJumps == 3) {
                console.log(`Tihomir failed at ${firstJump}cm after ${numJumps} jumps.`);
                break;;
            }
        }
        jumpHeight = Number(input[index]);
        index++;
        numJumps++;
    }
}
