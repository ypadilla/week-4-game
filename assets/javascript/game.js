	$(document).ready(function() {
	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	

newGame();

function newGame() {

		counter = 0;
		$('#scoredTotal').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberGuesser = randomIntFromInterval(19,120);

		$('.numberValue').text(numberGuesser);
		

$('#blueG').on('click', function(){
  	

		    counter = counter + Math.ceil(Math.random()*12);

		   	
		    $('#scoredTotal').text(counter);

		    if (counter == numberGuesser){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      newGame();
		        
		    } else if ( counter > numberGuesser){
		        $('#status').text('You lost!');
		        losses ++;
		        $('#loss').text(losses);
		        newGame();
		    	    }
		});

$('#yellowG').on('click', function(){
  	

		    counter = counter + Math.ceil(Math.random()*12);
		   
		    $('#scoredTotal').text(counter);

		    if (counter == numberGuesser){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      newGame();
		        
		    } else if ( counter > numberGuesser){
		        $('#status').text('You lost!');
		        losses ++;
		        $('#loss').text(losses);
		        newGame();
		    	    }
		});


$('#greenG').on('click', function(){
  	

		    counter = counter + Math.ceil(Math.random()*12);
		   
		    $('#scoredTotal').text(counter);

		    if (counter == numberGuesser){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      newGame();
		        
		    } else if ( counter > numberGuesser){
		        $('#status').text('You lost!');
		        losses ++;
		        $('#loss').text(losses);
		        newGame();
		    	    }
		});
	
		$('#redG').on('click', function(){
  	

		    counter = counter + Math.ceil(Math.random()*12);
		   
		    $('#scoredTotal').text(counter);

		    if (counter == numberGuesser){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      newGame();
		        
		    } else if ( counter > numberGuesser){
		        $('#status').text('You lost!');
		        losses ++;
		        $('#loss').text(losses);
		        newGame();
		    	    }
		});
	}

});