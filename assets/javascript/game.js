$(document).ready(function() { 

//Variables//
var crys1, crys2, crys3, crys4;
var yourScore, win, lose;
var matchNumber = 0;

$(function startGame() {
	yourScore = 0;
	$("#yourTotalScore").html("_");

	win = 0;
	$("#wins").html(win);

	lose = 0;
	$("#loss").html(lose);
	
	matchNumber = Math.floor(Math.random() * 120) + 19;
	$("#randomNumber").html(matchNumber);
 
//Assign values to crystal buttons//   
	var values = new Array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12); 

//Pick Random Value for Crystal 1
	for (var i = 0; i < values.length; i++) {	
		randomValues = (Math.floor(Math.random() * values.length), 1)[0];
		var ri = Math.floor(Math.random() * values.length); // Random Index position in the array
		var rs = values.splice(ri, 1); // Splice out a random element using the ri var
			
		var crystalValue1 = $("#crys1").attr("data-crysValue", +rs);
		$(".crystal1").append(crystalValue1);
	}

//Pick Random Value for Crystal 2
	for (var i = 0; i < values.length; i++) {
		randomValues = (Math.floor(Math.random() * values.length), 1)[0];
		var ri = Math.floor(Math.random() * values.length); // Random Index position in the array
		var rs = values.splice(ri, 1); // Splice out a random element using the ri var
		var crystalValue2 = $("#crys2").attr("data-crysValue", +rs);
		$(".crystal2").append(crystalValue2);
	}
	
//Pick Random Value for Crystal 3
	for (var i = 0; i < values.length; i++) {
		randomValues = (Math.floor(Math.random() * values.length), 1)[0];
		var ri = Math.floor(Math.random() * values.length); // Random Index position in the array
		var rs = values.splice(ri, 1); // Splice out a random element using the ri var
		var crystalValue3 = $("#crys3").attr("data-crysValue",  +rs);
		$(".crystal3").append(crystalValue3);
	}

//Pick Random Value for Crystal 4
	for (var i = 0; i < values.length; i++) {
		randomValues = (Math.floor(Math.random() * values.length), 1)[0];
		var ri = Math.floor(Math.random() * values.length); // Random Index position in the array
		var rs = values.splice(ri, 1); // Splice out a random element using the ri var
		var crystalValue4 = $("#crys4").attr("data-crysValue",  +rs);
		$(".crystal4").append(crystalValue4);
	}

}); //END OF STARTGAME() FUNCTION
















}); //ending of document.ready()