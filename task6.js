function getCentury(year){
    if(year%10===0 && year/10%10===0)
            return Math.round(year/100);
    return Math.floor(year/100)+1;
}
function getHalfCentury(year){
    if(year%100>=1 && year%100<=49)
        return 1;
    else if(year%100>=50 && year%100<=99 || (year%10===0 && year/10%10===0))
        return 2;
}
function getMillennium(year){
    if(year%10===0 && year/10%10===0 && year>=1000)
        return Math.round(year/1000);
    return  Math.floor(year/1000)+1;
}

let button6 = document.querySelector('#clickButton6');
button6.addEventListener('click', function(event){
    event.preventDefault();
    let result6 = document.querySelector('#fieldResult6');
    let year = document.querySelector('#yearCentury');

    result6.value = getHalfCentury(year.value) + ' половина ' +
                    getCentury(year.value) + ' століття ' +
                    getMillennium(year.value) + ' тисячоліття';
});