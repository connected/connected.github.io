/**
 * Convert fake email.
 */
(function() {

    var emailLink = document.getElementById("email-link");
    var email     = emailLink.innerHTML.replace("|", "@");

    emailLink.href      = "mailto:" + email;
    emailLink.innerHTML = email;

})();


/**
 * Logo animation.
 */
(function() {

    var logo = document.getElementById("logo");
    var timer;

    if (typeof(logo.classList) != "undefined") {
        logo.addEventListener("mouseenter", mouseEventHandler);
        logo.addEventListener("click", mouseEventHandler);
    }

    function mouseEventHandler() {
        logo.classList.add("hover");
        window.clearTimeout(timer);
        timer = window.setTimeout(function(e) {
            logo.classList.remove("hover");
        }, 500); //This helps to finish animation smoothly :)
    }

})();


/**
 * Google analitycs.
 */
(function(){

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-57636576-1', 'auto');
    ga('send', 'pageview');

})();
