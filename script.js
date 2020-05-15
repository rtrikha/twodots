
const app = {
    pages: [],
    show: new Event('show'),
    init: function(){
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })
        
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'Home', '#home');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    pageShown: function(ev){
        console.log('Page', ev.target.id, 'just shown');

    },
    poppin: function(ev){
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#' ,'');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        //history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(hash).dispatchEvent(app.show);
    }
}

document.addEventListener('DOMContentLoaded', app.init);

document.getElementById('move-footer').style.animationIterationCount=1;

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
                y = e.clientY + 100 + "px";
        for (var i = 0; i < tooltips.length; i++) {
                tooltips[i].style.top = y;
                tooltips[i].style.left = x;
        }
};
