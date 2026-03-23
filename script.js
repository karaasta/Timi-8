function sayHello() {
  console.log("Notandi var að ýta á takkann");
  let name = document.getElementById("nameInput").value;
  console.log("Nafnið er:", name);
  if (name === "") {
    document.getElementById("nameOutput").innerText =
      "Skrifaðu nafnið þitt fyrst!";
    return;
  }
  document.getElementById("nameOutput").innerText = `Halló ${name}!`;
}

function checkAge() {
  let age = Number(document.getElementById("ageInput").value);
  console.log("Aldurinn er:", age);
  console.log(isNaN(age));
  if (isNaN(age) || age === 0) {
    document.getElementById("ageOutput").innerText = "Sláðu inn aldur fyrst!";
    return;
  }
  let message = "";
  if (age > 18) {
    message = "Þú ert fullorðinn!";
  } else message = "Þú ert barn!";
  console.log(message);
  document.getElementById("ageOutput").innerText = message;
}

function calculate() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;
  console.log("Tala 1:", num1, "Tala 2:", num2, "operator", operator);
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else result = num1 - num2;

  console.log("Niðurstaða: ", result);
  document.getElementById("calcOutput").innerText = result;
}
