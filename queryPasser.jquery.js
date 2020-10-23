$(document).ready(function() {
    $(function() {

        if(location.search === ""){
            return;
        }

        $('a[href]').each(function() {
            href = $(this).attr('href');
            if (href !== 'undefined' || href.substr(0) != '' || href != null) {
                switch(true){
                    case (href.substr(0, 1) == '#'):
                        $(this).attr('href', location.search + href);
                        break;
                    case (href.indexOf('#') > 0):
                        href = href.split('#');
                        $(this).attr('href', href[0] + location.search + '#' + href[1]);
                        break;
                    case (href.indexOf('?') > 0 || href.indexOf('&') > 0):
                        $(this).attr('href', href + '&' + location.search.substring(1));
                        break;
                    default:
                        $(this).attr('href', href + location.search);
                        break;
                }
            }
        });
    });
});