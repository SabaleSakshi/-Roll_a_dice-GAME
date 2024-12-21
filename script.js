'use strict' ;

const score0Ele = document.getElementById('score--0');
const score1Ele = document.getElementById('score--1');
const currentscore0 =document.getElementById('current--0');
const currentscore1 =document.getElementById('current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');

const newbtn =document.querySelector('.btn--new');
const holdbtn =document.querySelector('.btn--hold');
const rolldice=document.querySelector('.btn--roll');

const dice = document.querySelector('.dice');

let actualscores=[0,0];
let activeplayer=0;
let playing =true;
let score=0;

const initial=function(){
    actualscores=[0,0];
    activeplayer=0;
    playing =true;
    score=0;

    score0Ele.textContent=0;
    score1Ele.textContent=0;
    currentscore0.textContent=0;
    currentscore1.textContent=0;
    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    
};

const switchuser=function(){
    score=0;
    document.getElementById(`current--${activeplayer}`).textContent= score ;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    activeplayer= activeplayer===0? 1 : 0;
}

initial();

rolldice.addEventListener('click',function(){
    if(playing){
    //dice roll
    let randomnum=Math.trunc(Math.random()*6)+1;
    // console.log(typeof(randomnum));
    dice.classList.remove('hidden');
    dice.src=`dice-${randomnum}.png`;

    //score 

    score+=randomnum;
    document.getElementById(`current--${activeplayer}`).textContent = score ;

    if(randomnum===1){
        switchuser();
    }
}

});

holdbtn.addEventListener('click',function(){
    if(playing){
    actualscores[activeplayer]+=score;
    document.getElementById(`score--${activeplayer}`).textContent=actualscores[activeplayer] ;
    if(actualscores[activeplayer]>=100){
        playing=false;
        dice.classList.add('hidden');
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');

    }
    else{
    switchuser();
    }
}
})

newbtn.addEventListener('click',initial);