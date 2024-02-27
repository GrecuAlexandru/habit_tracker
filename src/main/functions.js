const habitDetails = {
    title: 'Exercise',
    description: 'Daily workout routine',
    streakGoal: 30,
    reminder: [],
    completionsPerDay: 1,
    icon: 'exercise',
    color: '#FF0000',
    completedDates: [] // Add an empty array to store completed dates
};

function startHabits() {
    console.log("asdasd");
    const dataDir = path.resolve(__dirname, '..', 'data');
    jetpack.dir(dataDir);

    const filePath = path.join(dataDir, 'habits.json');
    if (fs.existsSync(filePath)) {
        console.log('File already exists');
        return;
    }

    jetpack.write(filePath, { data: habitDetails });
}

// Function to add a completed date to the habitDetails object
function addCompletedDate(date, count) {
    habitDetails.completedDates.push({ date, count });
}

// Example usage:
addCompletedDate('2022-01-01', 1);
addCompletedDate('2022-01-02', 2);
addCompletedDate('2022-01-03', 3);

console.log(habitDetails.completedDates); // Output: [{ date: '2022-01-01', count: 1 }, { date: '2022-01-02', count: 2 }, { date: '2022-01-03', count: 3 }]
console.log('Count:', habitDetails.completedDates.length); // Output: Count: 3
