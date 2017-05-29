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
	var shuffled = Shuffle(values);
	$('button').each(function (index, element) {
      // console.log(element, index);
	  $(element).attr("data-crysValue", +shuffled[index]);   
	});

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
	$("#loss").html(lose);
	gameReset();
	startGame();
}

}); //end of "on click" 

}); //ending of document.ready()