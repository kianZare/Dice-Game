let firstNum = 0;
let rollTimes1 = 0;
let rollTimes2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let btn = new Audio("./dice.mp3");
let win = new Audio("./just-relax.mp3")


const btnRoll1 = document.getElementById('btnRoll1');
const btnRoll2 = document.getElementById('btnRoll2');
const btnReload = document.getElementById('btnReload');

roll1 = () => {
    //Generate rnd num between 1 - 6
    const rndNum = Math.floor(Math.random() * 6) + 1;
    const firstDice = 'images/Dice' + rndNum + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', firstDice);
    document.querySelectorAll('h3')[0].innerHTML = rndNum;
    
    //Add current score to Total Score
    totalScore1 += rndNum;
    rollTimes1 += 1;

    //Display Total Score
    document.querySelectorAll('h3')[0].innerHTML = `Player 1 : ${totalScore1}`;
    document.querySelectorAll('button')[0].innerHTML = `Player 1 : ${rollTimes1}`;

    if (totalScore1 > 20 & totalScore1 > totalScore2 & rollTimes1 == rollTimes2) {
        document.querySelector('h1').innerHTML = "Player 1 Win!";

    }else if (totalScore2 > 20 & totalScore2 > totalScore1 & rollTimes1 == rollTimes2) {
        document.querySelector('h1').innerHTML = "Player 2 Win!";

    };
}

roll2 = () => {
    //Generate rnd num between 1 - 6
    const rndNum = Math.floor(Math.random() * 6) + 1;
    const firstDice = 'images/Dice' + rndNum + '.png';

    document.querySelectorAll('img')[0].setAttribute('src', firstDice);
    document.querySelectorAll('h3')[1].innerHTML = rndNum;

    //Add current score to Total Score
    totalScore2 += rndNum;
    rollTimes2 += 1;


    //Display Total Score
    document.querySelectorAll('h3')[1].innerHTML = `Player 2 : ${totalScore2}`;
    document.querySelectorAll('button')[2].innerHTML = `Player 2 : ${rollTimes2}`;

    if (totalScore2 > 20 & totalScore2 > totalScore1 & rollTimes1 == rollTimes2) {
        document.querySelector('h1').innerHTML = "Player 2 Win!";
    }else if (totalScore1 > 20 & totalScore1 > totalScore2 & rollTimes1 == rollTimes2) {
        document.querySelector('h1').innerHTML = "Player 1 Win!";
    };

    if ("player 1 win!" || "Player 2 Win!") {
        document.addEventListener("player 1 win!" || "Player 2 Win!") = win.play();
    };
}
// ......................................................................



// ..............................................................................


reload = () => {
    location.reload();
}

btnRoll1.addEventListener('click', () => {
    roll1();
})
btnRoll2.addEventListener('click', () => {
    roll2();
})

btnReload.addEventListener('click', () => {
    reload();
})


btnRoll1.addEventListener('click',() => {
    if ('click'){
        btn.play();
    }
});
btnRoll2.addEventListener('click',() => {
    if ('click'){
        btn.play();
    }
});

// ......................................................

// if ('Player 1 Win!' || 'Player 2 Win!',() => {
//     if ('Player 1 Win!' || 'Player 2 Win!'){
//         win.play();
//     }
// });
