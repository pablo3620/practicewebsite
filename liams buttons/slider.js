var slider = 1;
showdivs(slider);

function nextdiv(n) {
    showdivs(slider += n);
}

function showdivs(n) {
    var i;
    var x = document.getElementsByClassName("slidercontents");
    if (n > x.length) { slider = 1 }
    if (n < 1) { slider = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slider - 1].style.display = "block";
}