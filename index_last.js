document.addEventListener('DOMContentLoaded', function() {
    const winnerDiv = document.getElementById('winner-display'); 
    const winnerText = localStorage.getItem('winner');

    // Update the text of the winner div
    if (winnerText) {
        winnerDiv.textContent = winnerText;
    }
});