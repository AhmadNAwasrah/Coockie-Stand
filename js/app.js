'use strict';

let hoursOfWork = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let stores = [];
function store(storeName, minCustPerHour, maxCustPerHour, avgCustCookies) {
    this.storeName = storeName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCustCookies = avgCustCookies;
    // this.hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    this.randomCustPerHour = [];
    this.salesPerHour = [];
    this.sumOfDaySales = 0;

    stores.push(this);



}

store.prototype.randomCustNumber = function () {
    for (let hour = 0; hour < hoursOfWork.length; hour++) {
        let randomperhour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
        this.randomCustPerHour.push(randomperhour);

    }
}

store.prototype.salesCookies = function () {
    this.randomCustNumber();
    for (let i = 0; i < hoursOfWork.length; i++) {
        this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
        this.sumOfDaySales += this.salesPerHour[i];
    }

}
store.prototype.render = function () {
    this.salesCookies();
    var tableEl = document.getElementById('sales');
    var trEl = document.createElement('tr');
    var tdNameEl = document.createElement('td');
    tdNameEl.textContent = this.storeName;
    trEl.appendChild(tdNameEl);
    tableEl.appendChild(trEl);

    for (let i = 0; i < hoursOfWork.length; i++) {
        let tdEl = document.createElement('td');
        tdEl.textContent = this.salesPerHour[i];
        trEl.appendChild(tdEl);

    }
    let tdtotal = document.createElement('td');
    tdtotal.textContent = this.sumOfDaySales;
    trEl.appendChild(tdtotal);


}
let tableEl = document.getElementById('sales');
function tableHeder() {

    let trEl = document.createElement('tr');
    let tdNameEl = document.createElement('td');
    tdNameEl.textContent = 'Store Name'

    trEl.appendChild(tdNameEl);
    tableEl.appendChild(trEl);
    for (let i = 0; i < hoursOfWork.length; i++) {

        let tdEl = document.createElement('td');
        tdEl.textContent = hoursOfWork[i];
        trEl.appendChild(tdEl);
        tableEl.appendChild(trEl);
    }
    let tdNameE2 = document.createElement('td');

    tdNameE2.textContent = 'Daily total';
    trEl.appendChild(tdNameE2);
}
tableHeder();

let seattle = new store('Seattle', 23, 65, 6.3);
let tokyo = new store('Tokyo', 3, 24, 1.2);
let dubai = new store('Dubai', 11, 38, 3.7);
let paris = new store('Paris', 20, 38, 2.3);
let lima = new store('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
let sumPerHour = [];
let lastTotal = 0;



let totaloftotals = 0;
let totaloftotal = 0;

function tableFotter() {
    totaloftotal = 0;
    for (let i = 0; i < stores.length; i++) { totaloftotal += stores[i].sumOfDaySales; }
    console.log(totaloftotal);

    let trEl = document.createElement('tr');
    let tdNameEl = document.createElement('td');
    tdNameEl.textContent = 'Total per Hour';
    trEl.appendChild(tdNameEl);
    tableEl.appendChild(trEl)
    //i = 0 seattle 
    for (let i = 0; i < hoursOfWork.length; i++) {
        // j= 0 6am
        totaloftotals = 0;
        for (let j = 0; j < stores.length; j++) {

            totaloftotals += stores[j].salesPerHour[i];




        }
        let td = document.createElement('td')
        trEl.appendChild(td);
        td.textContent = totaloftotals;
    }
    let td = document.createElement('td')
    trEl.appendChild(td);
    td.textContent = totaloftotal;
    console.log(seattle.sumOfDaySales);


}
tableFotter();
console.log('stores' + stores);
var form = document.getElementById('storeNameForm');
// form.addEventListener('submit', handleFormSubmit);
// var handleFormSubmit = function (event){
form.addEventListener('submit', function (event) {

    event.preventDefault();
    var storeName = event.target.storeName.value;
    var minCustPerHour = parseInt(event.target.minCustPerHour.value);
    var maxCustPerHour = parseInt(event.target.maxCustPerHour.value);
    var avgCustCookies = parseInt(event.target.avgCustCookies.value);

    tableEl.removeChild(tableEl.lastChild);
    let newBrach = new store(storeName, minCustPerHour, maxCustPerHour, avgCustCookies);
    newBrach.render();
    tableFotter();



});
console.log(stores[3]);







