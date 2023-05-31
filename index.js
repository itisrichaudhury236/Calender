
const monthE1=document.querySelector(".date h1");
const fullDateE1=document.querySelector(".date p");
const monthInx= new Date().getMonth();
const lastDay= new Date(new Date().getFullYear, monthInx + 1, 0);






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