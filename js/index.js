$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

function playSound(sound) {
  var song1 = document.getElementById(sound);
  song1.volume = .25; // setting the volume to 25% because the sound is loud
  if (song1.paused) {  // if song1 is paused
    song1.play();
  } else {
    song1.pause();
  }
}

function toggleSpoiler(id) {
  let spoiler = document.getElementById(id) // ← trouve le spoileur
  let classes = spoiler.classList // ← classes du spoileur
  if (classes == "spoiler"){ // ← si le spoileur n'est pas cliqué
      spoiler.classList.add("clicked"); // ← ajout de la classe "clicked"
      console.log(`the spoiler ${id} was clicked`)// ← log l'action
  }
}
let theme = 1
function toggleTheme(){
  if (theme == 1){
    document.documentElement.style.setProperty('--blue','#6AA6E2')
    document.documentElement.style.setProperty('--backColor','#F2F2F2')
    document.documentElement.style.setProperty('--backColorGradient','#D6D6D6')
    document.documentElement.style.setProperty('--textColor','#000000')
    theme = 0
  }else{
    document.documentElement.style.setProperty('--blue','#8BBAE9')
    document.documentElement.style.setProperty('--backColor','#171120')
    document.documentElement.style.setProperty('--backColorGradient','#ff83cd')
    document.documentElement.style.setProperty('--textColor','#ffffff')
    theme = 1
  }
}