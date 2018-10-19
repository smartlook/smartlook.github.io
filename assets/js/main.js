 // main.js

// ANCHORS

if (document.body.classList.contains("docs")) {
  var headings = document.querySelectorAll("h1,h2,h3,h4");

  for (var i = 0; i < headings.length; i++) {
    var el = headings[i];
    el.insertAdjacentHTML("beforeend", '<a href="#' + el.id + '">#</a>');
  }
}

// BACK TO TOP

// Scroll down and show the button
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("btt").style.display = "block";
  } else {
    document.getElementById("btt").style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};

// Add function to link in markup
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// RESPONSIVE IMAGES
function setImgStyle(img) {
  var width = img.offsetWidth;
  img.setAttribute('style', 'width: 100%; max-width: ' + width + 'px;');
}

document.addEventListener('DOMContentLoaded', function() {
  var docsImgs = document.querySelectorAll('.docs img');
  var _filter = Array.prototype.filter;

  if (docsImgs.length > 0) {
    _filter.call(docsImgs, function(img) {      
      setImgStyle(img);

      img.onload = function() {
        setImgStyle(img);
      }
      
    })
  }
});
