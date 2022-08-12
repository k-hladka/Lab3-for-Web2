function getDate(date){
    let str = 'Дата: ' + date.getDate();
    switch (date.getMonth()){
        case 0: str+= ' січня '; break;
        case 1: str+= ' лютого '; break;
        case 2: str+= ' березня '; break;
        case 3: str+= ' квітня '; break;
        case 4: str+= ' травня ';break;
        case 5: str+= ' червня ';break;
        case 6: str+= ' липня ';break;
        case 7: str+= ' серпня ';break;
        case 8: str+= ' вересня ';break;
        case 9: str+= ' жовтня ';break;
        case 10: str+= ' листопада ';break;
        case 11: str+= ' грудня ';break;
    }
    str += date.getFullYear() + ' року ';
    return str;
}

function getDay(date){
    let day = ' День тижня: ';
    switch (date.getDay()){
        case 0: day += ' неділя'; break;
        case 1: day += ' понеділок'; break;
        case 2: day += ' вівторок'; break;
        case 3: day += ' середа'; break;
        case 4: day += ' четвер'; break;
        case 5: day += " п'ятниця"; break;
        case 6: day += ' субота'; break;
    }
    return day;
}

function getTime(date) {
   return 'Час: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}



let button = document.querySelector('#clickButton');
button.addEventListener('click', function(event){
    event.preventDefault();
    let date = new Date();
    let result = document.querySelector('#fieldResult');
    result.innerHTML = getDate(date) +'<br>'+ getDay(date) +'<br>'+ getTime(date);
});