// ******** challange 1 & 2*********** 

const Mark_mass = 78;
const Mark_height = 1.69;
const John_mass = 92;
const John_height = 1.95;

const BMI = function(mass, height) {
return mass/height**2}; //** = sqr

const BMIv2=(mass, height) => mass/height**2;  //funkcja w wersji arrow function

		
console.log(`Mark BMI is ${BMI(Mark_mass, Mark_height)}`); // tu jest tylda`
console.log(BMI(John_mass, John_height));
console.log(BMIv2(Mark_mass, Mark_height));
console.log(BMIv2(John_mass, John_height));

// ******** challange 2 *********** 
		
if(BMIv2(Mark_mass,Mark_height)>BMIv2(John_mass,John_height)) 
			console.log("Mark's BMI is higher than John's")
			else console.log("John's BMI is higher than Mark's");


// ********* challange 3 *************************

const DolphinsResults = [196, 108, 89];    //[196, 108, 89];
const KoalsResults = [88, 91, 110];		 // [88, 91, 110];
let output, avg_D, avg_K;

// Metoda z dwoma funkcjami w srodu, zwroc uwagę na przecinki na koncu kazdej funkcji
	const Methods = {						
		 avg(score1, score2, score3) {return (score1+score2+score3)/3},
		 compare(avg_D, avg_K) {return avg_D>avg_K},
		 wins(avg) {return avg>100},
	}

avg_D = Methods.avg(DolphinsResults[0],DolphinsResults[1],DolphinsResults[2])
avg_K = Methods.avg(KoalsResults[0],KoalsResults[1],KoalsResults[2])
console.log(`Avg Dolphins is ${avg_D}`);
console.log(`Avg Koals is ${avg_K}`);	
console.log(`Avg Dolphins is heighter then Koals: ${Methods.compare(avg_D, avg_K)}`);

if (avg_D===avg_K && avg_D>100) {console.log("Draw")} else
	if (Methods.compare(avg_D, avg_K)===true && avg_D>100) {console.log("Dolphins wins")} 
		else if (Methods.compare(avg_D, avg_K)===false && avg_K>100) {console.log("Koals wins")}
				else {console.log("Nobody wins")};


// ************ challange 4 ****************************

const bill = 275;
let tip;

switch (true) {
	case (bill<50) : {tip=0;
						break;};	
	case(bill>=50 && bill<=300): {tip=0.15*bill;
						break;};
	case (bill>300) : {tip=0.20*bill;
						break;};	
}

console.log(`Tip is ${(tip)}`);						
	
