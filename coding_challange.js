// ******** challange 1 & 2*********** 

const Mark_mass = 78;
const Mark_height = 1.69;
const John_mass = 92;
const John_height = 1.95;

const BMI = function(mass, height) {
return mass/height**2}; //** = sqr

const BMIv2=(mass, height) => mass/height**2;  //funkcja w wersji arrow function

console.log("*** CHALLANGE 1 ***");		
console.log(`Mark BMI is ${BMI(Mark_mass, Mark_height)}`); // tu jest tylda`
console.log(BMI(John_mass, John_height));
console.log(BMIv2(Mark_mass, Mark_height));
console.log(BMIv2(John_mass, John_height));

// ******** challange 2 *********** 
console.log("*** CHALLANGE 2 ***");		
		
if(BMIv2(Mark_mass,Mark_height)>BMIv2(John_mass,John_height)) 
			console.log("Mark's BMI is higher than John's")
			else console.log("John's BMI is higher than Mark's");


// ********* challange 3 *************************
console.log("*** CHALLANGE 3 ***");		

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
console.log("*** CHALLANGE 4 ***");		

const bill = 275;
let tip;

switch (true) {
	case (bill<50) : {tip=0;
						break;};	
	case(bill>=50 && bill<=300): {tip=0.15*bill;
						break;};
	case (bill>300) : {tip=0.20*bill;
						break;};	
	default: break;
}

console.log(`Tip is ${(tip)}`);						
	
// ************ ARRAYS METHODS ****************************
console.log("*** ARRAY METHODS ***");	

const friends = ['Kamil', 'Kuba', 'Wojo'];
friends.push('Tomek');  //push dodoawanie nastepnego elementu do tablicy
console.log(friends);
const lenght = friends.push('Romek'); //zwraca ile jest elementow i dodaje Romka na koncu
friends.unshift('Bolek'); // dodaje na poczatku
console.log(friends);
console.log(lenght);
friends.pop(); // kasuje ostatni
console.log(friends);
console.log("Skasowalem: "+friends.pop()); // podaje co skasowal
friends.shift(); // kasuje pierwszy
console.log(friends);
console.log(friends.indexOf('Kamil'));  //pokazuje na jakiej jest pozycji
console.log(friends.includes('Kuba'));  // true or false jesli element jest w tablicy



// ******** Part 2 Challange 2 ******************************
console.log("*** PART 2 CHALLANGE 2 ***");		

const bills = [275, 60, 15, 600];
let tips = [0,0,0,0];
let Tip;

function CalcTip(bill) {
switch (true) {
	case(bill>=50 && bill<=300): {Tip=0.15*bill;
						break;};
	case (bill>300) : {Tip=0.20*bill;
						break;};	
	default: break;
}
return Tip;
}

// wersja skrócona CalcTip
const CalcTipv2 = function(bill) {						    // jesli bill >50 i <300 to bill*0.15 jesli nie to bill*0.2
return bill>=50 && bill<=300 ? bill*0.15 : bill *0.2;}


for (i=0; i<4; i++)
{ tips[i] = CalcTipv2(bills[i]);
}
console.log(tips);


