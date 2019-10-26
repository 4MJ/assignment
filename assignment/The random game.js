//the game
let number=Number(prompt("Enter a number between 0 and 100"));
if(!isNaN(number)){
	let x=Math.floor(Math.random()*100); 
    function game(number){
		for(i=1; i<=5; i++){
			if(i<5){
				if(number==x){
					Console.log("!Congratulations");
			}else{
				if(number>x){
					if(number>100){
						console.log(`Your number ${number} is biger than 100`);
					}else{
						console.log(`Number ${number} is too big`);
					}
				}else{
					console.log(`Number ${number} is too small`);
				}
				console.log(`You are left with ${5-i} turns`);
				number=Number(prompt("Enter a different number between O and 100"));
			}
		}else if(i=5){
			if(number==x){
				Console.log("!Congratulations");
		}else{
			console.log(`Sorry! You Loose. The number is ${x}`);
		}
	}
}
}game(number);
}
else{
	console.log("While didn't you give me a real number");
}
