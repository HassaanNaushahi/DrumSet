$(".drum").click(handleClick);

function handleClick(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  addAnimation(buttonInnerHTML);
  //PressKey(buttonInnerHTML);
}

$(".drum").keydown(handleKeyPress);

function handleKeyPress(press){
  makeSound(press.key);
  addAnimation(press.key);
}

function addAnimation(button)
{
  var activeButton = $("." + button);
  activeButton.addClass("pressed");
  setTimeout(function(){
  activeButton.removeClass("pressed");
  }, 100);
}

function makeSound(key)
{
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
  }
}
