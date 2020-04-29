const setUpGrid = function () {
    const gameScreen = document.querySelector('.grid');
    const divsOfButtons = gameScreen.children;
    const positions =
        [3, 4, 5, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 3, 4, 5];

    for (let i = 0; i < divsOfButtons.length; i++) {
        let btn = document.getElementById('' + (i + 1));
        btn.textContent = '';
        if (i === 2 || i === 7 || i === 14 || i === 21 || i === 28 || i === 33 || i === 36) {
            btn.style.border = 'black solid 1px';
        } else {
            btn.style.border = 'solid black 1px';
            btn.style.borderRight = 'none';
        }
        if (!(i === 22 || i === 28 || i === 29 || i === 33 || i === 34 || i === 35 || i === 36)) {
            btn.style.borderBottom = 'none';
        }
        if (i!==0){
            btn.style.backgroundImage = "url('assets/figure.svg')";
            btn.style.backgroundSize = "contain";
        }

        if (i < 3) {
            divsOfButtons[i].style.gridRow = '1';
        }
        if (i > 2 && i < 8) {
            divsOfButtons[i].style.gridRow = '2';
        }
        if (i > 7 && i < 15) {
            divsOfButtons[i].style.gridRow = '3';
        }
        if (i > 14 && i < 22) {
            divsOfButtons[i].style.gridRow = '4';
        }
        if (i > 21 && i < 29) {
            divsOfButtons[i].style.gridRow = '5';
        }
        if (i > 28 && i < 34) {
            divsOfButtons[i].style.gridRow = '6';
        }
        if (i > 33 && i < 37) {
            divsOfButtons[i].style.gridRow = '7';
        }
        divsOfButtons[i].style.gridColumn = positions[i].toString();
    }
}
const game = function () {
    let move = []
    let grid =
        [[-1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1]]
    console.log(grid);
    let numberOfPieces = 36;
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const gameScreen = document.querySelector('.grid');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            gameScreen.classList.add('fadeIn');
        });
    };

    for (let i = 0; i < 37; i++) {
        let btn = document.getElementById('' + (i + 1));
        btn.addEventListener('click', function () {
            if (move.length === 0) {
                let x = cords(this.id)[0];
                let y = cords(this.id)[1];
                if (hasPiece(x,y)){
                    move[0] = parseInt(this.id);
                    this.style.backgroundColor = '#808651';
                    console.log(move);
                }
            } else if (move.length === 1) {
                move[1] = parseInt(this.id);
                this.style.backgroundColor = '#808651';
                console.log(move);
            } /*else {
                for (let j of move){
                    console.log(j);
                   let butt = document.getElementById('' + j);
                   butt.style.backgroundColor = '#e3eaa7';
                }
                move = [];
            }*/
            if (move.length === 2) {
                if (legalMove(move)){
                    makeMove(move);
                    move = [];
                }else {
                    //Deselect buttons
                    for (let j of move) {
                        let butt = document.getElementById('' + j);
                        butt.style.backgroundColor = '#e3eaa7';
                    }
                    move = [];
                }
            }
        });
    }

    const hasPiece = (x,y) => {
        return grid[x][y] === 1;
    }

    //Computes position in grid array
    const cords = (id) => {
        const x = parseInt(document.getElementById(id).parentElement.style.gridRow.split(' ')[0]) - 1;
        const y = parseInt(document.getElementById(id).parentElement.style.gridColumn.split(' ')[0]) - 1;
        if (x === 0 || x === 6){
            return [x,y-2];
        }else if (x === 1 || x === 5){
            return [x,y-1];
        }else {
            return [x,y];
        }
    }

    const makeMove = (move) => {
        //Pick a piece
        document.getElementById(move[0].toString()).style.backgroundImage= 'none';
        const posFrom = cords(move[0]);
        grid[posFrom[0]][posFrom[1]]=-1;

        //Place a piece
        document.getElementById(move[1].toString()).style.backgroundImage = "url('assets/figure.svg')";
        document.getElementById(move[1].toString()).style.backgroundSize = 'contain';
        const posTo = cords(move[1]);
        grid[posTo[0]][posTo[1]]=1;

        //Remove a piece that was jumped over
        const jumpedPos = jumpedPiece(move)[1];
        const format = [3,5,7,7,7,5,3];
        let jumpedId = 0;
        for (let i = 0; i < jumpedPos[0];i++){
            jumpedId += format[i];
        }
        jumpedId += jumpedPos[1]+1;
        document.getElementById(jumpedId.toString()).style.backgroundImage = 'none';
        grid[jumpedPos[0]][jumpedPos[1]]=-1;

        //Deselect buttons
        for (let j of move) {
            let butt = document.getElementById('' + j);
            butt.style.backgroundColor = '#e3eaa7';
        }
    }

    const jumpedPiece = (move) => {
        const from = cords(move[0]);
        const to = cords(move[1]);
        if ((from[0] !== to[0]) && (from[0]-to[0] === -2)){
            if (from[0] === 0 || from[0] === 1){
                if (hasPiece(from[0]+1,from[1]+1)){
                    return [true,[from[0]+1,from[1]+1]];
                }
                return [false,[-1,-1]]
            }else if (from[0] === 4){
                if (hasPiece(from[0]+1,from[1]-1)){
                    return [true,[from[0]+1,from[1]-1]];
                }
                return [false,[-1,-1]];
            }else{
                if (hasPiece(from[0]+1,from[1])){
                    return [true,[from[0]+1,from[1]]];
                }
                return [false,[-1,-1]];
            }
        }else if ((from[0] !== to[0]) && (from[0]-to[0] === 2)){
            if (from[0] === 6 || from[0] === 5){
                if (hasPiece(from[0]-1,from[1]+1)){
                    return [true,[from[0]-1,from[1]+1]];
                }
                return [false,[-1,-1]];
            }else if (from[0]===2){
                if (hasPiece(from[0]-1,from[1]-1)){
                    return [true,[from[0]-1,from[1]-1]];
                }
                return [false,[-1,-1]];
            }else{
                if (hasPiece(from[0]-1,from[1])){
                    return [true,[from[0]-1,from[1]]];
                }
                return [false,[-1,-1]];
            }
        } else if (from[0]===to[0]){
            if (from[1]-to[1] === -2){
                if (hasPiece(from[0],from[1]+1)){
                    return [true,[from[0],from[1]+1]];
                }
                return [false,[-1,-1]];
            }else if (from[1]-to[1]===2){
                if (hasPiece(from[0],from[1]-1)){
                    return [true,[from[0],from[1]-1]];
                }
                return [false,[-1,-1]];
            }
        }
        return [false,[-1,-1]];
    }

    const legalMove = (move) => {
        //Check if position where we are moving piece is free
        if (hasPiece(cords(move[1])[0],cords(move[1])[1])){
            return false;
        }
        return jumpedPiece(move)[0];
    };

    startGame();
}
setUpGrid();
game();