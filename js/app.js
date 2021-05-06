'use strict';

let hoursOfWork = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", 'Total Sales of Each Store'];
let stores=[];
function store(storeName, minCustPerHour, maxCustPerHour, avgCustCookies) {
    this.storeName = storeName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCustCookies = avgCustCookies;
    this.hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    this.randomCustPerHour = [];
    this.salesPerHour = [];
    this.sumOfDaySales = 0;
    this.sumOfSalesPerStore = 0;
    stores.push(this);


}

store.prototype.randomCustNumber = function () {
    for (let hour = 0; hour < this.hours.length; hour++) {
        this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
        this.sumOfDaySales += this.sumOfDaySales;
    }
}

store.prototype.salesCookies = function () {
    this.randomCustNumber();
    for (let i = 0; i < this.hours.length; i++) {
        this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
        this.totalPerHour += this.salesPerHour[i];


    }
    for (let j = 0; j < this.salesPerHour.length; j++) {
        this.sumOfSalesPerStore = this.sumOfSalesPerStore + this.salesPerHour[j];

    }
    this.salesPerHour.push(this.sumOfSalesPerStore);
}
store.prototype.render = function () {
    this.salesCookies();
    var tableEl = document.getElementById('sales');
    var trEl = document.createElement('tr');
    var tdNameEl = document.createElement('td');
    tdNameEl.textContent = this.storeName;
    trEl.appendChild(tdNameEl);
    tableEl.appendChild(trEl);


    for (let i = 0; i < 15; i++) {
        if (i === 14) {
            let tdEl = document.createElement('td');
            tdEl.textContent = this.salesPerHour[14];
            trEl.appendChild(tdEl);
            tableEl.appendChild(trEl);
        }
        else {
            let tdEl = document.createElement('td');
            tdEl.textContent = this.salesPerHour[i];
            trEl.appendChild(tdEl);
            tableEl.appendChild(trEl);
        }
    }

}
function tableHeder() {
    var tableEl = document.getElementById('sales');
    var trEl = document.createElement('tr');
    var tdNameEl = document.createElement('td');
    tdNameEl.textContent = 'Store Name'
    //tdNameEl.textContent = hoursOfWork;
    trEl.appendChild(tdNameEl);
    tableEl.appendChild(trEl);
    for (let i = 0; i < 15; i++) {
        //     if(i===0){
        //  let tdEl = document.createElement('td');
        //   tdEl.textContent = '  ';
        //   trEl.appendChild(tdEl);
        //   tableEl.appendChild(trEl);}
        //   else
        let tdEl = document.createElement('td');
        tdEl.textContent = hoursOfWork[i];
        trEl.appendChild(tdEl);
        tableEl.appendChild(trEl);
    }
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
function tableFotter() {
    
    for (let i = 0; i < 14; i++) {
     sumPerHour.push(seattle.salesPerHour[i] + tokyo.salesPerHour[i] + dubai.salesPerHour[i] + paris.salesPerHour[i] + lima.salesPerHour[i]);

    }
    for (let i = 0; i < 14; i++) { lastTotal = lastTotal + sumPerHour[i]; }
    sumPerHour.push(lastTotal);
    console.log(sumPerHour);
    var tableEl = document.getElementById('sales');
    var trEl = document.createElement('tr');
    var tdNameEl = document.createElement('td');
    tableEl.appendChild(trEl);
    var trEl = document.createElement('tr');
    var tdNameEl = document.createElement('td');
    tdNameEl.textContent = 'Total per Hour';
    trEl.appendChild(tdNameEl);
    tableEl.appendChild(trEl);
    for (let i = 0; i < 15; i++) {
        if (i == 14) {
            let tdEl = document.createElement('td');
            tdEl.textContent = sumPerHour[14];
            trEl.appendChild(tdEl);
            tableEl.appendChild(trEl);
        }
        else {
            let tdEl = document.createElement('td');
            tdEl.textContent = sumPerHour[i];
            trEl.appendChild(tdEl);
            tableEl.appendChild(trEl);
        }

    }
}

var form = document.getElementById('storeNameForm');
// form.addEventListener('submit', handleFormSubmit);
// var handleFormSubmit = function (event){
    form.addEventListener('submit',function (event){
    
    event.preventDefault();
  var storeName = event.target[storeName].value;
  var minCustPerHour = event.target.minCustPerHour.value;
var maxCustPerHour = event.target.maxCustPerHour.value;
   var avgCustCookies = event.target.avg-avgCustCookies.value;
  console.log(event);
  
   console.log(event.target(storeName));
   let newBrach=new store(storeName,minCustPerHour,maxCustPerHour.avgCustCookies)
   newBrach.render();
});

tableFotter();
console.log(stores);









/*
let hours = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm"];
let seattle = {
    storeName: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCustCookies: 6.3,
    randomCustPerHour: [],
    //[35,45,100,30....]
    salesPerHour: [],
    totalPerHour: 0,
    //[35*6.3,45*6.3,100*6.3,....]
    randomCustNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
        }
    },
    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
    },
    render: function () {
        let container = document.getEzlementById('sales');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.storeName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < hours.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.totalPerHour} cookies`

    }

}
seattle.randomCustNumber();
seattle.salesCookies();
seattle.render();

let tokyo = {
    storeName: 'Tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCustCookies: 1.2,
    randomCustPerHour: [],
    //[35,45,100,30....]
    salesPerHour: [],
    totalPerHour: 0,
    //[35*6.3,45*6.3,100*6.3,....]
    randomCustNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
        }
    },
    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
    },
    render: function () {
        let container = document.getElementById('sales');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.storeName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < hours.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.totalPerHour} cookies`

    }

}
tokyo.randomCustNumber();
tokyo.salesCookies();
tokyo.render();
let dubai = {
    storeName: 'Dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCustCookies: 3.7,
    randomCustPerHour: [],
    //[35,45,100,30....]
    salesPerHour: [],
    totalPerHour: 0,
    //[35*6.3,45*6.3,100*6.3,....]
    randomCustNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
        }
    },
    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
    },
    render: function () {
        let container = document.getElementById('sales');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.storeName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < hours.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.totalPerHour} cookies`

    }

}
dubai.randomCustNumber();
dubai.salesCookies();
dubai.render();

let Paris = {
    storeName: 'Paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCustCookies: 2.3,
    randomCustPerHour: [],
    //[35,45,100,30....]
    salesPerHour: [],
    totalPerHour: 0,
    //[35*6.3,45*6.3,100*6.3,....]
    randomCustNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
        }
    },
    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
    },
    render: function () {
        let container = document.getElementById('sales');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.storeName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < hours.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.totalPerHour} cookies`

    }

}
Paris.randomCustNumber();
Paris.salesCookies();
Paris.render();

let lima = {
    storeName: 'Lima	',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCustCookies: 4.6,
    randomCustPerHour: [],
    //[35,45,100,30....]
    salesPerHour: [],
    totalPerHour: 0,
    //[35*6.3,45*6.3,100*6.3,....]
    randomCustNumber: function () {
        for (let hour = 0; hour < hours.length; hour++) {
            this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
        }
    },
    salesCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
            this.totalPerHour += this.salesPerHour[i];
        }
    },
    render: function () {
        let container = document.getElementById('sales');
        let h2El = document.createElement('h2');
        container.appendChild(h2El);
        h2El.textContent = this.storeName;
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let hour = 0; hour < hours.length; hour++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
        }
        let totalLi = document.createElement('li');
        ulEl.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.totalPerHour} cookies`

    }

}
Paris.randomCustNumber();
Paris.salesCookies();
Paris.render();*/