interface ShowInfoOptions {
    displayDay: boolean;
    displayMonth: boolean;
    displayYear: boolean;
}
function showInfo(date: Date, options: ShowInfoOptions = {}){
    
}

showInfo(new Date(), { displayDay: true, displayMonth: true, displayYear: true })