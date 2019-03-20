/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
/*function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "-250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  */
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
/*function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementById("openBtn").style.right = "264px"
  document.getElementById("closeBtn").style.right = "264px"
  document.getElementById("closeBtn").style.zIndex = "10"
  document.getElementById("openBtn").classList.add("opened")

}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("openBtn").style.right = "14px"
  document.getElementById("closeBtn").style.right = "14px"
  document.getElementById("closeBtn").style.zIndex = "-1"
  document.getElementById("openBtn").classList.remove("opened")
}
/*in order to change style if browser changes size*/
function widthCheck() {
  var winWidth = window.innerWidth;
  if (winWidth > 1024) {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
    //in order to change to the right color according to scroll position
    scrollFunction()
  } else {
    //closes the navbar on window resize so that when the desktop size becomes moblie nav bar is no broken
    closeNav()
    //color of moblie navbar
    document.getElementById("mySidenav").style.backgroundColor = "#111";
    document.getElementById("mySidenav").style.boxShadow = "none";
  }
}