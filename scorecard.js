
let countEl = document.getElementById("count-el")
let count = 0

function Point1() {
    count += 1
    countEl.textContent = count
}
function Point2() {
    count += 2
    countEl.textContent = count
}
function Point3() {
    count += 3
    countEl.textContent = count
}


function reset() {
    countEl.textContent = 0
    count=0
} 

let counterEl = document.getElementById("counter-el")
let counter = 0

function Point4() {
    counter += 1
    counterEl.textContent = counter
}
function Point5() {
    counter += 2
    counterEl.textContent = counter
}
function Point6() {
    counter += 3
    counterEl.textContent = counter
}


function rest() {
    counterEl.textContent = 0
    counter=0
} 
