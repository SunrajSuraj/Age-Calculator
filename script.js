function calculateAge() {
    // Get values from input fields
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    // Validate input values
    if (!day || !month || !year || day < 1 || day > 31 || month < 1 ||
         month > 12 || year < 1900 || year > 2100) {

        showError();
        return;
    }

    // Convert input into a valid Date object
    let dob = new Date(year, month - 1, day);
    let today = new Date();

    // Calculate age difference
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Adjust values if the day/month hasn't occurred yet this year
    if (ageDays < 0) {
        ageMonths--;
        let lastMonthDays = new Date(today.getFullYear(), 
        today.getMonth(), 0).getDate();

        ageDays += lastMonthDays;
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Display the calculated age
    displayAge(ageYears, ageMonths, ageDays);

    // Clear input fields after a short delay
    setTimeout(clearInputs, 500);
}

// Function to display age in the respective boxes
function displayAge(years, months, days) {
    document.getElementById("years-box").innerText = `${years} \nYear`;
    document.getElementById("months-box").innerText = `${months} \nMonth`;
    document.getElementById("days-box").innerText = `${days} \nDays`;
}

// Function to show error by flashing red background
function showError() {
    document.body.style.backgroundColor = "red";
    setTimeout(() => document.body.style.backgroundColor = "#e0e5ec", 500);
}

// Function to clear input fields
function clearInputs() {
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
}




