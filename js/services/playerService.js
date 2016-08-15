var playerService = (function () {
    var isAdded = 0,
        htmlScores = '';
    function addPlayersToScoreBoard(winName,winPic,losName,losPic) {
        $.ajax({
          method: "POST",
          url: "api/players/add",
          data: {winnerName: winName, winnerPic: winPic, loserName: losName, loserPic: losPic}
        })
        .done(function(count) {
          isAdded = count;
          setPlayersScoreBoard();
        });
    }
    function addedSuccessfully() {
        if (isAdded > 0) {
            return true;
        } else {
            return false;
        }
    }

    function setPlayersScoreBoard() {
        $.getJSON( "api/players/scores", function( data ) {
          var htmlStr = '';
          $.each( data, function( key, val ) {
            htmlStr += '<tr><td>'+val.name+'</td><td>'+val.won+'</td><td>'+val.lost+'</td></tr>';
          });
          htmlScores = htmlStr;
        });
    }

    function getPlayersScoreBoard(){
        return htmlScores;
    }

    function generatePlayerPic() {
        var imgSrc = 'img/default.png',
            imgId = Math.floor((Math.random() * 7) + 1);

            imgSrc = getPlayerPicById(imgId);

        return imgSrc;
    }

    function getPlayerPicById(imgId) {
        var imgUrl = 'img/', 
            imgName = '';

        switch(imgId) {
            case 1: imgName = 'clarence.png'; break;
            case 2: imgName = 'gran.png'; break;
            case 3: imgName = 'gru.png'; break;
            case 4: imgName = 'hominion.png'; break;
            case 5: imgName = 'patrick.png'; break;
            case 6: imgName = 'po.png'; break;
            case 7: imgName = 'trump.png'; break;
        }

        return imgUrl + imgName;
    }

    function playerTurn(currPlayer) {
        if(1==currPlayer) {
            currPlayer = 2;
        } else {
            currPlayer = 1;
        }
        return currPlayer;
    }

    return {
        addPlayersToScoreBoard: addPlayersToScoreBoard,
        addedSuccessfully: addedSuccessfully,
        getPlayersScoreBoard: getPlayersScoreBoard,
        generatePlayerPic: generatePlayerPic,
        playerTurn: playerTurn
    };
})();
