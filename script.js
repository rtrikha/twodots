
document.getElementById('move-footer').style.animationIterationCount=1;

function showMainContent() {
        document.getElementById("blackbox-supporter").style.display = "block";
        document.getElementById("blackbox").style.animation = "show-more 1s ease forwards";
}
//setTimeout(showMainContent, 5000);

//classToggle();

function showRestContent() {}


var tooltips = document.querySelectorAll(".tooltip-span");

window.onmousemove = function (e) {
        var x = e.clientX + 0 + "px",
                y = e.clientY + 100 + "px";
        for (var i = 0; i < tooltips.length; i++) {
                tooltips[i].style.top = y;
                tooltips[i].style.left = x;
        }
};
