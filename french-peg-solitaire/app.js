const setUpPage = function () {
    const widthScale = () => {
        document.querySelector('.intro h1').style.fontSize = '10vw';
        document.querySelector('.intro button').style.width = '25vw';
        document.querySelector('.intro button').style.height = '15vw';
        document.querySelector('.intro button').style.fontSize = '4vw';
        document.querySelector('.grid').style.height = '91vw'
        document.querySelector('.grid').style.width = '91vw'
        let buttons = document.querySelectorAll('.grid button');
        for (let btn of buttons) {
            btn.style.height = '13vw';
            btn.style.width = '13vw';
        }
        document.querySelector('.win').style.fontSize = '7vw';
        document.querySelector('.win').style.width = '90vw';
        document.querySelector('.win').style.height = '50vw';
        buttons = document.querySelectorAll('.win button');
        for (let btn of buttons) {
            btn.style.width = '23vw';
            btn.style.height = '10vw';
            btn.style.fontSize = '4vw';
        }

        document.querySelector('.lose').style.fontSize = '7vw';
        document.querySelector('.lose').style.width = '90vw';
        document.querySelector('.lose').style.height = '50vw';
        buttons = document.querySelectorAll('.lose button');
        for (let btn of buttons) {
            btn.style.width = '23vw';
            btn.style.height = '10vw';
            btn.style.fontSize = '4vw';
        }

    }

    const heightScale = () => {
        document.querySelector('.intro h1').style.fontSize = '10vh';
        document.querySelector('.intro button').style.width = '20vh';
        document.querySelector('.intro button').style.height = '10vh';
        document.querySelector('.intro button').style.fontSize = '2.5vh';
        document.querySelector('.grid').style.height = '91vh'
        document.querySelector('.grid').style.width = '91vh'
        let buttons = document.querySelectorAll('.grid button');
        for (let btn of buttons) {
            btn.style.height = '13vh';
            btn.style.width = '13vh';
        }
        document.querySelector('.win').style.fontSize = '7vh';
        document.querySelector('.win').style.width = '90vh';
        document.querySelector('.win').style.height = '50vh';
        buttons = document.querySelectorAll('.win button');
        for (let btn of buttons) {
            btn.style.width = '23vh';
            btn.style.height = '10vh';
            btn.style.fontSize = '4vh';
        }

        document.querySelector('.lose').style.fontSize = '7vh';
        document.querySelector('.lose').style.width = '90vh';
        document.querySelector('.lose').style.height = '50vh';
        buttons = document.querySelectorAll('.lose button');
        for (let btn of buttons) {
            btn.style.width = '23vh';
            btn.style.height = '10vh';
            btn.style.fontSize = '4vh';
        }
    }
    if (window.innerWidth < window.innerHeight) {
        widthScale();
    } else {
        heightScale();
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth < window.innerHeight) {
            widthScale();
        } else {
            heightScale();
        }
    })
}

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
        if (i !== 0) {
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
            [1, 1, 1]];

    const winningScore = 35;
    let score = 0;
    const scoreDisplay = document.querySelector('.score');

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const gameScreen = document.querySelector('.grid');
        const scoreScreen = document.querySelector('.score');
        const restart = document.querySelector('.restart');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            gameScreen.classList.add('fadeIn');
            scoreScreen.classList.add('fadeIn');
            restart.classList.add('fadeIn');

        });

    };

    const updateScore = () => {
        scoreDisplay.textContent = 'Score:' + score;
    }

    const restart = () => {
        const restartBtn = document.querySelector('.restart button');
        restartBtn.addEventListener('click', () => {
            move = [];
            grid =
                [[-1, 1, 1],
                    [1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1],
                    [1, 1, 1]];
            score = 0;
            updateScore();
            for (let i = 0; i < 37; i++) {
                let btn = document.getElementById('' + (i + 1));
                if (i !== 0) {
                    btn.style.backgroundImage = "url('assets/figure.svg')";
                    btn.style.backgroundSize = "contain";
                } else {
                    btn.style.backgroundImage = 'none';
                }
            }

        })
    }

    const checkWin = () => {
        return score === winningScore;

    }

    const haveMoves = () => {
        const buttons = document.querySelectorAll('.grid button');
        const occupied = [];
        for (let btn of buttons) {
            if (btn.style.backgroundImage !== 'none') {
                occupied.push(btn);
            }
        }
        for (let btn of occupied) {
            let row = parseInt(btn.parentElement.style.gridRow.split(' ')[0]) - 1;
            if (row === 0) {
                for (let i = 1; i < 4; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
                for (let i = 9; i < 16; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
            }
            if (row === 1) {
                for (let i = 4; i < 9; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
                for (let i = 16; i < 23; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
            }
            if (row === 2) {
                for (let i = 9; i < 16; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
                for (let i = 1; i < 4; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
                for (let i = 23; i < 30; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
            }
            if (row === 3) {
                for (let i = 16; i < 23; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
                for (let i = 4; i < 9; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
                for (let i = 30; i < 35; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
            }
            if (row === 4) {
                for (let i = 23; i < 30; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
                for (let i = 9; i < 16; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
                for (let i = 35; i < 38; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
            }
            if (row === 5) {
                for (let i = 30; i < 35; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
                for (let i = 16; i < 23; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
            }
            if (row === 6) {
                for (let i = 35; i < 38; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
                for (let i = 23; i < 30; i++) {
                    if (legalMove([btn.id, i])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    const end = () => {
        const introScreen = document.querySelector('.intro');
        const gameScreen = document.querySelector('.grid');
        const scoreScreen = document.querySelector('.score');
        const restartBtn = document.querySelector('.restart');
        const winScreen = document.querySelector('.win');
        const playAgain = document.getElementById('playAgain');
        const exitW = document.getElementById('exitW');
        const loseScreen = document.querySelector('.lose');
        const tryAgain = document.getElementById("tryAgain");
        const exitL = document.getElementById('exitL');

        const reset = () => {
            move = [];
            grid =
                [[-1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1]];
            score = 0;
            updateScore();
            for (let i = 0; i < 37; i++) {
                let btn = document.getElementById('' + (i + 1));
                if (i !== 0) {
                    btn.style.backgroundImage = "url('assets/figure.svg')";
                    btn.style.backgroundSize = "contain";
                } else {
                    btn.style.backgroundImage = 'none';
                }
            }

        }

        gameScreen.classList.add('end');
        scoreScreen.classList.add('end');
        restartBtn.classList.add('end');

        if (checkWin()) {
            playAgain.addEventListener('click', () => {
                reset();
                winScreen.classList.remove('fadeIn');

                gameScreen.classList.remove('end');
                scoreScreen.classList.remove('end');
                restartBtn.classList.remove('end');
            });
            exitW.addEventListener('click', () => {
                reset();
                winScreen.classList.remove('fadeIn');
                gameScreen.classList.remove('fadeIn');
                scoreScreen.classList.remove('fadeIn');
                restartBtn.classList.remove('fadeIn');
                introScreen.classList.remove('fadeOut');

                gameScreen.classList.remove('end');
                scoreScreen.classList.remove('end');
                restartBtn.classList.remove('end');
            });
            winScreen.classList.add('fadeIn');
        } else {
            tryAgain.addEventListener("click", () => {
                reset();
                loseScreen.classList.remove('fadeIn');

                gameScreen.classList.remove('end');
                scoreScreen.classList.remove('end');
                restartBtn.classList.remove('end');
            });
            exitL.addEventListener("click", () => {
                reset();
                loseScreen.classList.remove('fadeIn');
                gameScreen.classList.remove('fadeIn');
                scoreScreen.classList.remove('fadeIn');
                restartBtn.classList.remove('fadeIn');
                introScreen.classList.remove('fadeOut');

                gameScreen.classList.remove('end');
                scoreScreen.classList.remove('end');
                restartBtn.classList.remove('end');
            });
            loseScreen.classList.add('fadeIn');
        }


    }

    for (let i = 0; i < 37; i++) {
        let btn = document.getElementById('' + (i + 1));
        btn.addEventListener('click',function () {
            if (move.length === 0) {
                let x = cords(this.id)[0];
                let y = cords(this.id)[1];
                if (hasPiece(x, y)) {
                    move[0] = parseInt(this.id);
                    this.style.backgroundColor = '#808651';
                }
            } else if (move.length === 1) {
                move[1] = parseInt(this.id);
                this.style.backgroundColor = '#808651';
            }
            if (move.length === 2) {
                if (legalMove(move)) {
                    makeMove(move);
                    move = [];
                    if (!haveMoves()) {
                        end();
                    }
                } else {
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

    const hasPiece = (x, y) => {
        return grid[x][y] === 1;
    }

    //Computes position in grid array
    const cords = (id) => {
        const x = parseInt(document.getElementById(id).parentElement.style.gridRow.split(' ')[0]) - 1;
        const y = parseInt(document.getElementById(id).parentElement.style.gridColumn.split(' ')[0]) - 1;
        if (x === 0 || x === 6) {
            return [x, y - 2];
        } else if (x === 1 || x === 5) {
            return [x, y - 1];
        } else {
            return [x, y];
        }
    }

    const makeMove = (move) => {
        //Pick a piece
        document.getElementById(move[0].toString()).style.backgroundImage = 'none';
        const posFrom = cords(move[0]);
        grid[posFrom[0]][posFrom[1]] = -1;

        //Place a piece
        document.getElementById(move[1].toString()).style.backgroundImage = "url('assets/figure.svg')";
        document.getElementById(move[1].toString()).style.backgroundSize = 'contain';
        const posTo = cords(move[1]);
        grid[posTo[0]][posTo[1]] = 1;

        //Remove a piece that was jumped over
        const jumpedPos = jumpedPiece(move)[1];
        const format = [3, 5, 7, 7, 7, 5, 3];
        let jumpedId = 0;
        for (let i = 0; i < jumpedPos[0]; i++) {
            jumpedId += format[i];
        }
        jumpedId += jumpedPos[1] + 1;
        document.getElementById(jumpedId.toString()).style.backgroundImage = 'none';
        grid[jumpedPos[0]][jumpedPos[1]] = -1;

        //Deselect buttons
        for (let j of move) {
            let butt = document.getElementById('' + j);
            butt.style.backgroundColor = '#e3eaa7';
        }
        score++;
        updateScore();
    }

    const jumpedPiece = (move) => {
        const from = cords(move[0]);
        const to = cords(move[1]);
        const fromCol = parseInt(document.getElementById(move[0]).parentElement.style.gridColumn.split(' ')[0]);
        const toCol = parseInt(document.getElementById(move[1]).parentElement.style.gridColumn.split(' ')[0]);

        if ((from[0] !== to[0]) && (from[0] - to[0] === -2)) {
            if (fromCol !== toCol) {
                return [false, [-1, -1]];
            }
            if (from[0] === 0 || from[0] === 1) {
                if (hasPiece(from[0] + 1, from[1] + 1)) {
                    return [true, [from[0] + 1, from[1] + 1]];
                }
                return [false, [-1, -1]]
            } else if (from[0] === 4) {
                if (hasPiece(from[0] + 1, from[1] - 1)) {
                    return [true, [from[0] + 1, from[1] - 1]];
                }
                return [false, [-1, -1]];
            } else {
                if (hasPiece(from[0] + 1, from[1])) {
                    return [true, [from[0] + 1, from[1]]];
                }
                return [false, [-1, -1]];
            }
        } else if ((from[0] !== to[0]) && (from[0] - to[0] === 2)) {
            if (fromCol !== toCol) {
                return [false, [-1, -1]];
            }
            if (from[0] === 6 || from[0] === 5) {
                if (hasPiece(from[0] - 1, from[1] + 1)) {
                    return [true, [from[0] - 1, from[1] + 1]];
                }
                return [false, [-1, -1]];
            } else if (from[0] === 2) {
                if (hasPiece(from[0] - 1, from[1] - 1)) {
                    return [true, [from[0] - 1, from[1] - 1]];
                }
                return [false, [-1, -1]];
            } else {
                if (hasPiece(from[0] - 1, from[1])) {
                    return [true, [from[0] - 1, from[1]]];
                }
                return [false, [-1, -1]];
            }
        } else if (from[0] === to[0]) {
            if (from[1] - to[1] === -2) {
                if (hasPiece(from[0], from[1] + 1)) {
                    return [true, [from[0], from[1] + 1]];
                }
                return [false, [-1, -1]];
            } else if (from[1] - to[1] === 2) {
                if (hasPiece(from[0], from[1] - 1)) {
                    return [true, [from[0], from[1] - 1]];
                }
                return [false, [-1, -1]];
            }
        }
        return [false, [-1, -1]];
    }

    const legalMove = (move) => {
        //Check if position where we are moving piece is free
        if (hasPiece(cords(move[1])[0], cords(move[1])[1])) {
            return false;
        }
        //Check if we jump over a piece
        return jumpedPiece(move)[0];
    };

    startGame();
    restart();
}
setUpPage();
setUpGrid();
game();