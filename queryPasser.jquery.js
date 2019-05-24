$(document).ready(function() {
    $(function() {
        var href;
        $('a').each(function() {
            href = $(this).attr('href');
            if (href !== "undefined" && href != null && href && href.length > 1) {
                if (href !== 'undefined' || href.substr(0) != '' || href !== null) {
                    if (href.substr(0, 1) == '#') {
                        $(this).attr('href', location.search + href);
                    } else if (href.indexOf('#') > 0) {
                        href = href.split('#');
                        $(this).attr('href', href[0] + location.search + '#' + href[1]);
                    } else {
                        href += location.search;
                        $(this).attr('href', href);
                    }
                }
            }
        });
    });
});