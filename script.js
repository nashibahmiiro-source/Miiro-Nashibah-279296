
// Welcome message
window.onload = function () {
    alert("Welcome to the Infectious Diseases Awareness Website!");
};

// Simple Quiz Function
function checkAnswer(answer) {
    let result = document.getElementById("quiz-result");

    if (answer === "correct") {
        result.innerHTML = "✅ Correct! Washing hands helps prevent infections.";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Wrong! Try again.";
        result.style.color = "red";
    }
}

// Show prevention tip
function showTip() {
    let tip = document.getElementById("tip");

    tip.innerHTML = "💡 Tip: Always cover your mouth when coughing or sneezing.";
}
