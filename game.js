AFRAME.registerComponent('game-play', {

    init: function () {
      eggsRemaining = 5
      this.el.addEventListener('collide', function (e) {
        e.detail.target.el.remove();
        eggsRemaining -= 1;
        eggsRemainingText = document.getElementById('eggsRemainingText');
        console.log(eggsRemainingText);
        eggsRemainingText.setAttribute('text', { value: String(eggsRemaining) });
        if (eggsRemaining == 0) {
          gameOverText = document.getElementById('gameOverText');
          gameOverText.setAttribute('text', { value: 'You WON!' });
  
        }
      });
    },
  
  });