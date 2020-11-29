document.addEventListener('DOMContentLoaded', () => {
	    // Zadanie 1.
	    console.log(document.querySelector('#buz').parentElement);
	    console.log(document.querySelector('#baz').previousElementSibling);
	    console.log(document.querySelector('#foo').children);
	    console.log(document.querySelector('#foo').parentElement);
	    console.log(document.querySelector('#foo').children[0]);
	    console.log((function() {
	        let foo = document.querySelector('#foo');
	        let fooChilds = foo.children;
	        let numOfChilds = fooChilds.length - 1;
	        let middleElementNum = Math.round(numOfChilds / 2);
	

	        return fooChilds[middleElementNum];
	    })());
	

	    // Zadanie 2.
	    let addClickEvent = function(elementId) {
	        let element = document.querySelector(`#${elementId}`);
	

	        element.addEventListener('click', function(event) {
	            console.log(event.target.textContent.trim());
	        });
	    }
	

	    addClickEvent('ex2');
	

	    // Zadanie 3.
	    document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
	        element.addEventListener('click', (event) => {
	            event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
	        });
	    });
	

	    // Zadanie 4.
	    document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
	        element.addEventListener('click', (event) => {
	            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	            event.target.parentElement.style.backgroundColor = randomColor;
	        });
	    });
	

	    // Zadanie 5.
	    
	    // Zadanie 6.
	    let task6_1 = document.querySelector('#ex6').firstElementChild.firstElementChild.firstElementChild;
	    let task6_2 = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
	    let task6_3 = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
	});

