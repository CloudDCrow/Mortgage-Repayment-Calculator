//Making a constant of how many months are in a year, in a short programm like this it is not really usefull,
//Hovewer in bigger projects it is good pracitce so that other programmers know that the number 12 is meant to 
//repersent the number of months in a year.
const MONTHS_IN_A_YEAR = 12;

  function getPrincipal() {
    //Gets the principal from users input from the text box "text1".
    let principal = parseInt(document.getElementById("text1").value);
    //Gets the annualInterestRate from the user in %, therefore the number is converted to decimal with / 100.
    let annualInterestRate = parseInt(document.getElementById("text2").value) / 100;
    //Gets the term from user input
    let term = parseInt(document.getElementById("text3").value);

    //Calculates the monthly interest rate by dividing the annualInterestRate with 12 (number of months in a year).
    let monthlyInterestRate = annualInterestRate / MONTHS_IN_A_YEAR;
    //Calculates the number of payments by multipling the term with 12.
    let numberOfPayments = term * MONTHS_IN_A_YEAR;

    //This uses the formula of Mortgage repayment, to calculate the monthly payment.
    let monthlyPayment = principal * (
      (monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      ((Math.pow(1 + monthlyInterestRate, numberOfPayments)) - 1));
    console.log("Monthly payment: " + monthlyPayment.toFixed(2) + "€");

    let totalOfAllPayments = monthlyPayment * numberOfPayments;
    console.log("Total: " + totalOfAllPayments.toFixed(2) + "€");

    document.getElementById("ppp").innerHTML = (monthlyPayment.toFixed(2) + "€");
    document.getElementById("pppp").innerHTML = (totalOfAllPayments.toFixed(2) + "€");

  }


