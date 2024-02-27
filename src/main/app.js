const jetpack = require("fs-jetpack");
const path = require('path');

const habits_path = path.join(__dirname, 'data', 'habits.json');

// if (jetpack.exists(habits_path) === "file") {
//     // Display habit block
//     // Replace the following code with your habit block HTML structure
//     document.getElementById("app").innerHTML = "<h2>Habit Block</h2>";
// } else {
//     // Display "Create new habit" button
//     document.getElementById("app").innerHTML = "<button id='create_habit'>Create new habit</button>";
// }

const squares = document.querySelector('.squares');

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const startOfYear = new Date(currentYear, 0, 1);
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const dayCount = Math.floor((currentDate - startOfYear) / (24 * 60 * 60 * 1000)) + 1;

for (var i = dayCount - 1; i >= dayCount - 90; i--) {
    const date = new Date(currentYear, currentMonth, i + 1);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const level = Math.floor(Math.random() * 3);

    if (isLeapYear(year) && month === 2 && day === 29) {
        continue; // Skip February 29th in leap years
    }

    console.log(formattedDate, level);


    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}" data-date="${formattedDate}"></li>`);
    squares.classList.add('rounded');
}