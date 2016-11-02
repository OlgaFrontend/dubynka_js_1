var x = prompt("Enter the number:", '');
var n = prompt("Enter the power:", '');



function power(x,n) {
  
  var result = x;
  if (n > 0) {
  
    while ( n > 1 ) {
    	result *= x;
    	n--;
    } 
    return result;

  } else if (n < 0) {
    
    n *= -1;
	
	while ( n > 1 ) {
		result *= x;
		n--;
	}
	return 1/result;
  
  } else {
	return 1;
  }

  }

console.log(power(x,n));

