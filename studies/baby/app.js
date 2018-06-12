var babyImage = document.getElementById("baby"),
    weekTitle = document.getElementById("week");

var count = 2;
var stop = false;

babyImage.addEventListener("click", function() {
  stop = !stop;

  if (stop === false) {
    playShow();
  }
});

babyImage.addEventListener("wheel", (event) => {
  if (count < 41) {
    if (event.deltaY > 0) {
      count++;
      weekTitle.textContent = count.toString();
      
      changeImage();
    }
  }
  if (count > 2) {
    if (event.deltaY < 0) {
      count--;
      weekTitle.textContent = count.toString();
  
      changeImage();
    }
  }
});

function changeImage() {
  babyImage.src = "images/" + count.toString() + ".jpg";
}

function playShow() {
  setTimeout(function() {
    if (count < 41 && stop === false) {
      count++;
      changeImage();
      weekTitle.textContent = count.toString();

      playShow();
    }
  }, 1000);
}

playShow();