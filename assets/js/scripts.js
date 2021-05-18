(function ($) {
    "use strict";

    var path = window.location.href;
    $("li.nav-item a.nav-link").each(function () {
        var checkurl = ($(this).attr('href').split('?'))[0];
        if (path.indexOf(checkurl) > -1) {
            $(this).addClass("active");
        }
    });

    $(document).ready(function () {
        $('.navbar-toggler').on('click', function () {
            $('.animated-icon').toggleClass('open');
        });
    });
})(jQuery);