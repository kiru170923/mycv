window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.pageYOffset > 100) { 
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }
};
