// Zadanie 1.
	function Person(name, surname, age, country, city, language) {
	    this.name = name;
	    this.surname = surname;
	    this.age = age;
	    this.country = country;
	    this.city = city;
	    this.language = language;
	}
	

	Person.prototype.setAge = function(newAge) {
	    this.age = newAge;
	}
	

	Person.prototype.setCity = function(newCity) {
	    this.city = newCity;
	}
	

	let adam = new Person("Adam", "Nowak", 10, "Poland", "Cracow", "Polish");
	let bartek = new Person("Bartek", "Nowak", 11, "Poland", "Cracow", "Polish");
	let celina = new Person("Celina", "Nowak", 12, "Poland", "Cracow", "Polish");
	let daria = new Person("Daria", "Nowak", 14, "Poland", "Cracow", "Polish");
	let ewa = new Person("Ewa", "Nowak", 15, "Poland", "Cracow", "Polish");
	

	adam.setAge(15);
	adam.setCity("Wrocław");
	console.log(`Adam -> wiek: ${adam.age} | miasto: ${adam.city}`);
	

	bartek.setAge(16);
	bartek.setCity("Gdańsk");
	console.log(`Bartek -> wiek: ${bartek.age} | miasto: ${bartek.city}`);
	

	celina.setAge(16);
	celina.setCity("Zabrze");
	console.log(`Celina -> wiek: ${celina.age} | miasto: ${celina.city}`);
	

	daria.setAge(17);
	daria.setCity("Katowice");
	console.log(`Daria -> wiek: ${daria.age} | miasto: ${daria.city}`);
	

	ewa.setAge(18);
	ewa.setCity("Bielsko-Biała");
	console.log(`ewa -> wiek: ${ewa.age} | miasto: ${ewa.city}`);


// zad 2
function Calculator(){
    this.memory = [],
    this.sum = function(a, b) {
        this.memory.push('Dodawanie');
        console.log(a + b);
    },
    this.clearMemory = function() {
        this.memory = [];
    },
    this.showMemory = function() {
        console.log(this.memory);
    }
    this.sub = function(c,d) {
        this.memory.push('Odejmowanie');
        console.log(c -d);
    };
    this.mul = function(e,f) {
        this.memory.push('Mnożenie');
        console.log(e *f);
    };
        this.div = function(g,h) {
        this.memory.push('Dzielenie');
        console.log(g/h);
    };
    
}

const calc1 = new Calculator();
calc1.sum(2,2)
calc1.sub(2,3)
calc1.mul(3,3)
calc1.div(12,3)
calc1.showMemory()
