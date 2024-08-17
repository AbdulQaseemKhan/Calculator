var input = document.getElementById('inputBox')

function showinput(value) {
    input.value += value
}

function calculate() {
    var calculate = eval(input.value)
    input.value = calculate
    
}
