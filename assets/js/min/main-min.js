// main.js
// ANCHORS
// BACK TO TOP
// Scroll down and show the button
function scrollFunction(){100<document.body.scrollTop||100<document.documentElement.scrollTop?document.getElementById("btt").style.display="block":document.getElementById("btt").style.display="none"}
// Add function to link in markup
function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}
// RESPONSIVE IMAGES
function setImgStyle(t){var e=t.offsetWidth;t.setAttribute("style","width: 100%; max-width: "+e+"px;")}if(document.body.classList.contains("docs"))for(var headings=document.querySelectorAll("h1,h2,h3,h4"),i=0;i<headings.length;i++){var el=headings[i];el.insertAdjacentHTML("beforeend",'<a href="#'+el.id+'">#</a>')}window.onscroll=function(){scrollFunction()},document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".docs img"),e=Array.prototype.filter;0<t.length&&e.call(t,function(t){setImgStyle(t),t.onload=function(){setImgStyle(t)}})});