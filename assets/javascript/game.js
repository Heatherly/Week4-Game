$(document).ready(function() { 

//Variables//
var crys1, crys2, crys3, crys4;
var yourScore = 0;
var win = 0;
var lose = 0;
var matchNumber = "";
var nums = [];

function Shuffle(arr) {
	for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	return arr;
};

function startGame() {
	
	$("#yourTotalScore").html("_");
	$("#wins").html(win);
	$("#loss").html(lose);
	
	matchNumber = Math.floor(Math.random() * 120) + 19;
	$("#randomNumber").html(matchNumber);
 
//Assign values to crystal buttons//   
	var values = new Array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12); 

	Shuffle(values);
	console.log(values)
	$("#crys1").append($(".crystal1").attr("data-crysValue", +values[0]));
	$("#crys2").append($(".crystal2").attr("data-crysValue", +values[1]));
	$("#crys3").append($(".crystal3").attr("data-crysValue", +values[2]));
	$("#crys4").append($(".crystal4").attr("data-crysValue", +values[3]));

}; //END OF STARTGAME() FUNCTION

function gameReset() {
	nums = [];
	yourScore = "";
}

startGame();

$(document).on("click", "button", function() {
	yourScore = 0;
	var crystalBtn = $(this).attr("data-crysValue");
	// console.log(crystalBtn);
	nums.push(parseInt(crystalBtn));
		
for(var i=0; i < nums.length; i++){
    yourScore += nums[i];
    // console.log(nums);
	$("#yourTotalScore").html(yourScore);
}

// Check for win or lose
if (yourScore===matchNumber) {
	// console.log("You win!");
	win++;
	$("#wins").html(win);
	gameReset();
	startGame();
}

else if (yourScore > matchNumber) {
	// console.log ("You lose.")
	lose++;
	gameReset();
	startGame();
	$("#loss").html(lose);
}

}); //end of "on click" 

}); //ending of document.ready()