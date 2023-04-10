let entriesEl = document.getElementById("entries-el")
let countEl = document.getElementById("count-el");
let clearEl =  document.getElementById("clear-btn")
let count = 0;

function increment() {
    count = count + 1;
    countEl.textContent= count;
}

function save() {
    let entryStr = count + " - ";
    entriesEl.textContent += entryStr;
    count = 0;
    countEl.textContent = 0;
}

function clear() {
    

}