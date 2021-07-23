'use strict';
// arrOfNum=[1,2,3,4,5,6,7,8,9];
let greaterThanCount = 0
function greaterThan(arrOfNum, num) {
    for (let i = 0; i < arrOfNum.length; i++) {
        if (num > arrOfNum[i]) {


            greaterThanCount++

        }


    }
}
let arr = [2, 5, 8, 9, 6, 3, 4, 7, 1];
greaterThan(arr, 5);
console.log(greaterThanCount);

// =======================================================

let star = '*'
function drawStar(num2) {
    for (let i = 0; i < num2; i++) {
        console.log(star);
        star += '*';
    }

}

drawStar(5);

// ===================================================================================
let globArr = [];
let list = document.getElementById('list');
let getDone = document.getElementById('done');
let getDate = document.getElementById('date')
function Todo(done, date) {
    this.toDone = done;
    this.doDate = date;
    globArr.push(this)

};
console.log(getDone.value);
let sub = document.getElementById('submit');
sub.addEventListener('click', handelSubmit);

function handelSubmit(event) {
    event.preventDefault()
    let done = getDone.value;
    let date = getDate.value;
    const newTask = new Todo(done, date);
    console.log(newTask);

    console.log(globArr);
    saveToLs()
    unList.textContent = '';
    renderList();
}

let unList = document.createElement('ul');
function renderList() {
    for (let i = 0; i < globArr.length; i++) {
        list.appendChild(unList);
        let toDoList = document.createElement('li');
        unList.appendChild(toDoList);
        let dateList = document.createElement('li');
        unList.appendChild(dateList);
        toDoList.textContent = i+1+ '-'+globArr[i].toDone;
        dateList.textContent = globArr[i].doDate;

    }

}

function saveToLs() {
    let convertToLs = JSON.stringify(globArr);
    localStorage.setItem('preList', convertToLs);

}

function getFromLs() {
    let data = localStorage.getItem('preList');
    let parseData = JSON.parse(data);
    if (parseData) {
        for (let i = 0; i < parseData.length; i++) {
            globArr.push(parseData[i]);

        }

    }



}

getFromLs()
renderList();
// renderList();
console.log(globArr);

// let todayDate = new Date().toLocaleDateString();
let liveDate = (new Date()).toString().split(' ').splice(0,4).join(' ');
let todayDate = document.getElementById('todayDate');
todayDate.textContent = liveDate

console.log(liveDate);











