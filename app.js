/*let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// this function is copied from W3 school
//it creates random numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//seattle

let seattle = {
  name: 'seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersPerHour: [], //here i will push a number of customers for each hour(14n) then each no will be multiplied with avg
  cookiesPerHour: [],
  //This method pushes random numbers to the array
  getCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));


    }
  },



  getCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.avgCookies * this.customersPerHour[i]));

    }

  },

  //get parent by id
  render: function () {
    let parent = document.getElementById('parent');


    //to make h3 tag
    let nameElement = document.createElement('h3');

    parent.appendChild(nameElement);

    nameElement.textContent=this.name;

    //to make ul
    let ulElement=document.createElement('ul');

    parent.appendChild(ulElement);

    //to make li
    for (let i = 0; i < hours.length; i++) {

      let liElement=document.createElement('li');

      ulElement.appendChild(liElement);

      liElement.textContent= `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
    }
  }
};

//calling the functions

seattle.getCustomersPerHour();
seattle.getCookiesPerHour();
seattle.render();
console.log(seattle.customersPerHour);
console.log(seattle.cookiesPerHour);




//Tokyo
let Tokyo = {
  name: 'Tokyo',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersPerHour: [], //here i will push a number of customers for each hour(14n) then each no will be multiplied with avg
  cookiesPerHour: [],
  //This method pushes random numbers to the array
  getCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));


    }
  },



  getCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.avgCookies * this.customersPerHour[i]));

    }

  },

  //get parent by id
  render: function () {
    let parent = document.getElementById('parent');


    //to make h3 tag
    let nameElement = document.createElement('h3');

    parent.appendChild(nameElement);

    nameElement.textContent=this.name;

    //to make ul
    let ulElement=document.createElement('ul');

    parent.appendChild(ulElement);

    //to make li
    for (let i = 0; i < hours.length; i++) {

      let liElement=document.createElement('li');

      ulElement.appendChild(liElement);

      liElement.textContent= `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
    }
  }
};

//calling the functions

Tokyo.getCustomersPerHour();
Tokyo.getCookiesPerHour();
Tokyo.render();
console.log(Tokyo.customersPerHour);
console.log(Tokyo.cookiesPerHour);


//Dubai

let Dubai = {
  name: 'Dubai',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersPerHour: [], //here i will push a number of customers for each hour(14n) then each no will be multiplied with avg
  cookiesPerHour: [],
  //This method pushes random numbers to the array
  getCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));


    }
  },



  getCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.avgCookies * this.customersPerHour[i]));

    }

  },

  //get parent by id
  render: function () {
    let parent = document.getElementById('parent');


    //to make h3 tag
    let nameElement = document.createElement('h3');

    parent.appendChild(nameElement);

    nameElement.textContent=this.name;

    //to make ul
    let ulElement=document.createElement('ul');

    parent.appendChild(ulElement);

    //to make li
    for (let i = 0; i < hours.length; i++) {

      let liElement=document.createElement('li');

      ulElement.appendChild(liElement);

      liElement.textContent= `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
    }
  }
};

//calling the functions

Dubai.getCustomersPerHour();
Dubai.getCookiesPerHour();
Dubai.render();
console.log(Dubai.customersPerHour);
console.log(Dubai.cookiesPerHour);


//Paris

let Paris = {
  name: 'Paris',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersPerHour: [], //here i will push a number of customers for each hour(14n) then each no will be multiplied with avg
  cookiesPerHour: [],
  //This method pushes random numbers to the array
  getCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));


    }
  },



  getCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.avgCookies * this.customersPerHour[i]));

    }

  },

  //get parent by id
  render: function () {
    let parent = document.getElementById('parent');


    //to make h3 tag
    let nameElement = document.createElement('h3');

    parent.appendChild(nameElement);

    nameElement.textContent=this.name;

    //to make ul
    let ulElement=document.createElement('ul');

    parent.appendChild(ulElement);

    //to make li
    for (let i = 0; i < hours.length; i++) {

      let liElement=document.createElement('li');

      ulElement.appendChild(liElement);

      liElement.textContent= `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
    }
  }
};

//calling the functions

Paris.getCustomersPerHour();
Paris.getCookiesPerHour();
Paris.render();
console.log(Paris.customersPerHour);
console.log(Paris.cookiesPerHour);


//Lima

let Lima = {
  name: 'Lima',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersPerHour: [], //here i will push a number of customers for each hour(14n) then each no will be multiplied with avg
  cookiesPerHour: [],
  //This method pushes random numbers to the array
  getCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));


    }
  },



  getCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.avgCookies * this.customersPerHour[i]));

    }

  },

  //get parent by id
  render: function () {
    let parent = document.getElementById('parent');


    //to make h3 tag
    let nameElement = document.createElement('h3');

    parent.appendChild(nameElement);

    nameElement.textContent=this.name;

    //to make ul
    let ulElement=document.createElement('ul');

    parent.appendChild(ulElement);

    //to make li
    for (let i = 0; i < hours.length; i++) {

      let liElement=document.createElement('li');

      ulElement.appendChild(liElement);

      liElement.textContent= `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
    }
  }
};

//calling the functions

Lima.getCustomersPerHour();
Lima.getCookiesPerHour();
Lima.render();
console.log(Lima.customersPerHour);
console.log(Lima.cookiesPerHour);
*/



