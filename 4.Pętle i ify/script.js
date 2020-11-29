zad 1
var x=1;
var y=2;

if(x>y) {
   console.log("x jest wieksze"); 
} else {
    console.log("x jest mniejsze");
}
Zad 2
let num1 = 112;
let num2 = 115;
let num3 = 20;

if(num1 > num2 && num1 > num3) {
    console.log('num1 jest największe');
} else if(num2 > num3) {
    console.log('num2 jest największe');
} else {
    console.log('num3 jest największe');
}


Zad 3
for (let i=0; i<11; i++) {
    console.log("Lubię JavaScript");
}
Zad 4
var result = 0;

for(var i = 0; i <11; i++) {
    result += i;
    console.log(result);
}
Zad 5
var n = 5;
for(let i = 0; i <= n; i++){
    console.log(`${i} - ${i%2 === 0 ? 'parzysta' : 'nieparzysta'}`);
    
}
Zad 6
for (var i = 0; i < 3; i++) {
    for (var j= 0; j < 4; j++) {
        console.log("i=" + i +", j=" +j);
    }
}
Zad 7
for(let i = 0; i < 100; i++){
    if(i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    }
    else if(i%3 === 0){
        console.log("Fizz");
    }
    else if(i%5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
Zad 8 a
let stars = '*';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 0; j <= i; j++) {
        
        result += stars;
        
    }
    console.log(result)
}
Zad 8 b
let stars = '*';
let spacer = ' ';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 5 - 1; j > i; j--) {
        result += spacer;
    }
    for (var k = 0; k <= i; k++) {
        result += stars + spacer;
    }
    console.log(result);
}
