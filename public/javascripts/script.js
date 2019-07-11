// const axios = require("axios");

document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

var dragposition = "";

$(".drag2").draggable({
  // other options...
  drag: function(event, ui) {
    dragposition = ui.position;
  },

  stop: (event, ui) => {
    let peopleId = $(event.target).attr("id");
    let xvalue = ui.position.left;
    let yvalue = ui.position.top;
    console.log("This is the", ui.position);
    axios.post(`/add-point/${peopleId}`, { xvalue, yvalue });

    ///ask axios to storelocation
  }
});

$(".drag").draggable({
  // other options...
  drag: function(event, ui) {
    dragposition = ui.position;
  },

  stop: (event, ui) => {
    let commentId = $(event.target).attr("id");
    console.log(event.target.id);
    let xvalue = ui.position.left;
    let yvalue = ui.position.top;
    console.log("This is the", ui.position);
    axios.post(`/add-point-comment/${commentId}`, { xvalue, yvalue });

    ///ask axios to storelocation
  }
});

var inputdrag =
  '<input type="hidden" id="dragposition" value="' +
  dragposition.left +
  "," +
  dragposition.top +
  '"/>';
$("#myform").append(inputdrag);

////first page

$("#addscroll").click(function() {
  $("body").removeClass("red");
});

document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

var animation = bodymovin.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "../images/"
});

document.getElementById("addscroll").addEventListener("click", function() {
  animation.play();
});
// document.getElementById('bm').addEventListener('mouseleave', function(){ animation.pause(); })
