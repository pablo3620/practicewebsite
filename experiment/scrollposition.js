/*window.addEventListener('scroll', () => {
    var scrollPostion = window.pageYOffset
    if (scrollPostion > winheight) {
        document.getElementById("mySidenav").backgroundColor = "rgba(0,0,0,1)";
    } else {
        document.getElementById("mySidenav").backgroundColor = "rgba(0,0,0,0.4)";
    }
})
$(window).on('scroll', function() {
    var scrollPostion = window.pageYOffset
    var winheight = window.innerHeight
    if (scrollPostion > winheight) {
        document.getElementById("mySidenav").backgroundColor = "rgba(0,0,0,1)";
    } else {
        document.getElementById("mySidenav").backgroundColor = "rgba(0,0,0,0.4)";
    }
});
$(function() {
    var winheight = window.innerHeight
    $(window).scroll(function () {
       if ($(this).scrollTop() > winheight) {
            document.getElementById("mySidenav").backgroundColor = "rgba(0,0,0,1)"
       }
       if ($(this).scrollTop() < winheight) {
            document.getElementById("mySidenav").backgroundColor = "rgba(0,0,0,0.4)"
       }
    });
 });*/
window.onscroll = function() {scrollFunction()};
var winheight = window.innerHeight
function scrollFunction() {
    if (document.body.scrollTop > winheight || document.documentElement.scrollTop > winheight) {
        document.getElementById("mySidenav").style.backgroundColor = "rgba(0, 0, 0, 1)"
    } else {
        document.getElementById("mySidenav").style.backgroundColor = "rgba(0, 0, 0, 0.4)"
    }
}