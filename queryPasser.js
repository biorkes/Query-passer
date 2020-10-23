(function() {

    if(location.search === ""){
        return;
    }

    document.querySelectorAll('a[href]').forEach(function(ele){
        var href = ele.getAttribute('href');
        if (href !== 'undefined' || href.substr(0) != '' || href != null) {
            switch(true){
                case (href.substr(0, 1) == '#'):
                    ele.setAttribute('href', location.search + href);
                    break;
                case (href.indexOf('#') > 0):
                    href = href.split('#');
                    ele.setAttribute('href', href[0] + location.search + '#' + href[1]);
                    break;
                case (href.indexOf('?') > 0 || href.indexOf('&') > 0):
                    ele.setAttribute('href', href + '&' + location.search.substring(1));
                    break;
                default:
                    ele.setAttribute('href', href + location.search);
                    break;
            }
        }
    });
})();