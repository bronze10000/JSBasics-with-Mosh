
// var points;
function checkSpeed(speed) {

    const speedLimit = 70;
    const mphOverSpdLmt = 5;

    if (speed <= speedLimit + mphOverSpdLmt) {
        console.log('Ok');
    } else {
        const points = Math.floor((speed - speedLimit)/mphOverSpdLmt); 
        if (points >= 12) {
            console.log('Licence Suspended');
        } else 
        console.log(points);
    } 
    }


console.log(checkSpeed(1600));