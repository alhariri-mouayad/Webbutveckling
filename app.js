const calculateButton = document.getElementById("calculate");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultParagraph = document.getElementById("result");

calculateButton.addEventListener("click", () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    let operator;

    if (document.getElementById("add").checked) {
        operator = "add";
    } else if (document.getElementById("sub").checked) {
        operator = "sub";
    } else if (document.getElementById("mul").checked) {
        operator = "mul";
    } else if (document.getElementById("div").checked) {
        operator = "div";
    }

    let result;
    if (operator === "add") {
        result = num1 + num2;
    } else if (operator === "sub") {
        result = num1 - num2;
    } else if (operator === "mul") {
        result = num1 * num2;
    } else if (operator === "div") {
        result = num1 / num2;
    }

    resultParagraph.innerHTML = "Resultat: " + result;
});