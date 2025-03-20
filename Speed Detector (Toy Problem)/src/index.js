function speedDetector(speed) {
  const speedLimit = 70;
  const maxPoints = 12;

  if (speed < speedLimit) {
    return "Ok";
  } else {
    let points = Math.floor((speed - speedLimit) / 5);
    if (points > maxPoints) {
      return "License suspended";
    }
    return `Points: ${points}`;
  }
}

function checkSpeed() {
  const speedInput = document.getElementById("speedInput").value;
  const resultBox = document.getElementById("resultBox");

  // Validate input
  if (!speedInput || isNaN(speedInput) || speedInput < 0) {
    resultBox.innerHTML = `<div class="alert alert-danger">Please enter a valid speed!</div>`;
    return;
  }

  const speed = parseInt(speedInput);
  const result = speedDetector(speed);

  // Display the result with appropriate styling
  let alertClass = "alert-success"; // Default for "Ok"
  if (result.includes("Points")) alertClass = "alert-warning"; // Yellow for points
  if (result === "License suspended") alertClass = "alert-danger"; // Red for suspension

  resultBox.innerHTML = `<div class="alert ${alertClass}"><strong>Result:</strong> ${result}</div>`;
}
