function showInfo(date, options = {}){
    console.log(date.toLocaleDataString())
    if(options.displayDay){
        console.log("dia", date.getDate())
    }
    if(options.displayMonth){
        console.log("mês", date.getMonth())
    }
    if(options.displayDay){
        console.log("ano", date.getFullYear())
    }
}