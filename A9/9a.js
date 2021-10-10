const express = require("express");
const body_parser = require("body-parser");

const app = express();

const port = 25567;

app.engine('pug', require('pug').__express)
app.set("view engine", "pug");

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(body_parser.json());

app.get("/math", (req, res) => {
    res.render("entirefrontend");
});

app.post("/math", (req, res) => {
    const operand1 = parseInt(req.body.operand1);
    const operand2 = parseInt(req.body.operand2);
    const opcode = req.body.opcode;
    let result;
    res.statusCode = 200;
    if (Number.isNaN(operand1) || Number.isNaN(operand2) || typeof opcode === "undefined")
    {
        result = "The request is badly formed";
        res.statusCode = 400;
    }
    else
    {
        switch (opcode)
        {
            case "plus":
            {
                result = operand1 + operand2;
                break;
            }
            case "minus":
            {
                result = operand1 - operand2;
                break;
            }
            case "asterisk":
            {
                result = operand1 * operand2;
                break;
            }
            case "slash":
            {
                if (operand2 === 0)
                {
                    result = "Division by zero >:(";
                }
                else
                {
                    result = operand1 / operand2;
                }
                break;
            }
            default:
            {
                result = "Opcode is invalid - use the form to send requests >:(";
                res.statusCode = 400;
                break;
            }
        }
    }
    res.send({
        headers: {
            Accept: "application/json",
        },
        result: result
    });
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
