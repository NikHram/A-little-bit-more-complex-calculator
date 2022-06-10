let commandField = document.getElementById("operatorDecider");
let answer = document.getElementById("answer")
let output;

commandField.addEventListener("keypress",  (e) => {
    if (e.key === 'Enter') {
        if (commandField.value === "/plus") {
            output = +document.getElementById("number1").value + +document.getElementById("number2").value;
            answer.setAttribute("value", output);
        }

        if (commandField.value === "/minus") {
            output = +document.getElementById("number1").value - +document.getElementById("number2").value;
            answer.setAttribute("value", output);
        }

        if (commandField.value === "/divide") {
            output = +document.getElementById("number1").value / +document.getElementById("number2").value;
            answer.setAttribute("value", output);
        }

        if (commandField.value === "/multiply") {
            output = +document.getElementById("number1").value * +document.getElementById("number2").value;
            answer.setAttribute("value", output);
        }
    }
});

setTimeout(() => {window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0")}, 20000);
