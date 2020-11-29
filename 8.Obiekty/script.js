// Zadanie 1
	let car = {
	    brand: 'BMW',
	    model: 'Astra',
	    production_year: '2001'
	};
	

	console.log(car.brand);
	console.log(car.model);
	console.log(car.production_year);
	

	// Zadanie 2
	car.changeBrand = function(newBrand) {
	    this.brand = newBrand;
	}
	

	car.changeBrand("Audi");
	console.log(car.brand);
	

	// Zadanie 3
	let calc = {
	    sum: 0,
	    sumArr: function(arr) {
	        this.sum = arr.reduce((x, y) => x + y);
	    }
	};
	

	calc.sumArr([1, 2, 3, 4]);
	console.log(calc.sum);
	

	// Zadanie 4
	let car2 = {
	    name: 'BMW',
	    age: '12'
	};
	

	for (let prop in car2) {
	    console.log(`${prop}: ${car2[prop]}`);
	}
	

	// Zadanie 5
	let car3 = {
	    someObj: {
	        myProp: 1
	    }
	};
	

	console.log(car3.someObj.myProp);
	

	// Zadanie 6
	let car4 = {};
	car4.myProp = "I'm prop";
	car4.sayHello = () => console.log("Hello");
	

	car4.sayHello();

