const a = document.querySelectorAll(".set button");
const year = document.querySelector('#year');
year.textContent=new Date().getFullYear()
year.style.color = "red"
year.style.fontSize= "bold"
document.addEventListener("keydown", (e) => {
  makeSound(e.key);
  buttonAnimation(e.key);
});
a.forEach((e, i) => {
  e.addEventListener("click", (e) => {
    let a = e.target.innerHTML;
    makeSound(a);
    buttonAnimation(a);
  });
});
function makeSound(key) {
  let locate = "";
  switch (key) {
    case "w":
      locate = "tom-1.mp3";
      break;
    case "a":
      locate = "tom-2.mp3";
      break;
    case "s":
      locate = "tom-3.mp3";
      break;
    case "d":
      locate = "tom-4.mp3";
      break;
    case "j":
      locate = "snare.mp3";
      break;
    case "k":
      locate = "crash.mp3";
      break;
    case "l":
      locate = "kick-bass.mp3";
      break;

    default:
      alert("NAHI chalna");
      break;
  }
  let audio = new Audio(`./sounds/${locate}`);
  audio.play();
}

function buttonAnimation(key) {
  let a = document.querySelector("." + key);
  a.classList.add("pressed");
  setTimeout(() => {
    a.classList.remove("pressed");
  }, 100);
}
