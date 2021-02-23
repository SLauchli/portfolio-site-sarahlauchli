console.log("Hi! Welcome to my portfolio. Enjoy your visit :)")

var myNavToggle = $('#hamburger');
myNavToggle.click(function() {
  var closed = true;

  if (closed) {
    $("#toggle-links").removeClass("hidden");
    closed = false;
  } else {
    $("#toggle-links").addClass("hidden");
    closed = true;
  }
});





//   if (x.className === 'nav-container') {
//   x.className += 'responsive';
// } else {
//   x.className = 'nav-container borderxwidth';
// }
// }
