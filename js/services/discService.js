var discService = (function () {
    var dataDiscs = [];

    /**
     * Add Disc to bottom of board
     * @param int x
     * @param int y
     * @param array discs
     * @param int playerDisc
     */
    function addDisc(x,y,discs,playerDisc) {
        if(discs[y][x] !=0) {
            y--;
            addDisc(x,y,discs,playerDisc)
        } else {
            discs[y][x] = playerDisc;
            dataDiscs = discs;
        }
    }

    /**
     * Get the updated Discs 
     */
    function getDiscs() {
        return dataDiscs;
    }

    /**
     * Check winner on different diretions
     * @param int array discs
     */
    function checkWinningDisc(discs) {
        // Check down
        for (r = 0; r < 3; r++) {
            for (c = 0; c < 7; c++) {
                if (chkLine(discs[r][c], discs[r+1][c], discs[r+2][c], discs[r+3][c])) {
                    return discs[r][c];
                }
            }
        }
        // Check right
        for (r = 0; r < 6; r++) {
            for (c = 0; c < 4; c++) {
                if (chkLine(discs[r][c], discs[r][c+1], discs[r][c+2], discs[r][c+3])) {
                    return discs[r][c];
                }
            }
        }
        // Check down-right
        for (r = 0; r < 3; r++) {
            for (c = 0; c < 4; c++) {
                if (chkLine(discs[r][c], discs[r+1][c+1], discs[r+2][c+2], discs[r+3][c+3])) {
                    return discs[r][c];
                }
            }
        }
        // Check down-left
        for (r = 3; r < 6; r++) {
            for (c = 0; c < 4; c++) {
                if (chkLine(discs[r][c], discs[r-1][c+1], discs[r-2][c+2], discs[r-3][c+3])) {
                    return discs[r][c];
                }
            }
        }
        return 0;
    }

    /**
     * Check first cell non-zero and all cells match
     * @param int a
     * @param int b
     * @param int c
     * @param int d
     */
    function chkLine(a,b,c,d) {
        return ((a != 0) && (a ==b) && (a == c) && (a == d));
    }

    return {
        addDisc: addDisc,
        getDiscs: getDiscs,
        checkWinningDisc: checkWinningDisc
    };
})();
