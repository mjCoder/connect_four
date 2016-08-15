$(document).ready(function() {
	var winner = 0,
		currPlayer = 1,
		player1 = '',
		player2 = '',
	    discs =[[0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0]];

	$('#addPlayers').modal({backdrop: 'static', keyboard: false});

    gameAction.displayDiscs(discs);
    winner = gameAction.checkWinner(discs);

    $("#connect-four .alert").hide();

    $("#connect-four table td").on( "click", function(e) {
    	var x = $(this).index(),
    	    y = $(this).parent().index();
    		
    		discs = gameAction.dropDisc(x,discs,currPlayer);
    		gameAction.displayDiscs(discs);
		    gameAction.checkWinner(discs,player1,player2);

		    currPlayer = gameAction.getNextTurn();
    }); 

    $('#submitPlayers').on( "click", function(e) {
    	var playerForm = $('#playersForm').serialize();

		player1 = $('#player1').val();
		player2 = $('#player2').val();

		valPlayer1 = player1.replace(/\s+/g, '');
		valPlayer2 = player2.replace(/\s+/g, '');

		if (valPlayer1!='' && valPlayer2!='') {
    		$('.players .player-1 .name').text(player1);
    		$('.players .player-2 .name').text(player2);
    		$('#addPlayers').modal('hide');
            gameAction.startGame();
    	} else {
    		$('#addPlayers .alert-danger').removeClass('hidden');
    	}
    	
    });
    $('#refresh').on( "click", function(e) {
        location.reload();
    });
    $('#scoreBoard').on( "click", function(e) {
        
    });
});