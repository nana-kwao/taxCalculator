// GET OBJECTS FROM DOM 
const menuArea = document.querySelector(".menu");
const homeBtn = document.getElementById("homeBtn");
const calcBtn = document.getElementById("calcBtn");
const resultBtn = document.getElementById("resultBtn");
const aboutBtn = document.getElementById("aboutBtn");
const calcBtnHome = document.querySelector(".home .calcBtn");
const calcBtnCalc = document.querySelector("form .calcBtn");

const home = document.getElementById("home");
const calc = document.getElementById("calc");
const result = document.getElementById("result");
const about = document.getElementById("about");

// functions for showing various tabs
const showHome = () => {
  home.style.display = "flex";
  result.style.display = "none";
  about.style.display = "none";
  calc.style.display = "none";
}

const showCalc = () => {
  home.style.display = "none";
  result.style.display = "none";
  about.style.display = "none";
  calc.style.display = "flex";
}

const showResult = () => {
  home.style.display = "none";
  result.style.display = "flex";
  about.style.display = "none";
  calc.style.display = "none";
}

const showAbout = () => {
  home.style.display = "none";
  result.style.display = "none";
  about.style.display = "flex";
  calc.style.display = "none";
}



const CalcTax = () => {
  // get form value
  const month = document.getElementById("month").value.toUpperCase();
  const income = document.getElementById("income").value;
  const getVatInput = document.getElementById("vat-input").value;
  // levies calculation
  const Levies = {
    nhil : () => {const results = income * (25/1219); return parseFloat(results.toFixed(2));},
    getfund : () => {const results = income * (25/1219); return parseFloat(results.toFixed(2));},
    covidlevy : () => {const results = income * (10/1219); return parseFloat(results.toFixed(2));},
    totalLevies : () => {const results = Levies.nhil() + Levies.getfund() + Levies.covidlevy(); return results;},

    // taxable outputs
    nhilTaxable : () => {const results = Levies.nhil() / (2.5/100); return parseFloat(results.toFixed(2));},
    getfundTaxable : () => {const results = Levies.getfund() / (2.5/100); return parseFloat(results.toFixed(2));},
    covidlevyTaxable : () => {const results = Levies.covidlevy() / (1/100); return parseFloat(results.toFixed(2));}
  }

  //vat calculation 
  const VAT = {
    vatOutput : () => {const results = income * (159/1219); return parseFloat(results.toFixed(2));},
    vatInput : () => {const results = getVatInput * (10/1219); return parseFloat(results.toFixed(2));},
    totalVats : () => {const results = VAT.vatOutput() - VAT.vatInput(); return results;},

    // taxable outputs
    vatOutputTaxable : () => {const results = VAT.vatOutput() / (15/100); return parseFloat(results.toFixed(2));},
    vatInputTaxable : () => {const results = VAT.vatInput() / (15/100); return parseFloat(results.toFixed(2));}
  }

  const displayInfo = () => {
    result.innerHTML = `
      <table>
      <caption>Tax Calculation for ${month}</caption>
      <thead>
        <tr>
          <th>Tax</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NHIL</td>
          <td>${Levies.nhil()}</td>
        </tr>
        <tr>
          <td>G-FUND</td>
          <td>${Levies.getfund()}</td>
        </tr>
        <tr>
          <td>COVID-19 LEVY</td>
          <td>${Levies.covidlevy()}</td>
        </tr>
        <tr>
          <td>TOTAL LEVIES</td>
          <td>${Levies.totalLevies()}</td>
        </tr>
        <tr>
          <td>NHIL TAXABLE VALUE</td>
          <td>${Levies.nhilTaxable()}</td>
        </tr>
        <tr>
          <td>G-FUND TAXABLE VALUE</td>
          <td>${Levies.getfundTaxable()}</td>
        </tr>
        <tr>
          <td>COVID-19 LEVY TAXABLE VALUE</td>
          <td>${Levies.covidlevyTaxable()}</td>
        </tr>
        <tr>
          <td>VAT OUTPUT</td>
          <td>${VAT.vatOutput()}</td>
        </tr>
        <tr>
          <td>VAT INPUT</td>
          <td>${VAT.vatInput()}</td>
        </tr>
        <tr>
          <td>TOTAL VAT</td>
          <td>${VAT.totalVats()}</td>
        </tr>
        <tr>
          <td>VAT OUTPUT TAXABLE</td>
          <td>${VAT.vatOutputTaxable()}</td>
        </tr>
        <tr>
          <td>VAT INPUT TAXABLE</td>
          <td>${VAT.vatInputTaxable()}</td>
        </tr>
      </tbody>
    </table>`;
    showResult();
  }

  return displayInfo();
}

// add event listeners to menu lists
homeBtn.addEventListener("click", showHome);
calcBtn.addEventListener("click", showCalc);
resultBtn.addEventListener("click", showResult);
aboutBtn.addEventListener("click", showAbout);
calcBtnHome.addEventListener('click', showCalc);
calcBtnCalc.addEventListener('click', CalcTax); 