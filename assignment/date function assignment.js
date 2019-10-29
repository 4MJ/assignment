function date(day,month,year,hour,minute,second){
	let arrmon=["January","February","March","April","May","June","July","August","September","October","November","December"];
    if(hour<=12){
		console.log(`Today is the ${day} of ${arrmon[month-1]} in the year ${year} and the time is ${minute}minutes and ${second}seconds pass ${hour}am.`);
	}else{
		console.log(`Today is the ${day} of ${arrmon[month-1]} in the year ${year} and the time is ${minute}minutes and ${second}seconds pass ${hour}pm.`);
	}
}
let x = new date(28,10,2019,13,15,30);