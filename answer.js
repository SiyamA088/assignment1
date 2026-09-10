//question 1
function describeValue(value){
    return `${typeof(value)} | ${value? "truthy" : "falsy"}`;
}

//question 2
function getDayType(day){
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        
        default:
            return "Invalid day";
    }
}


//question 3
function validateUserName(username){
    if(username.length < 4)
        return "Too short";
    else if(username.includes(" "))
        return "No space allowed";
    else if(username.toLowerCase().includes("admin"))
        return "Resesrved word";
    else
        return "Available";
}


//question 4
function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let vara = 50;

    if(distance>2)
        vara += (distance-2)*15;

    vara += waitingMinutes*2;

    if(isNight)
        vara += vara*0.2;

    return vara;
}

//question 5
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if(runsNeeded <= 0)
        return "Won";
    if(ballsLeft <= 0)
        return "Lost";

    let requiredRate = (runsNeeded / ballsLeft) * 6;

    if(requiredRate <= 6)
        return `Need ${runsNeeded} in ${ballsLeft} balls | Comfortable`;
    else if(requiredRate >= 6 && requiredRate <= 12)
        return `Need ${runsNeeded} in ${ballsLeft} balls | Tough`;
    else
        return `Need ${runsNeeded} in ${ballsLeft} balls | Almost impossible`;;
}
