let button4 = document.querySelector('#clickButton4');
button4.addEventListener('click', function(event){
    event.preventDefault();
    let result4 = document.querySelector('#fieldResult4');

    let year=document.getElementById('year');
    let month=document.getElementById('month');

    if(+year.value/1000>=1 && +month.value>=1 && +month.value<=12) {
        let date=new Date(+year.value, +month.value);
        date.setDate(0);
        result4.value= date.getDate();
    }
    else
        result4.innerHTML = 'Помилка! Ви неправильно вводите дані';
});