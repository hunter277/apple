//
// 🧮 Age Calculator Logic
//
function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const resultElement = document.getElementById('ageResult');

    if (!dobInput) {
        resultElement.innerHTML = "Please select a date.";
        return;
    }

    const birthDate = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust months and years if the current day/month is before the birth day/month
    if (days < 0) {
        months--;
        // Get the last day of the previous month
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the result
    let resultString = `You are: `;
    if (years > 0) resultString += `${years} years, `;
    if (months > 0) resultString += `${months} months, `;
    resultString += `${days} days old.`;

    resultElement.innerHTML = resultString;
}

//
// Add JavaScript for other tools below
//
// Example: Word Counter Logic
// function countWords() { ... }
//
