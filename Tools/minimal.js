function calculateAge() {
  console.log("Calculate Age button was clicked!"); // This will show in the console

  const dobInput = document.getElementById('dob').value;
  const resultElement = document.getElementById('ageResult');

  if (!dobInput) {
    resultElement.innerHTML = "It works! But please select a date.";
    return;
  }

  const birthDate = new Date(dobInput);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  resultElement.innerHTML = `SUCCESS! You are ${years} years, ${months} months, and ${days} days old.`;
}
