(function() {
    var href;
    document.querySelectorAll('a').forEach(function(ele){
        href = ele.getAttribute('href');
        if (href !== "undefined" && href != null && href && href.length > 1) {
            if (href !== 'undefined' || href.substr(0) != '' || href !== null) {
                if (href.substr(0, 1) == '#') {
                    ele.setAttribute('href', location.search + href);
                } else if (href.indexOf('#') > 0) {
                    href = href.split('#');
                    href[0] + location.search + '#' + href[1]
                    ele.setAttribute('href', href[0] + location.search + '#' + href[1]);
                } else {
                    href += location.search;
                    ele.setAttribute('href', href);
                }
            }
        }
    });
})();
