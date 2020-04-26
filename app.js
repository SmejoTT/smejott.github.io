const setUpGrid = function () {
    const gameScreen = document.querySelector('.grid');
    const divsOfButtons = gameScreen.children;
    const positions =
        [3,4,5,2,3,4,5,6,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,2,3,4,5,6,3,4,5];

    for (i=0; i<divsOfButtons.length;i++){
        let btn = document.getElementById(''+(i+1));
        if (i===2 || i===7 || i===14 || i===21 || i===28 || i===33 || i===36){
            btn.style.border ='black solid 1px';
        } else {
            btn.style.border ='solid black 1px';
            btn.style.borderRight  = 'none';
        }
        if (!(i===22 || i===28 ||i===29 || i===33 || i===34 || i===35 || i===36)){
            btn.style.borderBottom = 'none';
        }

        if (i<3) {
            divsOfButtons[i].style.gridRow = '1';
        }
        if (i>2 && i<8){
            divsOfButtons[i].style.gridRow = '2';
        }
        if (i>7 && i<15){
            divsOfButtons[i].style.gridRow = '3';
        }
        if (i>14 && i<22){
            divsOfButtons[i].style.gridRow = '4';
        }
        if (i>21 && i<29){
            divsOfButtons[i].style.gridRow = '5';
        }
        if (i>28 && i<34){
            divsOfButtons[i].style.gridRow = '6';
        }
        if (i>33 && i<37){
            divsOfButtons[i].style.gridRow = '7';
        }
        divsOfButtons[i].style.gridColumn = positions[i].toString();
    }
}
const game = function () {
    let numberOfPieces = 36;
    const startGame = function () {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const gameScreen = document.querySelector('.grid');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            gameScreen.classList.add('fadeIn');
        });
    };
    startGame();
}
setUpGrid();
game();