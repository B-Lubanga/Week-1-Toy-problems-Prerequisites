function generateGrade() {
  let marks = document.getElementById("marksInput").value; // Get input value
  marks = Number(marks); // Convert input to a number

  let grade;

  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  document.getElementById("result").innerText = `Grade: ${grade}`; // Displays grade in the HTML doc
}

// console.log(studentGrade(85)); // Output: "Grade: A"
// console.log(studentGrade(72)); // Output: "Grade: B"
// console.log(studentGrade(49)); // Output: "Grade: D"
// console.log(studentGrade(35)); // Output: "Grade: E"
