var x = document.getElementsByClassName("slidercontents");
var current = 1;
var cardCount = x.length;
var slider = function nextdiv(n) {
    current += n;
    return current;
    x[(slider - 1)].style.display = "block";
}