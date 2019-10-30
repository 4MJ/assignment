\\Ensuring a number is a cameroon phone number by using regular expression

let telnumber=/^(237)|6(7|9|5|8|6)\d/;
let num=677609871;
if(num.toString().length==9||12)
	console.log(telnumber.test(num));