//getting the date and build number
document.getElementById("item1").style.display = "none";
document.getElementById("item2").style.display = "none";
document.getElementById("item3").style.display = "none";
document.getElementById("projects").style.display = "none";

function formatAMPM() {
        var d = new Date(),
                months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return "v2.1 | " + months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();
}

document.getElementById("date-time").innerHTML = formatAMPM();

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


var tooltipSpan = document.getElementById('tooltip-span');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x + 20) + 'px';
};