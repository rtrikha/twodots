//getting the date and build number

// document.getElementById("item1").style.display = "none";
// document.getElementById("item2").style.display = "none";
// document.getElementById("item3").style.display = "none";
// document.getElementById("projects").style.display = "none";

//document.getElementById("blackbox-supporter").style.display = "none";

function showMainContent() {
        document.getElementById("blackbox-supporter").style.display = "block";
        document.getElementById("blackbox").style.animation = "show-more 1s ease forwards";

}
//setTimeout(showMainContent, 5000);

//classToggle();

function showRestContent() {}

function classToggle() {
        var elem = document.getElementById("show-more");
        if (elem.innerHTML == "Show more") {
                elem.innerHTML = "Show less";
                document.getElementById("hero-wrapper").style.opacity = "0.1";
                document.getElementById("hero-wrapper").style.transition = "opacity 0.3s";
                document.getElementById("item1").style.animation = "show-more 0.3s ease forwards";
                document.getElementById("item2").style.animation = "show-more 0.3s ease forwards";
                document.getElementById("item3").style.animation = "show-more 0.3s ease forwards";
                document.getElementById("projects").style.animation = "show-more 0.3s ease forwards";
        } else {
                elem.innerHTML = "Show more";
                document.getElementById("hero-wrapper").style.opacity = "1";
                document.getElementById("hero-wrapper").style.transition = "opacity 0.3s";
                document.getElementById("item1").style.animation = "show-less 0.3s ease forwards";
                document.getElementById("item2").style.animation = "show-less 0.3s ease forwards";
                document.getElementById("item3").style.animation = "show-less 0.3s ease forwards";
                document.getElementById("projects").style.animation = "show-less 0.3s ease forwards";
        }
}

var tooltips = document.querySelectorAll(".tooltip-span");

window.onmousemove = function (e) {
        var x = e.clientX + 0 + "px",
                y = e.clientY +100 + "px";
        for (var i = 0; i < tooltips.length; i++) {
                tooltips[i].style.top = y;
                tooltips[i].style.left = x;
        }
};

//flex-Wrap
