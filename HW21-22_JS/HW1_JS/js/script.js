var a = +prompt('основание степени','');
while( parseInt(a) != a){
	var a = +prompt('основание степени только целое число','');
}  
console.log('основание степени = ', a)

var b = +prompt('показатель степени','');
while( parseInt(b) != b){
	var b = +prompt('показатель степени только целое число','');
}  
console.log('показатель степени = ', b)


pow (a,b);
console.log('result = ', pow(a,b));
alert('result = ' + pow(a,b));


function pow(a,b){
	var x = a ;
	console.log('основание степени Function = ', x)
	var n = b;
	console.log('показатель степени Function = ', n)
	if (b !=1 && b > 0){
		return x * pow(x, n - 1);
	} else if ( b == 0) {
		return +1 ;
	} else if (b < 0){
		return 1/pow(x,-n) ;
	} else {
		return x;
	}
}

