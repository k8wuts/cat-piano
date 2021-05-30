function playAudio(url){
  new Audio(url).play();
}

document.getElementById("Cs1")
    .addEventListener("keyup", function(e) {
        if (e.key === 13) {
            document.getElementById("Cs1").click();
        }
    });
 
document.getElementById("Cs1").onclick = function() {
    new Audio('meows/Ds1.wav').play();
}