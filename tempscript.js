function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let outputTemp;
  
    switch (inputUnit) {
      case 'celsius':
        switch (outputUnit) {
          case 'celsius':
            outputTemp = inputTemp;
            break;
          case 'fahrenheit':
            outputTemp = (inputTemp * 9/5) + 32;
            break;
          case 'kelvin':
            outputTemp = inputTemp + 273.15;
            break;
        }
        break;
      case 'fahrenheit':
        switch (outputUnit) {
          case 'celsius':
            outputTemp = (inputTemp - 32) * 5/9;
            break;
          case 'fahrenheit':
            outputTemp = inputTemp;
            break;
          case 'kelvin':
            outputTemp = (inputTemp - 32) * 5/9 + 273.15;
            break;
        }
        break;
      case 'kelvin':
        switch (outputUnit) {
          case 'celsius':
            outputTemp = inputTemp - 273.15;
            break;
          case 'fahrenheit':
            outputTemp = (inputTemp - 273.15) * 9/5 + 32;
            break;
          case 'kelvin':
            outputTemp = inputTemp;
            break;
        }
        break;
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${inputTemp} ${inputUnit} is ${outputTemp.toFixed(2)} ${outputUnit === 'kelvin' ? 'K' : '°' + outputUnit[0].toUpperCase()}.`;
  }
  