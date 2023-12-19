// Get the month of Tax Calculation
const month = prompt("Enter the month for tax calculation: ", undefined).toUpperCase();

// Get the income for the month and change to Int
const income = parseInt(prompt(`Enter ${month}'s income: `, 1));

// Levies function for all Levies (NHIL, G-Fund and Covid-19 Levy)
const Levies = {
  NHIL : () => {const value = income * (25/1219); return parseFloat(value.toFixed(2));},
  GFund : () => {const value = income * (25/1219); return parseFloat(value.toFixed(2));},
  Covid19Levy : () => {const value = income * (10/1219); return parseFloat(value.toFixed(2));},
  TotalLevies : () => {const value = Levies.NHIL() + Levies.GFund() + Levies.Covid19Levy(); return parseFloat(value.toFixed(2));},

  // Reverse the Levies 
  ReverseNHIL : () => {const value = Levies.NHIL() / (2.5/100); return parseFloat(value.toFixed(2));},
  ReverseGFund : () => {const value = Levies.GFund() / (2.5/100); return parseFloat(value.toFixed(2));},
  ReverseCovid19Levy : () => {const value = Levies.Covid19Levy() / (1/100); return parseFloat(value.toFixed(2))}
}

// VAT function for all VAT calculations
const VAT = {
  AskVATInput : parseInt(prompt("Enter VAT INPUT: ", 1)),
  vatOutput : () => {const value = income * (159/1219); return parseFloat(value.toFixed(2))},
  vatInput : () => {const value =  VAT.AskVATInput * (159/1219); return parseFloat(value.toFixed(2));},
  TotalVAT : () => {const value = VAT.vatOutput() - VAT.vatInput(); return parseFloat(value.toFixed(2))},

  // Reverse VATs
  ReverseVATOUTPUT : () => {const value = VAT.vatOutput() / (15/100); return parseFloat(value.toFixed(2));},
  ReverseVATINPUT : () => {const value = VAT.vatInput() / (15/100);return parseFloat(value.toFixed(2));},
}

// DisplayInfo function displays all the necessary information for the user in the console
const DisplayInfo = () => {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  const main = document.createElement('main');
  main.innerHTML = `
    <h2 class="text-warning display-4 m-2">TAX CALCULATION FOR ${month}</h2>
    <p class="display-6 text-white m-2">INCOME: ${income}</p>
    <ul class='list-unstyled justify-content-center m-4 lead text-white-50'>
      <li>NHIL: ${Levies.NHIL()}</li>
      <li>G-FUND: ${Levies.GFund()}</li>
      <li>COVID-19 LEVY: ${Levies.Covid19Levy()}</li>
      <li>TOTAL LEVIES: ${Levies.TotalLevies()}</li>
      <li>Reversed NHIL: ${Levies.ReverseNHIL()}</li>
      <li>Reversed G-FUND: ${Levies.ReverseGFund()}</li>
      <li>Reversed Covid-19 Levy: ${Levies.ReverseCovid19Levy()}</li>
      <li>VAT OUTPUT: ${VAT.vatOutput()}</li>
      <li>VATINPUT: ${VAT.vatInput()}</li>
      <li>TOTAL VAT: ${VAT.TotalVAT()}</li>
      <li>Reversed VATOUTPUT: ${VAT.ReverseVATOUTPUT()}</li>
      <li>Reversed VATINPUT: ${VAT.ReverseVATINPUT()}</li>
    </ul>
  `;
  container.append(main);
  body.append(container);
}

// Calling DisplayInfo function
DisplayInfo();