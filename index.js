// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    let hQ = 42;
    return Math.abs(block - hQ);
}
distanceFromHqInBlocks(43); // return value 1 
distanceFromHqInBlocks(50); // return value 8 
distanceFromHqInBlocks(34); // return value 8

function distanceFromHqInFeet(feet) {
    distanceFromHqInBlocks(feet);
        let distance = distanceFromHqInBlocks(feet);

        return distance * 264;
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

function distanceTravelledInFeet(start, destination){
    return Math.abs((start-destination)*264)
}
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);

function calculateFarePrice(start, destination){
    
    return 

}