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
  const resultElement = document.getElementById("result");

  // Validate input
  if (!speedInput || isNaN(speedInput) || speedInput < 0) {
    resultElement.innerText = "Please enter a valid speed!";
    resultElement.style.color = "red";
    return;
  }

  const speed = parseInt(speedInput);
  const result = speedDetector(speed);

  // Display the result
  resultElement.innerText = result;
  resultElement.style.color = result === "License suspended" ? "red" : "black";
}
