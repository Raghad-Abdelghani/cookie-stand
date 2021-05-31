let hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

//seattle

let seattle = {
    name: 'seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    custPerHour:[],
    cookiesPerHour:[],
    noCustPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custPerHour.push(everyHour(this.min, this.max));


        }
    },

        
    
noCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiesPerHour.push(Math.floor(this.avg * this.custPerHour[i]));
            
        }
    
    }
}
/*for (let i = 0; i < hours.length; i++) {
    seattle.avg*noCookiesPerHour()[i]
    
}*/


seattle.noCustPerHour()
seattle.noCookiesPerHour()
console.log(seattle.cookiesPerHour)


function everyHour(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//Tokyo
let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.3,
    custoPerHour:[],
    cookiiesPerHour:[],
    noCustoPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custoPerHour.push(everyHour(this.min, this.max));

        }
    },

        
    
noCookiiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiiesPerHour.push(Math.floor(this.avg * this.custoPerHour[i]));
            
        }
    
    }
}
Tokyo.noCustoPerHour()
Tokyo.noCookiiesPerHour()
console.log(Tokyo.cookiiesPerHour)


//Dubai

let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    customPerHour:[],
    cookieesPerHour:[],
    dubaiCustPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customPerHour.push(everyHour(this.min, this.max));

        }
    },

        
    
dubaiCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookieesPerHour.push(Math.floor(this.avg * this.customPerHour[i]));
            
        }
    
    }
}
Dubai.dubaiCustPerHour()
Dubai.dubaiCookiesPerHour()
console.log(Dubai.cookieesPerHour)


//Paris

let Paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    customePerHour:[],
    cookiessPerHour:[],
    parisCustPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customePerHour.push(everyHour(this.min, this.max));

        }
    },

        
    
parisCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookiessPerHour.push(Math.floor(this.avg * this.customePerHour[i]));
            
        }
    
    }
}
Paris.parisCustPerHour()
Paris.parisCookiesPerHour()
console.log(Paris.cookiessPerHour)


//Lima

let Lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    customerPerHour:[],
    cookieessPerHour:[],
    limaCustPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customerPerHour.push(everyHour(this.min, this.max));

        }
    },

        
    
limaCookiesPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.cookieessPerHour.push(Math.floor(this.avg * this.customerPerHour[i]));
            
        }
    
    }
}
Lima.limaCustPerHour()
Lima.limaCookiesPerHour()
console.log(Lima.cookieessPerHour)