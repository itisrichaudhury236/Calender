
const monthE1=document.querySelector(".date h1");
const fullDateE1=document.querySelector(".date p");
const daysE1= document.querySelector(".days");

const monthInx= new Date().getMonth();
const lastDay= new Date(new Date().getFullYear, monthInx + 1, 0).getDate();




const months=[
    "january",
    "february",
    "march",
    "April",
    "May",
    "june",
    "JUly",
    "August",
    "September",
    "october","November","December",


];
monthE1.innerText = months[monthInx];
fullDateE1.innerText = new Date().toDateString();


let days= "";

for( let i= firstDay; i>0 ;i--){
    days += `<div class="empty"></div>`;
}
for(let i=1; i<= lastDay;i++){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div> ${i}</div>`;
    }
}
                                                                                                    
daysE1.innerHTML = days;