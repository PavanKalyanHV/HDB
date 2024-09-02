var container = document.querySelector('.make-good-box');
var audio = document.getElementById('myAudio');
var clickMe = document.querySelector('.clickbox');
var para1 = document.querySelector('.para1');
var hyrb = document.querySelector('.hope_you_are_better');
var buttonNo = document.querySelector('.button_No');
var buttonYes = document.querySelector('.button_Yes');
var toldYou = document.querySelector('.toldYou');

// hyrb.classList.toggle('invisible');
clickMe.addEventListener('click', function() {
  container.classList.toggle('visible');
  clickMe.classList.toggle('invisible');
  para1.classList.toggle('invisible');

  audio.play();
  setTimeout(()=>{
        container.classList.toggle('invisible');
        hyrb.classList.toggle('flip');
      },13000)
});

buttonNo.addEventListener('click', function() {
        buttonNo.classList.toggle('hidden') 
        toldYou.classList.toggle('flip2') 

})      

buttonYes.addEventListener('click', () => {
    // Stop the rotation animation
//     giftBox.style.animationPlayState = 'paused';
    // Navigate to the desired page
    window.location.href = 'page4.html';
});
