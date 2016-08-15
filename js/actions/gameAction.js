var gameAction = (function () {
	var currentTurn = 1;

	/**
	 * Initialize Game Match
	 */
	function startGame() {
		var player1Pic = playerService.generatePlayerPic(),
			player2Pic = playerService.generatePlayerPic();

			$('.player-1 img').attr('src',player1Pic);
			$('.player-2 img').attr('src',player2Pic);
	}

	/**
	 * Drop disc to the bottom of selected column
	 * @param int x
	 * @param array discs
	 * @param int currPlayer
	 */
    function dropDisc(x,discs,currPlayer) {
    	y = 5; //bottom
    	discService.addDisc(x,y,discs,currPlayer);
    	currentTurn = playerService.playerTurn(currPlayer);
    	return discService.getDiscs();
    }

    /**
     * Change Player turn
     */
    function getNextTurn() {
    	return currentTurn;
    }

    /** 
     * Display all added discs
     * @param array discs
     */
    function displayDiscs(discs) {
        for (y = 0; y < 6; y++) {
        	for (x = 0; x < 7; x++) {
        		var board = $("table tr:eq("+ y +")").find('td').eq(x);
        		if (discs[y][x] == 1) {
	                board.children('button').addClass('red');
	            } else if (discs[y][x] == 2) {
	            	board.children('button').addClass('yellow');
	            }
	        }
        }
    }

    /** 
     * check all possible combinations
     * @param array bd
     */
    function checkWinner(discs,player1,player2) {
    	var winner = $('#playerName'),
    		alertBox = $('#connect-four .alert'),
			winDisc = discService.checkWinningDisc(discs)
            end = false;

		if (winDisc == 1) {
			winner.text(player1);
			alertBox.show(200);
            wName = player1;
            wPic = 2;
            lName = player2;
            lPic = 4;
            playerService.addPlayersToScoreBoard(wName,wPic,lName,lPic);
            end = true;
		} else if (winDisc == 2) {
			winner.text(player2);
			alertBox.show(200);
            wName = player2;
            wPic = 4;
            lName = player1;
            lPic = 3;
            playerService.addPlayersToScoreBoard(wName,wPic,lName,lPic);
            end = true;
		}
        if (end) {
            $("#connect-four table td").off();
            setTimeout(function(){
              var htmlResult = playerService.getPlayersScoreBoard();
              $("#scoreBoard table tbody").append(htmlResult);
            }, 1000);
            
        }
    }

    return {
    	startGame: startGame,
    	displayDiscs: displayDiscs,
        checkWinner: checkWinner,
        dropDisc: dropDisc,
        getNextTurn: getNextTurn
    };
})();

