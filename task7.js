let button7 = document.querySelector('#clickButton7');
button7.addEventListener('click', function(event){
    event.preventDefault();
    let result7 = document.querySelector('#fieldResult7');

    let yearStart=document.getElementById('yearStart');
    let yearEnd=document.getElementById('yearEnd');

        let dateStart = new Date(yearStart.value);
        let dateEnd = new Date(yearEnd.value);
    result7.value = dateEnd.getFullYear() - dateStart.getFullYear();
});