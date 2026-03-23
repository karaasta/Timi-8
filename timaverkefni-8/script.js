function checkCharacter() {
  console.log("Check character");
  // 1. Ná í name, age og score - OK
  // 2. Breyta age og score í Number - OK
  let name = document.getElementById("name").value;
  console.log("Nafnið er:", name);
  let age = Number(document.getElementById("age").value);
  console.log("Aldurinn er:", age);
  let score = Number(document.getElementById("score").value);
  console.log("Stigin eru:", score);
  // 3. Ef eitthvað vantar → sýna villu - OK
  if (name === "") {
    document.getElementById("output").innerText =
      "Úps, þú gleymdir að skrá nafn!";
    return;
  }
  if (isNaN(age) || age === 0) {
    document.getElementById("output").innerText =
      "Úps, þú gleymdir að skrá aldur!";
    return;
  }
  if (isNaN(score) || score === 0) {
    document.getElementById("output").innerText =
      "Úps, þú gleymdir að skrá stig!";
    return;
  }
  // 4. Nota if / else:
  // ef age < 18 skila þá "Of ung/ur til að spila"
  // ef score > 80 og age >= 18 "Pro"
  // ef score > 50 en < 80 "Normal"
  // annars skila "Beginner"
  // 5. Sýna niðurstöðu í output
  let message = "";
  if (age < 18) {
    message = "Of ung/-ur til að spila";
  } else if (score > 80) {
    message = "Pro player!";
  } else if (score > 50 && score < 80) {
    message = "Normal player!";
  } else if (score < 50) {
    message = "Beginner player!";
    console.log(message);
  }
  document.getElementById("output").innerText = message;
}
