import axios from "axios";





const getExchangeRate = async (toCurrency, amt) => {
    const allCurrencyData = await axios.get(`https://v6.exchangerate-api.com/v6/40cff90a13f487203d387106/latest/USD`); 
    
    const rate = allCurrencyData.data.conversion_rates;
    const usd = 1 / rate["USD"]
    const exchangeRate = usd * rate[toCurrency]
    const finalAmount = amt * exchangeRate
    output.textContent = finalAmount
    
  }

const form = document.getElementById('my-form');
const input = document.getElementById("amount-input");
const countryName = document.getElementById("foreign_currency");
const output = document.querySelector('#results');
const button = document.querySelector('#btn');


form.addEventListener("click", async function(event){
    event.preventDefault();
    const clickedVal = countryName.value;
    const myInput = input.value; 
    getExchangeRate(clickedVal, myInput)

const reset = document.querySelectorAll(clickedVal, myInput);

reset.forEach(input => {
    if(input.value){
        input.val = ""
    }
    else{
        input.innerHTML = ""
    }
})
  
})
  