function daysAgo(date, N){
    N = +N;
    if(N<0)
        N*=-1;/*(date.getMonth()+1)*/
    date.setDate(date.getDate()-N);
    return date;
}

let button3 = document.querySelector('#clickButton3');
button3.addEventListener('click', function(event){
    event.preventDefault();
    let result3 = document.querySelector('#fieldResult3');

    let date = new Date();
    result3.innerHTML = getDate(daysAgo(date, document.getElementById('daysAgo').value));
});