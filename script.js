document.getElementById("loanForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const income = parseFloat(document.getElementById("income").value);
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const employment = document.getElementById("employment").value;

  let result = "";

  if (age < 21 || age > 60) {
    result = "You are not eligible: Age should be between 21 and 60.";
  } else if (income < 1000) {
    result = "You are not eligible: Income should be at least $1000.";
  } else if (loanAmount > income * 10) {
    result = "You are not eligible: Loan amount is too high compared to income.";
  } else if (employment === "unemployed") {
    result = "You are not eligible: Employment status not acceptable.";
  } else {
    result = "Congratulations! You are eligible for the loan.";
  }

  document.getElementById("result").textContent = result;
});
