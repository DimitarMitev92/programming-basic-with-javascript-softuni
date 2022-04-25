function serialCalculator (input){
    let nameSerial = (input[0]);
    let numSeasons = Number(input[1]);
    let numEpisodes = Number(input[2]);
    let timeEpisode =  Number(input[3]);

    let timeEpisodeWithАdvertising = 1.2 * timeEpisode;
    let lastEpisode = timeEpisodeWithАdvertising + 10;
    let numEpisodesAfterAdvertising = numEpisodes - 1;

    let allTimeepisodes = lastEpisode + numEpisodesAfterAdvertising * timeEpisodeWithАdvertising
    let allTime = numSeasons * allTimeepisodes;

    console.log(`Total time needed to watch the ${nameSerial} series is ${allTime} minutes.`)
}
