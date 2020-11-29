// Zadanie 1.
	let person = {
	    name: "Jan",
	    surname: "Kowal",
	    age: 18,
	    country: "Poland",
	    town: "Bielsko-Biała",
	    incrementAge: function() {
	        this.age = this.age + 1;
	    },
	    introduce: function() {
	        console.log(`My name is ${this.name} ${this.surname} | ${this.age} years old | living in ${this.town}, ${this.country}`);
	    }
	};
	

	let person2 = {
	    name: "Maria",
	    surname: "Brzoza",
	    age: 22,
	    country: "Poland",
	    town: "Oświęcim",
	    incrementAge: function() {
	        this.age = this.age + 1;
	    },
	    introduce: function() {
	        console.log(`My name is ${this.name} ${this.surname} | ${this.age} years old | living in ${this.town}, ${this.country}`);
	    }
	};
	

	person.incrementAge(); //19
	person.introduce();
	person.incrementAge(); //20
	person.incrementAge(); //21
	person.introduce();
	

	person.incrementAge(); //19
	person.introduce();
	person.incrementAge(); //20
	person.incrementAge(); //21
	person.introduce();
	

	// Zadanie 2.
	person.favoriteDishes = [];
	person2.favoriteDishes = [];
	person.addFavDish = function(name) {
	    this.favoriteDishes.push(name);
	}
	person.listFavDishes = function() {
	    console.log(this.favoriteDishes);
	}
	

	person2.addFavDish = function(name) {
	    this.favoriteDishes.push(name);
	}
	person2.listFavDishes = function() {
	    console.log(this.favoriteDishes);
	}
	

	person.addFavDish("Pizza");
	person.addFavDish("Kebab");
	person.listFavDishes();
	

	person2.addFavDish("Zupa pomidorowa");
	person2.addFavDish("Schabowy");
	person2.listFavDishes();
	

	// Zadanie 3.
	let calc = {
	    a: 0,
	    b: 0,
	    setA: function(a) {
	        this.a = a;
	    },
	    setB: function(b) {
	        this.b = b;
	    },
	    sum: function() {
	        return this.a + this.b;
	    },
	    substract: function() {
	        return this.a - this.b;
	    },
	    multiply: function() {
	        return this.a * this.b;
	    },
	    divide: function() {
	        if (this.b == 0) {
	            console.error("Liczba B nie moze byc zerem.");
	            return;
	        }
	

	        return this.a / this.b;
	    }
	};
	

	// Zadanie 4.
	let ladder = {
	    currentStep: 0,
	    moveUp: function() {
	        this.currentStep++;
	    },
	    moveDown: function() {
	        if (this.currentStep <= 0) {
	            this.currentStep = 0;
	            console.info("Jesteś juz na samym dole.");
	            return;
	        }
	

	        this.currentStep--;
	    },
	    writeCurrentStep: function() {
	        console.log(`Aktualny stopień to: ${this.currentStep}`);
	    }
	};
