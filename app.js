const game = function () {
    let numberOfPieces = 36;
    const startGame = function () {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const gameScreen = document.querySelector('.grid');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            gameScreen.classList.add('fadeIn');
            var buttons = gameScreen.children;
            var positions =
                [3,4,5,2,3,4,5,6,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,2,3,4,5,6,3,4,5]
            for (i=0; i<buttons.length;i++){
                if (i<3) {
                    buttons[i].style.gridRow = '1';
                }
                if (i>2 && i<8){
                    buttons[i].style.gridRow = '2';
                }
                if (i>7 && i<15){
                    buttons[i].style.gridRow = '3';
                }
                if (i>14 && i<22){
                    buttons[i].style.gridRow = '4';
                }
                if (i>21 && i<29){
                    buttons[i].style.gridRow = '5';
                }
                if (i>28 && i<34){
                    buttons[i].style.gridRow = '6';
                }
                if (i>33 && i<37){
                    buttons[i].style.gridRow = '7';
                }
                buttons[i].style.gridColumn = positions[i].toString();
            }
        });
    };
    startGame();
}

game();