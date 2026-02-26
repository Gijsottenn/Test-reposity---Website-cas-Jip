function openSidebar() {

    document.getElementById("sidebar").style.left = "0";
    document.getElementById("overlay").style.display = "block";

}

function closeSidebar() {

    document.getElementById("sidebar").style.left = "-260px";
    document.getElementById("overlay").style.display = "none";

}


/* Cookie system */

function acceptCookies() {

    localStorage.setItem("cookiesAccepted", "true");

    document.getElementById("cookie-banner").style.display = "none";

}

window.onload = function() {

    if(localStorage.getItem("cookiesAccepted")) {

        document.getElementById("cookie-banner").style.display = "none";

    }

}
