function getWeek(date){
    return {
        dayNumber: "Номер дня: " + date.getDay(),
        dayName: "Назва дня: " + (getDay(date)).replace(' День тижня: ', ''),
    }
}

let button2 = document.querySelector('#clickButton2');
button2.addEventListener('click', function(event){
    event.preventDefault();
    let date2 = new Date();
    let result2 = document.querySelector('#fieldResult2');
    result2.innerHTML = getWeek(date2).dayNumber + '<br/>' + getWeek(date2).dayName;
});