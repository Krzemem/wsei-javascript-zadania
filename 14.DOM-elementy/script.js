document.addEventListener('DOMContentLoaded', () => {
	    // Zadanie 1.
	    let tags = [];
	    document.querySelectorAll('.more-divs').forEach((element) => {
	        if (!tags.includes(element.tagName)) {
	            tags.push(element.tagName);
	        }
	    });
	    console.log(tags);
	

	    // Zadanie 2.
	    function showDetails(element) {
	        console.log(element.innerHTML);
	        console.log(element.outerHTML);
	        console.log([...element.classList].join(', '));
	        console.log([...element.classList]);
	        console.log(element.dataset)
	    }
	

	    showDetails(document.querySelector('.short-list'));
	

	    // Zadanie 3.
	    function result(...numbers) {
	        return {
	            sum: numbers.reduce((a, b) => parseInt(a) + parseInt(b)),
	            substract: numbers.reduce((a, b) => a - b)
	        }
	    }
	

	    let dataset = document.querySelector('#datasetCheck').dataset;
	    console.log(result(dataset.numberone, dataset.numbertwo, dataset.numberThree));
	

	    // Zadanie 4.
	    document.querySelector('#spanText').innerText = "Dowolony";
	

	    // Zadanie 5.
	    document.querySelector('#spanText').classList.add('dowolna');
	

	    // Zadanie 6.
	    function doSomeMagic(classList)
	    {
	        let arr = [...classList];
	

	        arr.forEach((element) => console.log(element));
	        console.log(arr.join('+'));
	    }
	

	    let el = document.querySelector('#classes');
	    doSomeMagic(el.classList);
	    el.classList = '';
	    console.log('Usunięto wszystkie klasy.');
	

	    // Zadanie 7.
	    let elements = document.querySelector('#longList').querySelectorAll('li');
	

	    elements.forEach((element) => {
	        if (element.dataset.text == null) {
	            element.dataset.text = "text";
	        }
	    });
	

	    // Zadanie 8.
	    let strToObj = (str) => { 
	        return {
	            newClass: str
	        };
	     };
	    let objToStr = (obj) => {
	        return obj.newClass;
	    };
	

	    let objFromStr = strToObj('mystr');
	    let strFromObj = objToStr(objFromStr);
	    document.querySelector(`#myDiv`).classList.add(strFromObj);
	

	    // Zadanie 9.
	    function randomNumberClass(num) {
	        let el = document.querySelector('#numbers');
	        let cssClass = num % 2 == 0 ? 'even' : 'odd';
	

	        el.classList = cssClass;
	    }
	    let randNumber = Math.round(Math.random() * 10);
	

	    randomNumberClass(randNumber);
	

	    // Zadanie 10.
	    let longList = document.querySelector('#longList');
	    
	    function arrayFilledWithValuesFromLongList(longList) {
	        let arr = [];
	

	        longList.querySelectorAll('li').forEach((element) => {
	            arr.push(element.innerText.trim());
	        });
	

	        return arr;
	    }
	

	    console.log(arrayFilledWithValuesFromLongList(longList));
	

	    // Zadanie 11.
	    function giveMeChildren(children) {
	        let childrenAsArray = [...children];
	

	        childrenAsArray.forEach((element) => {
	            let randNumber = Math.round(Math.random() * 10);
	            
	            element.dataset.oldValue = element.innerText.trim();
	            element.innerText = randNumber;
	        });
	    }
	

	    let children = document.querySelector('#longList').children;
	    giveMeChildren(children);
	});



