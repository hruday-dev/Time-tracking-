const buttons = document.querySelectorAll('a');

fetch('../data.json').then((response)=>{
    if(!response.ok) return console.log("failed to load");
    return response.json();
}).then((data)=>{
    display(data);
})
const currentHrs = document.querySelectorAll('.hrs');
const workedHrs = document.querySelectorAll('.worked');
const lastTimeObj = {
    'daily':'Yesterday',
    'weekly':'Last Week',
    'monthly':'Last Month'
}

function display(data){
    for(const button of buttons){
        button.addEventListener('click',(e)=>{
            e.preventDefault();
                buttons.forEach(btn => btn.classList.remove('white'));
                button.classList.toggle('white');
                let buttonVal= button.textContent.toLowerCase();
                for (const i in data){
                    let jsonCurrentTime=data[i].timeframes[`${buttonVal}`].current;
                    let jsonPreviousTime=data[i].timeframes[`${buttonVal}`].previous;
                    currentHrs[i].textContent = `${jsonCurrentTime}hrs`;
                    workedHrs[i].textContent = `${lastTimeObj[buttonVal]} - ${jsonPreviousTime}hrs`;
                }
            });
        }
}
