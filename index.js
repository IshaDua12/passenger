let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment1() {
    count += 1
    countEl.textContent = count
}

function increment4() {
    count += 4
    countEl.textContent = count
}

function increment6() {
    count += 6
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
