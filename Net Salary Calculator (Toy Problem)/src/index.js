function calculateNetSalary() {
  let basicSalary = parseFloat(document.getElementById("basicSalary").value);
  let benefits = parseFloat(document.getElementById("benefits").value);

  if (
    isNaN(basicSalary) ||
    isNaN(benefits) ||
    basicSalary < 0 ||
    benefits < 0
  ) {
    document.getElementById("result").innerText =
      "Invalid input! Enter valid numbers.";
    document.getElementById("netSalaryBox").innerHTML = ""; // Clear net salary box
    return;
  }

  let grossSalary = basicSalary + benefits;

  // PAYE Calculation (Simplified)
  let payee = 0;
  if (grossSalary <= 24000) {
    payee = grossSalary * 0.1;
  } else if (grossSalary <= 32333) {
    payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
  } else {
    payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3;
  }

  // NHIF Deduction
  let nhifDeduction =
    grossSalary <= 5999 ? 150 : grossSalary <= 99999 ? 1600 : 1700;

  // NSSF Deduction (6% of basic salary, max 1080)
  let nssfDeduction = Math.min(basicSalary * 0.06, 1080);

  let netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);

  document.getElementById("result").innerHTML = `
        <div class="alert alert-info mt-3">
            <strong>Gross Salary:</strong> ${grossSalary.toFixed(2)}<br>
            <strong>PAYE (Tax):</strong> ${payee.toFixed(2)}<br>
            <strong>NHIF Deduction:</strong> ${nhifDeduction.toFixed(2)}<br>
            <strong>NSSF Deduction:</strong> ${nssfDeduction.toFixed(2)}
        </div>
    `;

  // Display Net Salary in a separate box
  document.getElementById("netSalaryBox").innerHTML = `
        <div class="card text-white bg-success p-3 mt-3">
            <h4 class="text-center">Net Salary</h4>
            <h2 class="text-center fw-bold">Ksh ${netSalary.toFixed(2)}</h2>
        </div>
    `;
}
