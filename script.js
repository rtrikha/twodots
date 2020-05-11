//getting the date and build number

classToggle();

function showRestContent() {}

function classToggle() {
        var elem = document.getElementById("show-more");
        if (elem.innerHTML == "Show more") {
                elem.innerHTML = "Show less";
                document.getElementById("hero-wrapper").style.opacity = "0.1";
                document.getElementById("hero-wrapper").style.transition = "opacity 0.3s";
                document.getElementById("item1").style.display = "block";
                document.getElementById("item1").style.transition = "opacity 0.3s";
                document.getElementById("item2").style.display = "block";
                document.getElementById("item3").style.display = "block";
                document.getElementById("projects").style.display = "block";
        } else {
                elem.innerHTML = "Show more";
                document.getElementById("hero-wrapper").style.opacity = "1";
                document.getElementById("hero-wrapper").style.transition = "opacity 0.3s";
                document.getElementById("item1").style.display = "none";
                document.getElementById("item2").style.display = "none";
                document.getElementById("item3").style.display = "none";
                document.getElementById("projects").style.display = "none";
        }
}


var tooltips = document.querySelectorAll('.tooltip span');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};

//flex-Wrap