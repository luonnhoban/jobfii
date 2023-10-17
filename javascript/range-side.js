//one range job
var slider = document.getElementById("myRange");
var output = document.getElementById("default-side");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
  const value = this.value;
  this.style.background = `linear-gradient(to right, #6728D0 0%, #6728D0 ${value}%, #ddd ${value}%, #ddd 0%)`;
};
