let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// this function is copied from W3 school
//it creates random numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//seattle
//Object with properties and methods
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


    // to make the total

    let total = this.cookiesPerHour.reduce((a, b) => {
      return a + b;
    });

    let totalElement = document.createElement('li');

    ulElement.appendChild(totalElement);

    totalElement.textContent= `Total : ${total}`;
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
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
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

    let total = this.cookiesPerHour.reduce((a, b) => {
      return a + b;
    });

    let totalElement = document.createElement('li');

    ulElement.appendChild(totalElement);

    totalElement.textContent= `Total : ${total}`;
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
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
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
    let total = this.cookiesPerHour.reduce((a, b) => {
      return a + b;
    });

    let totalElement = document.createElement('li');

    ulElement.appendChild(totalElement);

    totalElement.textContent= `Total : ${total}`;
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
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
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
    let total = this.cookiesPerHour.reduce((a, b) => {
      return a + b;
    });

    let totalElement = document.createElement('li');

    ulElement.appendChild(totalElement);

    totalElement.textContent= `Total : ${total}`;
  
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
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
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
    let total = this.cookiesPerHour.reduce((a, b) => {
      return a + b;
    });

    let totalElement = document.createElement('li');

    ulElement.appendChild(totalElement);

    totalElement.textContent= `Total : ${total}`;
  }
};

//calling the functions

Lima.getCustomersPerHour();
Lima.getCookiesPerHour();
Lima.render();
console.log(Lima.customersPerHour);
console.log(Lima.cookiesPerHour);
