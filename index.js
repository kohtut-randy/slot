const gameContainer = document.querySelector(".game__container");
const menuBoard = document.querySelector(".menuBoard");
const menuPlayBtn = document.querySelector(".menuPlayBtn");
const menuQuitBtn = document.querySelector(".menuQuitBtn");
const soundBtn = document.querySelector(".soundBtn");
const victoryBtn = document.querySelector(".victoryBtn");
const settingBtn = document.querySelector(".settingBtn");
const loadingBox = document.querySelector(".loadingBox");
const backToMenuBtn = document.querySelector(".backToMenuBtn");
const betBtn = document.querySelectorAll(".animalCircleImg");
// const reduceBtn = document.querySelectorAll(".reduceBtn");
const myValue = document.querySelectorAll(".myValue");
console.log(myValue);
const maxValue = document.querySelectorAll(".maxValue");
const centerImg = document.querySelectorAll(".img");
console.log(centerImg);
const winCount = document.querySelector(".winCount");
const myOwnCoin = document.querySelector(".myOwnCoin");
const circle = document.querySelector(".circle");
let ss = document.getElementById("ss");
const countDown = document.querySelector(".countDown");
const clockTickAudio = document.querySelector(".clockTickAudio");
const coinDropAudio = document.querySelector(".coinDropAudio");
const backgroundSound = document.querySelector(".backgroundSound");
const bubbleClickSound = document.querySelector(".bubbleClick");
const startBtn = document.querySelector(".startBtn");
const restartBtn = document.querySelector(".restartBtn");
const removeBetBtn = document.querySelector(".removeBetBtn");
const winOrLoseDiv = document.querySelector(".winOrLose");
const winOrLoseHeader = document.querySelector(".winOrLoseHeader");
const winOrLoseText = document.querySelector(".winOrLoseText");
const result = document.querySelector(".result");
const winningSound = document.querySelector(".winningSound");
const losingSound = document.querySelector(".losingSound");
const drawSound = document.querySelector(".drawSound");
const selectSound = document.querySelector(".selectSound");

    for(let i = 0; i < betBtn.length; i++){
        betBtn[i].addEventListener("click",function(){
            playCoinDrop();
            this.classList.add('animalBtnClickAnimation');
            setTimeout (()=>{
                this.classList.remove('animalBtnClickAnimation');
            },100) 
            if(betPermission === false){
                return ;
            }else{
                if(+myOwnCoin.firstChild.textContent > 0 && +myValue[i].firstChild.textContent < 50){
                    myValue[i].firstChild.textContent = +myValue[i].firstChild.textContent + 1;
                    myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent - 1;
                }
                // reduceBtn[i].addEventListener("click", function(){
                //     if(+myValue[i].firstChild.textContent > 0){
                //         myValue[i].firstChild.textContent = +myValue[i].firstChild.textContent - 1;
                //         myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + 1;  
                //} 
            }
        })
    }

function playClockTick(){
    clockTickAudio.play();
}
function endClockTick(){
    clockTickAudio.pause();
    clockTickAudio.currentTime = 0;
}

function playCoinDrop(){
    coinDropAudio.play();
}
function playBackgroundSound(){
    backgroundSound.play();
}
function stopBackgroundSound(){
    backgroundSound.pause();
    backgroundSound.currentTime = 0;
}
function playBubbleSound(){
    bubbleClickSound.play();
}
function playWinningSound(){
    winningSound.play();
}
function stopWinningSound(){
    winningSound.pause();
    winningSound.currentTime = 0;
}
function playLosingSound(){
    losingSound.play();
}
function playDrawSound(){
    drawSound.play();
}
function playSelectSound(){
    selectSound.play();
}


menuPlayBtn.addEventListener("click",function(){
    playBubbleSound();
    this.classList.add('animalBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('animalBtnClickAnimation');
    },100)
    loadingBox.style.display = "flex";
    setTimeout (()=>{
        // backToMenuBtn.style.display = "flex";
        gameContainer.style.display = "flex";
        menuBoard.style.display = "none";
        loadingBox.style.display = "none";
    },5000) 
})
menuQuitBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('animalBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('animalBtnClickAnimation');
    },100)
})
soundBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('animalBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('animalBtnClickAnimation');
    },100)
})
victoryBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('animalBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('animalBtnClickAnimation');
    },100)
})
settingBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('animalBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('animalBtnClickAnimation');
    },100)
})

