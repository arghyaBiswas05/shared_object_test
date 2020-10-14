const ffi = require("ffi-napi");

const mathlib = new ffi.Library("../share_object/libmy",{
    "addition":[
        "int",["int","int"]
    ],
    "multi":[
        "int",["int","int"]
    ]
});

var a = document.getElementById('num1');
var b = document.getElementById('num2');
var result = document.getElementById('result');

function res() {
    if (a.value != null && b.value != null) {
        result.innerHTML = `The sum of the two numbers is: ${mathlib.addition(Number(a.value), Number(b.value))}, Mul: ${mathlib.multi(Number(a.value), Number(b.value))}`;
    }
}
