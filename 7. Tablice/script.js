zad 1
function myTable(paramTable){
    var sum =0;
    for (i=0; i<paramTable.length; i++){
        sum = sum + paramTable[i];
    };
    
    var average = sum /paramTable.length;
    
    for(i=0; i<paramTable.length; i++){
        console.log(paramTable[i]*average)
    }
};
myTable([1,2,3,4]);

zad 2

let anotherArr = ["a", 1, "b", 2, "c", "d"];
	

	console.log(anotherArr[0]);
	console.log(anotherArr[1]);
	console.log(anotherArr[anotherArr.length - 1]);
	console.log(anotherArr);
	anotherArr.forEach((value, index) => {
	    if (index % 2 == 0) {
	        console.log(value);
	    }
	});
	anotherArr.forEach((value) => {
	    if (typeof(value) == "string") {
	        console.log(value);
	    }
	});
	anotherArr.forEach((value) => {
	    if (typeof(value) == "number") {
	        console.log(value);
	    }
	});
	



Zad 3

let numbersArray = [1, 2, 3, 4, 5];
	

	console.log(numbersArray.reduce((x, y) => x + y));
	console.log(numbersArray.reduce((x, y) => x - y));
	console.log(numbersArray.reduce((x, y) => x + y) / numbersArray.length);
	console.log(numbersArray.filter(x => x % 2 == 0));
	console.log(numbersArray.filter(x => x % 2 != 0));
	console.log(numbersArray.reduce((x, y) => x > y ? x : y));
	console.log(numbersArray.reduce((x, y) => x > y ? y : x));
	console.log(numbersArray.reverse());
	

Zad 4
Function sumArray(arr) {
	    return arr.reduce((x, y) => x + y);
	}
	

	console.log(sumArray([1, 2, 3]));

Zad 5
function dividedByAverageArray(arr) {
	    let average = arr.reduce((x, y) => x + y) / arr.length;
	    return arr.map(x => x * average);
	}
	

	console.log(dividedByAverageArray([1, 2, 3]));


Zad 6 
myTable([1,2,3,4]);

function myTable(paramTable){
    var sum =0;
    var length = 0;
    for (i=0; i<paramTable.length; i++){
        if(paramTable[i] % 2 == 0){
            
            sum = sum + paramTable[i];
            length++;
        }
            
    }
    let avg = sum / length;
    console.log(avg)
};Zad 7
function sortArr(arr) {
	    return arr.sort();
	}
	

	console.log(sortArr([2, 3, 1]));

Zad 10
function reserveSing(paramTable)
{
  return  paramTable.map(el => {
    return el * (-1);
  })
}
console.log(reserveSing([1,2,3,4,6,-6]));
