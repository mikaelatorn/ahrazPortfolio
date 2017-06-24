var about = document.getElementById('main-content');
var projects = document.getElementById('card-1');
var contact = document.getElementById('listItem');

var skills = document.getElementById('skills');
var circles = document.getElementsByClassName("fill");
var mask = document.getElementsByClassName('full');
var seam = document.getElementsByClassName('seam');

window.onload = function() {
    if (window.innerWidth > 1669) {
        circle();
    }
    // circle();
}

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

    console.log(section);

    if (section == 'about') {
        aboutBanner.style.backgroundColor = '#232323';
        projectBanner.style.backgroundColor = '#333333';
        contactBanner.style.backgroundColor = '#333333';
    }
    if (section == 'projects') {
        aboutBanner.style.backgroundColor = '#333333';
        projectBanner.style.backgroundColor = '#232323';
        contactBanner.style.backgroundColor = '#333333';
    }
    if (section == 'contact') {
        aboutBanner.style.backgroundColor = '#333333';
        projectBanner.style.backgroundColor = '#333333';
        contactBanner.style.backgroundColor = '#232323';
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




// var skills = {
//     'Python': 75,
//     'Flask': 75,
//     'Javascript': 60,
//     'NodeJs': 50,
//     'C#': 40,
//     'HTML/CSS': 40
// }


circleVals = [75, 75, 75, 75, 75, 75, 60, 60, 60, 50, 50, 50, 40, 40, 40, 40, 40, 40]
maskVals = [75, 75, 60, 50, 40, 40]
seamVals = [75, 75, 60, 50, 40, 40]

function addRotate(shape, vals) {
    // var deg = 135;
    // var degFix = 270;
    // shape.length 
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