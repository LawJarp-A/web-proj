function handleClick() {

  makeSound(this.className.slice(0, 1));
  animatedrum(this.className.slice(0, 1));

}


function animatedrum(k) {

  var temp = document.querySelector("." + k);
  temp.classList.add("pressed");
  setTimeout(function() {
    temp.classList.remove("pressed");
  }, 100);
}
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("keydown", function(event) {
    makeSound(event.key);
    animatedrum(event.key);
  });

}

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

}

function makeSound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

  }


}