//Lab07

let stores=[];

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//copied from W3school

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Store(name, minCustomers, maxCustomers, avgCookies){
  this.name=name;
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.avgCookies=avgCookies;
  this.customersPerHour=[];
  this.cookiesPerHour=[];
  this.total=0;
  stores.push(this);

}

let seattle= new Store('seattle',23, 65, 6.3);
let Tokyo= new Store('Tokyo', 3, 24, 1.2);
let Dubai= new Store('Dubai', 11, 38, 3.7);
let Paris= new Store('Paris', 20, 38 ,2.3);
let Lima = new Store('Lima', 2, 16, 4.6);



Store.prototype.getCustomersEachHour =function (){
  for (let i= 0; i < hours.length; i++) {
    this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));
  }
};

//seattle.getCustomersEachHour();

Store.prototype.getCookiesEachHour =function (){
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.floor(this.avgCookies * this.customersPerHour[i]));

    this.total+=this.cookiesPerHour[i];

  }
};


console.log(seattle);

//seattle.getCookiesEachHour();










//Rndering

//Creating The Table
let container=document.getElementById('Box');

let tableElement=document.createElement('table');

// append child to parent

container.appendChild(tableElement);

//create the heading row

function headHoursRow(){

  let headingRow=document.createElement('tr');

  tableElement.appendChild(headingRow);

  //first cell,first row
  let thName=document.createElement('th');

  headingRow.appendChild(thName);

  thName.textContent='Name';


  //the hours row
  for (let i = 0; i < hours.length; i++) {

    let thHourRow=document.createElement('th') ;

    headingRow.appendChild(thHourRow);

    thHourRow.textContent=hours[i];
  }
  //last cell, first row

  let thDailyTotal=document.createElement('th');

  headingRow.appendChild(thDailyTotal);

  thDailyTotal.textContent='Daily Location Total';
}

headHoursRow();


Store.prototype.render=function(){

  let dataRow=document.createElement('tr');

  tableElement.appendChild(dataRow);

  let storeTd=document.createElement('td');

  dataRow.appendChild(storeTd);

  storeTd.textContent=this.name;

  for (let i = 0; i < hours.length; i++) {
    let cookiesTD=document.createElement('td');
    dataRow.appendChild(cookiesTD);

    cookiesTD.textContent=this.cookiesPerHour[i];
  }

  let total=document.createElement('td');

  dataRow.appendChild(total);

  total.textContent=this.total;
};

//seattle.render();





for (let i = 0; i < stores.length; i++) {
  stores[i].getCustomersEachHour();
  stores[i].getCookiesEachHour();
  stores[i].render();

}
