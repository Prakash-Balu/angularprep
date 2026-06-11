const res = (function(x, f = () => {return x;}) {
	var x;
	var y = x;
	x = 'B';
	return [f(x),  y,  f()];
})('A');

console.log(res);