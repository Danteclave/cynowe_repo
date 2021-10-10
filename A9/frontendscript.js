const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const opcode = document.getElementById("opcode");
const xhttp = new XMLHttpRequest();

let clickEventHandler = () => {
    xhttp.open("POST", "http://localhost:25567/math");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({operand1: operand1.value, operand2: operand2.value, opcode: opcode.value}));
};

xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200)
    {
        document.getElementById("result").innerHTML = JSON.parse(xhttp.responseText).result;
    }
};