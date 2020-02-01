//Back to top
$(window).load(function(){
if ($('#to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#to-top').addClass('show');
            } else {
                $('#to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
});

//Order
function changeImg(value){
    var img = document.getElementById("colorimg");
    switch(value){
        case "black": img.src="img/black.png";break;
        case "white": img.src="img/white.png";break;
        default: return false;
    }
}

//Features
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTabSpec(evt, tabNameSpec) {
    var i, tabcontentSpec, tablinksSpec;
    tabcontentSpec = document.getElementsByClassName("tabcontentSpec");
    for (i = 0; i < tabcontentSpec.length; i++) {
        tabcontentSpec[i].style.display = "none";
    }
    tablinksSpec = document.getElementsByClassName("tablinksSpec");
    for (i = 0; i < tablinksSpec.length; i++) {
        tablinksSpec[i].className = tablinksSpec[i].className.replace(" active", "");
    }
    document.getElementById(tabNameSpec).style.display = "block";
    evt.currentTarget.className += " active";
}
