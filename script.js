const button = document.querySelector('#button');
console.log(button);

function converter() {
  let input = parseFloat(document.querySelector("#input").value);
  let result = document.querySelector("#result");
  let startEnhet = document.querySelector("#startEnhet").value;
  let sluttEnhet = document.querySelector("#sluttEnhet").value;
  let convertedNumber = 0;

  console.log(`
  input: ${input} 
  result: ${result} 
  startEnhet: ${startEnhet} 
  sluttEnhet: ${sluttEnhet}
  convertedNumber: ${convertedNumber}`);

  if (Number.isNaN(input)) {
    result.textContent = "Ikke skrevet inn noe tall"
    result.style.color = "red";
    return;
  }

  if(startEnhet === sluttEnhet) {
    result.textContent = "Velg to ulike måleenheter"
    result.style.color = "red";
    return;
  }

  if (startEnhet === "mm") {
    convertedNumber = input / 1000;
  }

  else if (startEnhet === "cm") {
    convertedNumber = input / 100;
  }

  else if (startEnhet === "m") {
    convertedNumber = input;
  }

  else if (startEnhet === "km") {
    convertedNumber = input * 1000;
  }

  if (sluttEnhet === "m") {
    convertedNumber = convertedNumber;
  }

  else if (sluttEnhet === "cm") {
    convertedNumber = convertedNumber * 100;
  }

  else if (sluttEnhet === "mm") {
    convertedNumber = convertedNumber * 1000;
  }

  else if (sluttEnhet === "km") {
    convertedNumber = convertedNumber / 1000;
  }

  console.log(convertedNumber);
  result.textContent = convertedNumber;
}

button.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Button is clicked!');
  converter();
});