// backToMenuBtn.addEventListener("click", function(){
//     playBubbleSound();
//     gameContainer.style.display = "none";
//     menuBoard.style.display = "flex";
//     backToMenuBtn.style.display = "none";
//     for(let i = 0; i < betBtn.length; i++){
//         myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + +myValue[i].firstChild.textContent;
//     };
//     for(let i = 0; i < betBtn.length; i++){
//         myValue[i].firstChild.textContent = 0;
//     };
//     countingEnd();
//     stopBackgroundSound();
//     playPermission = true;
// })

let count = 10;
let timerId = 0;
let betPermission = false;
let playPermission = true;

startBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('animalBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('animalBtnClickAnimation');
    },100) 
    if(playPermission === false){
        return ;
    }else{
        playPermission = false;
        playBackgroundSound();
        circle.style.display = "block";
        if(timerId !== 0) return;

        timerId = setInterval(function(){
            count--;
            let s = count
            s = (s <10)? "0" + s : s;
            countDown.innerHTML = s;

            if(betPermission == false){
                preAmount = myOwnCoin.firstChild.textContent;
            }
            console.log("pre amount", preAmount);

            betPermission = true;
            if(count > 0 && count <= 5){
                stopBackgroundSound();
                playClockTick();
                countDown.style.color = "rgb(253, 38, 38)";
                ss.style.stroke = "rgb(253, 38, 38)";
            }
            if(count === 0){
                countDown.innerHTML = "GO";
                countDown.style.color = "orange";
            }
            if(count < 0){
                // for(let i = 0; i < betBtn.length; i++){
                //     myValue[i].firstChild.textContent = 0;
                // }
                countingEnd();
                gameIntervel = 0;
                let random = getRandomInt(32);
                animationCircle(null,100);
                setTimeout(() => {
                    clearInterval(gameIntervel);
                    gameIntervel = 0;
                    animationCircle(null,200);
                },3000)
                setTimeout(() => {
                    clearInterval(gameIntervel);
                    gameIntervel = 0;
                    animationCircle(null,250);
                },5000)
                setTimeout(() => {
                    clearInterval(gameIntervel);
                    gameIntervel = 0;
                    animationCircle(null,300);
                },6000)
                setTimeout(() => {
                    clearInterval(gameIntervel);
                    gameIntervel = 0;
                    animationCircle(random,350);
                },7000)
            }
            ss.style.strokeDashoffset = 440 - (440 * count) / 30;
        },1000)
    }
});

function countingEnd(){
    clearInterval(timerId);
    timerId = 0;
    count = 30;
    countDown.innerHTML = count;
    endClockTick()
    circle.style.display = "none"
    betPermission = false;
    ss.style.stroke = "orange";
    countDown.style.color = "orange";
};

restartBtn.addEventListener("click", function(){
    // myOwnCoin.firstChild.textContent = 600;
    // for(let i = 0; i < betBtn.length; i++){
    //     myValue[i].firstChild.textContent = 0;
    // };
    // countingEnd();
    playBubbleSound();
    this.classList.add('animalBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('animalBtnClickAnimation');
    },100)
    if(betPermission === false){
        return ;
    }else{
        for(let i = 0; i < betBtn.length; i++){
            myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + +myValue[i].firstChild.textContent;
        };
        for(let i = 0; i < betBtn.length; i++){
            myValue[i].firstChild.textContent = 0;
        };
    }
});

removeBetBtn.addEventListener("click", function(){
    playBubbleSound();
    this.classList.add('animalBtnClickAnimation');
    setTimeout (()=>{
        this.classList.remove('animalBtnClickAnimation');
    },100)
    if(betPermission === false){
        return ;
    }else{
        for(let i = 0; i < betBtn.length; i++){
            myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + +myValue[i].firstChild.textContent;
        };
        for(let i = 0; i < betBtn.length; i++){
            myValue[i].firstChild.textContent = 0;
        };
        countingEnd();
        stopBackgroundSound();
        playPermission = true;
    }
});

