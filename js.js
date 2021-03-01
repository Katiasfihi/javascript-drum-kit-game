
/*window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; // stop the function from running
    audio.currentTime = 0; //rewind to the start

   audio.play();

   key.classList.add('playing');
});

function removeTransition(e) {
       if (e.propertyName !== 'transform') return;
       this.classList.remove('playing');
   }

  

 const keys = document.querySelectorAll('.key');
 keys.forEach(key => key.addEventListener('transitionEnd', removeTransition)); */

 function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
