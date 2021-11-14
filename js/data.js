data = new Date();
year = data.getFullYear();
month = data.getMonth();
date = data.getDate();
day = data.getDay();

switch(month) 
{
    case 0: convMonth = "january"; break;
    case 1: convMonth = "february"; break;
    case 2: convMonth = "march"; break;
    case 3: convMonth = "april"; break;
    case 4: convMonth = "may"; break;
    case 5: convMonth = "june"; break;
    case 6: convMonth = "july"; break;
    case 7: convMonth = "august"; break;
    case 8: convMonth = "september"; break;
    case 9: convMonth = "october"; break;
    case 10: convMonth = "november"; break;
    case 11: convMonth = "december"; break;
}
switch(day) 
{
    case 0: convDay = "sunday"; break;
    case 1: convDay = "monday"; break;
    case 2: convDay = "tuesday"; break;
    case 3: convDay = "wednesday"; break;
    case 4: convDay = "thursday"; break;
    case 5: convDay = "friday"; break;
    case 6: convDay = "saturday"; break;
    
}
switch(date) {
    case 2: convDate = "2nd"; break;
    case 22: convDate = "22nd"; break;
    case 3: convDate = "3rd"; break;
    case 23: convDate = "23rd"; break;
    case 21: convDate = "21st"; break;
    default: convDate = (`${date}th`); break;

}

element = document.getElementById("current-data");
currentDate = element.innerHTML;
currentDate = (`${convDay},${convDate} ${convMonth} ${year}`);
element.innerHTML = currentDate;
