document.getElementById('generate-number').addEventListener('click', () => {
    const numberDisplay = document.getElementById('number');
    numberDisplay.textContent = "Generating..."; // Show loading text

    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a number between 1 and 100
        numberDisplay.textContent = randomNumber; // Update the display
    }, 1000); // Simulate a delay for loading effect
});
