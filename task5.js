function getSeconds(date){
   let todaySeconds= date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds();
   let tomorrowSeconds = 86400 - todaySeconds;
    return{
        resultTodaySeconds: todaySeconds,
        resultTomorrowSeconds: tomorrowSeconds
    }
}


let button5_1 = document.querySelector('#clickButton5_1');
button5_1.addEventListener('click', function(event){
    event.preventDefault();
    let result5_1 = document.querySelector('#fieldResult5_1');

    let date5_1 = new Date();
    result5_1.value = getSeconds(date5_1).resultTodaySeconds;
});


let button5_2 = document.querySelector('#clickButton5_2');
button5_2.addEventListener('click', function(event){
    event.preventDefault();
    let result5_2 = document.querySelector('#fieldResult5_2');

    let date5_2 = new Date();
    result5_2.value = getSeconds(date5_2).resultTomorrowSeconds;
});