function check(x){
    console.log("i am here");
    if(x == 1 || x == 2 || x == 3){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[0].firstChild.textContent * 2);
    }
    if(x == 21 || x == 22 || x == 23){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[1].firstChild.textContent * 2);
    }
    if(x == 25 || x == 26 || x == 27){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[2].firstChild.textContent * 2);
    }
    if(x == 29 || x == 30 || x == 31){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[3].firstChild.textContent * 2);
    }
    if(x == 5 || x == 6 || x == 7){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[4].firstChild.textContent * 2);
    }
    if(x == 9 || x == 10 || x == 11){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[5].firstChild.textContent * 2);
    }
    if(x == 13 || x == 14 || x == 15){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[6].firstChild.textContent * 2);
    }
    if(x == 17 || x == 18 || x == 19){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[7].firstChild.textContent * 2);
    }
    if(x == 0 || x == 8 || x == 16 || x == 24){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[8].firstChild.textContent * 2);
    }
    if(x == 4 || x == 12 || x == 20 || x == 28){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[9].firstChild.textContent * 2);
    }
    if(x == 5 || x == 6 || x == 7 || x == 9 || x == 10 || x == 11 || x == 13 || x == 14 || x == 15 || x == 17 || x == 18 || x == 19 || x == 0 || x == 8 || x == 16 || x == 24 || x == 4 || x == 12 || x == 20 || x == 28){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[10].firstChild.textContent * 2);
    }
    if(x == 1 || x == 2 || x == 3 || x == 21 || x == 22 || x == 23 || x == 25 || x == 26 || x == 27 || x == 29 || x == 30 || x == 31){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[11].firstChild.textContent * 2);
    }
    finalAmount = myOwnCoin.firstChild.textContent;
    console.log("finalAmount",finalAmount);
}

function winOrLose(x,y){
    if(x > y){
        // playWinningSound();
        winCount.firstChild.textContent = +winCount.firstChild.textContent + 1;
        winOrLoseDiv.style.display = "flex";
        winOrLoseHeader.textContent = "Congratulation!";
        winOrLoseText.textContent = "You Win";
        result.textContent = x - y + " Coins";
    }else if(x === y){
        // playDrawSound();
        winOrLoseDiv.style.display = "flex";
        winOrLoseHeader.textContent = "Sorry!";
        winOrLoseText.textContent = "Draw";
        result.textContent = "Tryagain";
    }else{
        // playLosingSound();
        winOrLoseDiv.style.display = "flex";
        winOrLoseHeader.textContent = "Sorry!";
        winOrLoseText.textContent = "You Lose";
        result.textContent = y - x + " Coins";
    }
}

function getRandomInt(num){
    return Math.floor((Math.random() * num));
}

let gameIntervel = 0;
let i = 0;

function  animationCircle(random,speed){
    let number = random;
    if(gameIntervel !== 0){
        return ;
    }
    gameIntervel = setInterval(() => {
        if(!centerImg[i].className.includes("animate")) {
            centerImg[i].classList.add("animate");
        }
        if(i > 0){
            centerImg[i-1].classList.remove("animate");
        }else{
            centerImg[31].classList.remove("animate");
        }
        i++;
        number--;
        if(i == 32){
            i = 0;
        }
        if(number == 0){
            clearInterval(gameIntervel);
            let y = i - 1;
            console.log(y);
            check(y);
            
            for(let i = 0; i < betBtn.length; i++){
                myValue[i].firstChild.textContent = 0;
            }

            setTimeout (()=>{
                playSelectSound();
                centerImg[i-1].classList.remove("animate");
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.add("animate");
                },200)
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.remove("animate");
                },400) 
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.add("animate");
                },600) 
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.remove("animate");
                },800) 
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.add("animate");
                },1000) 
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.remove("animate");
                },1200)
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.add("animate");
                },1400) 
                setTimeout (()=>{
                    playSelectSound();
                    centerImg[i-1].classList.remove("animate");
                },1600)  
            },500) 

            setTimeout (()=>{
                winOrLose(finalAmount,preAmount);
                setTimeout(() => {
                    winOrLoseDiv.style.display = "none";
                    stopWinningSound();
                },2500)
            },2000)
            
            setTimeout(() => {
                playPermission = true;
            },3600);
        }
        playBubbleSound();
    }, speed);
 }