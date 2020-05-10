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

function showRestContent() {
        document.getElementById("item1").style.display = "block";
        document.getElementById("item2").style.display = "block";
        document.getElementById("item3").style.display = "block";
        document.getElementById("projects").style.display = "block";
        document.getElementById("hero-wrapper").style.opacity="0.1";
        document.getElementById("hero-wrapper").style.transition="opacity 0.4s"
      }
