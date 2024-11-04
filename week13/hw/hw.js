

function getDay()
{

const birthdayString = document.getElementById('bday').value;
const birthday= new Date(birthdayString);
const today = new Date();
const currentYear = today.getFullYear();
const birthdayInCurrentYear = birthday.setFullYear(currentYear);
let days = Math.floor((today - birthdayInCurrentYear) / (1000 * 60 * 60 *24));

if (days < 0) {
    days = days + 365;
}

if (days >= 11 && days <=20) textDays = 'дней';


let textDays = 'дней';

document.getElementById('result').innerHTML = `До дня рождения осталось: ${days} ${textDays}`;

const daysEnding = getDaysEnding(days);

if (daysEnding === 1) textDays = 'день';
else if (daysEnding <= 4 && daysEnding >= 2) textDays = 'дня';
}

function getDaysEnding(number) {
    const lastTwoDigits = number % 100;
    const lastDigit = number % 10;
    if (number < 10) return number;
    if (number >= 10 && number < 100) return lastDigit;
    return lastTwoDigits;
}

