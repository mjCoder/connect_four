
QUnit.test('discService', function (assert) {
	var playerDisc = 1,
		x = 6,
		y = 5,
		discs =[[0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 1],
			    [0, 0, 0, 0, 0, 1, 2],
			    [0, 0, 0, 0, 1, 2, 1],
			    [0, 0, 0, 1, 2, 1, 2]];
	discService.addDisc(x,y,discs,playerDisc);
	assert.ok(discService.getDiscs());
	assert.equal(discService.checkWinningDisc(discs),1);
    
});

QUnit.test('playerService', function (assert) {
	var winName = 'George',
		winPic = 4,
		losName = 'Adam',
		losPic = 3,
		done = assert.async(),
		discs =[[0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 0],
			    [0, 0, 0, 0, 0, 0, 1],
			    [0, 0, 0, 0, 0, 1, 2],
			    [0, 0, 0, 0, 1, 2, 1],
			    [0, 0, 0, 1, 2, 1, 2]];
	gameAction.checkWinner(discs,'George','Adam');

    assert.ok(playerService.generatePlayerPic(), 'Will generate random numbers from 1-5');

    assert.equal(playerService.playerTurn(1), 2, 'If 1 is entered. Then 2 will be the output or otherwise');

    // Testing Ajax calls ---------
    playerService.addPlayersToScoreBoard(winName,winPic,losName,losPic);
    window.setTimeout(function() {
      assert.ok(playerService.getPlayersScoreBoard());
      done();
   	}, 2000); 
   
});
