var about = document.getElementById('main-content');
var projects = document.getElementById('card-2');
var contact = document.getElementById('listItem');

var skills = document.getElementById('skills');
var circles = document.getElementsByClassName("fill");
var mask = document.getElementsByClassName('full');
var seam = document.getElementsByClassName('seam');

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                window.location.hash = hash;
            });
        }
    });
});

window.onresize = function(event) {
    var menu = document.getElementById('menu-list');
    if (window.innerWidth > 899) {
        menu.style.height = '100vh';
    } else {
        menu.style.height = '0px';
    }
};

window.onload = function() {
    if (window.innerWidth > 1669) {
        circle();
    }

};

window.onscroll = function() {
    circle();

    var visibleAbout = checkVisible(about);
    var visibleProjects = checkVisible(projects);
    var visibleContact = checkVisible(contact);

    if (visibleAbout) changeBanner('about');
    else if (visibleProjects) changeBanner('projects');
    else if (visibleContact) changeBanner('contact');

};

function changeBanner(section) {
    var aboutBanner = document.getElementById('about');
    var projectBanner = document.getElementById('projects');
    var contactBanner = document.getElementById('contact');

    if (section == 'about') {
        aboutBanner.style.backgroundColor = '#232323';
        projectBanner.style.backgroundColor = '#333333';
        contactBanner.style.backgroundColor = '#333333';
        aboutBanner.children[1].style.width = '3em';
        projectBanner.children[1].style.width = '1.2em';
        contactBanner.children[1].style.width = '1.2em';
    }
    if (section == 'projects') {
        aboutBanner.style.backgroundColor = '#333333';
        projectBanner.style.backgroundColor = '#232323';
        contactBanner.style.backgroundColor = '#333333';
        aboutBanner.children[1].style.width = '1.2em';
        projectBanner.children[1].style.width = '3em';
        contactBanner.children[1].style.width = '1.2em';
    }
    if (section == 'contact') {
        aboutBanner.style.backgroundColor = '#333333';
        projectBanner.style.backgroundColor = '#333333';
        contactBanner.style.backgroundColor = '#232323';
        aboutBanner.children[1].style.width = '1.2em';
        projectBanner.children[1].style.width = '1.2em';
        contactBanner.children[1].style.width = '3em';
    }

}

function circle() {
    var visibleSkills = checkVisible(skills);

    if (visibleSkills) {
        addRotate(circles, circleVals);
        addRotate(mask, maskVals);
        addRotate(seam, seamVals);
    }
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}




var circleVals = [75, 75, 75, 75, 75, 75, 60, 60, 60, 50, 50, 50, 40, 40, 40, 40, 40, 40]
var maskVals = [75, 75, 60, 50, 40, 40]
var seamVals = [75, 75, 60, 50, 40, 40]

function addRotate(shape, vals) {
    for (var i = 0; i < shape.length; i++) {
        shape[i].className.split(" ")[0] == 'fix' ? shape[i].style.transform = " rotate(" + 360 * (vals[i] / 100) + "deg)" : shape[i].style.transform = " rotate(" + 180 * (vals[i] / 100) + "deg)";
    }
}

function toggleMenubar(menubar) {
    menubar.classList.toggle("change");
    toggleMenu();
}

function toggleMenu() {
    var menu = document.getElementById('menu-list');
    menu.style.height = (menu.style.height == '29em') ? '0px' : '29em';
    var sidebar = document.getElementsByClassName('sidebar');

    for (var i = 0; i < sidebar.length; i++) {
        sidebar[i].style.borderTop = (sidebar[i].style.borderTop == '2px solid #262626 ') ? '0px' : '2px solid #262626';
    }


}