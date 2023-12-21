// get Calculate Btn from HTML
const CalcBtn = document.querySelector('.CalcBtn');

// get Form from HTML
const DataForm = document.querySelector('form');

// set Form to Display "none"
DataForm.style.display = "none";

// set Form to Display "flex" on CalcBtn click while CalcBtn Display "none"
CalcBtn.addEventListener('click', () => {
  DataForm.style.display = "flex";
  CalcBtn.style.display = "none";
})

// CalcTax() for all calculations
function CalcTax(){

  // get elements from DOM
  let month = document.getElementById('month').value.toUpperCase();
  let income = document.querySelector('#income').value;
  let vatInput = document.querySelector('#vatInput').value;
  
  // Levies Object for Levies calculation
  const Levies = {
    nhil : () => {const value = income * (25/1219); return parseFloat(value.toFixed(2));},
    g_fund : () => {const value = income * (25/1219); return parseFloat(value.toFixed(2));},
    covid_levy : () => {const value = income * (10/1219); return parseFloat(value.toFixed(2));},
    totalLevies : () => {const value = Levies.nhil() + Levies.g_fund() + Levies.covid_levy(); return parseFloat(value.toFixed(2));}
  }

  // VAT Object for VAT calculation
  const VAT = {
    vatoutpt : () => {const value = income * (159/1219); return parseFloat(value.toFixed(2))},
    vatintpt : () => {const value = vatInput * (159/1219); return parseFloat(value.toFixed(2))},
    totalVat : () => {const value = VAT.vatoutpt() - VAT.vatintpt(); return parseFloat(value.toFixed(2))}
  }

  // display content on DOM
  function displayInfo(){
    let body = document.querySelector('body');
    body.innerHTML = `
    <div class="container">
    <h2 class="heading">TAX CALCULATION FOR ${month}</h2>
    <h4 class="incomeText">INCOME: ${income}</h4>
    <ul>
      <li>NHIL: ${Levies.nhil()}</li>
      <li>G-FUND: ${Levies.g_fund()}</li>
      <li>COVID-19 LEVY: ${Levies.covid_levy()}</li>
      <li>TOTAL LEVIES: ${Levies.totalLevies()}</li>
      <li>VATOUTPUT: ${VAT.vatoutpt()}</li>
      <li>VATINPUT: ${VAT.vatintpt()}</li>
      <li>TOTAL VAT: ${VAT.totalVat()}</li>
    </ul>
  </div>
    `
  }

  return displayInfo();
}

// an event Listener for SubmitBtn
const SubmitBtn = document.querySelector('.SubmitBtn');
SubmitBtn.addEventListener('click', CalcTax);
