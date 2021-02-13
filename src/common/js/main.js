window.onload = function () {

    var pixelResolutionWidth = window.screen.width * devicePixelRatio;

    var path = location.pathname;
    var sp = location.href.split("/");

    console.log("path：" + path);
    console.log("href：" + location.href);

    var pathName = sp[sp.length - 2];
    console.log(pathName);

    if (1280 <= pixelResolutionWidth) {
        if (pathName != "1280px") {
            var userAgent = window.navigator.userAgent.toLowerCase();
            if (userAgent.indexOf("mobile") != -1) {
                sp[sp.length - 2] = "720px";
                var text = sp.join('/');
                location.href = text;
            }
            else {
                sp[sp.length - 2] = "1280px";
                var text = sp.join('/');
                location.href = text;
            }
        }
    }
    else if (720 <= pixelResolutionWidth) {
        if (pathName != "720px") {
            sp[sp.length - 2] = "720px";
            var text = sp.join('/');
            location.href = text;
        }
    }
    else {
        if (pathName != "320px") {
            sp[sp.length - 2] = "320px";
            var text = sp.join('/');
            location.href = text;
        }
    }
};