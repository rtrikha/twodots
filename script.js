//getting the date and build number

function formatAMPM() {
        var d = new Date(),
                months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return "v2.1 | " + months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();
}

document.getElementById("date-time").innerHTML = formatAMPM();