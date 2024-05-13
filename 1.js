

var result = document.getElementById('res')



function add() {

    var a = document.getElementById('num1')
    var b = document.getElementById('num2')
    var inbox1 = Number(a.value)
    var outbox2 = Number(b.value)
    var total = inbox1 + outbox2


    console.log(total)
    result.textContent = "The result is: " + total

}
function sub() {

    var a = document.getElementById('num1')
    var b = document.getElementById('num2')
    var inbox1 = Number(a.value)
    var outbox2 = Number(b.value)
    var total = inbox1 - outbox2


    console.log(total)
    result.textContent = "The result is: " + total

}
function mul() {

    var a = document.getElementById('num1')
    var b = document.getElementById('num2')
    var inbox1 = Number(a.value)
    var outbox2 = Number(b.value)
    var total = inbox1 * outbox2


    console.log(total)
    result.textContent = "The result is: " + total

}
function div() {

    var a = document.getElementById('num1')
    var b = document.getElementById('num2')
    var inbox1 = Number(a.value)
    var outbox2 = Number(b.value)
    var total = inbox1 / outbox2


    console.log(total)
    result.textContent = "The result is: " + total

}   


function cleardispaly(){
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    var result = document.getElementById('res').textContent = ''
}