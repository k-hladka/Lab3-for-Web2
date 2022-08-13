let button8 = document.querySelector('#clickButton8');
button8.addEventListener('click', function(event){
    event.preventDefault();
    let result8 = document.querySelector('#fieldResult8');

    let timeStart = document.getElementById('timeStart');
    let timeEnd = document.getElementById('timeEnd');

    let timeArrayStart = timeStart.value.split(':');
    let timeArrayEnd = timeEnd.value.split(':');

    let checkStart = +timeArrayStart[0]*60 + +timeArrayStart[1];
    let checkEnd = +timeArrayEnd[0]*60 + +timeArrayEnd[1];

    let resultTimeEnd = Math.ceil(checkStart*2.318 + checkStart - checkEnd);
    let h = Math.round(resultTimeEnd/60);
    let m = resultTimeEnd - h * 60;
    result8.value = h + ' год ' + m + ' хв';
});