window.addEventListener('DOMContentLoaded', function () {
    var pixelResolutionWidth = window.screen.width * devicePixelRatio;
    var sp = location.href.split("/");
    var pathName = sp[sp.length - 2];

    if (1280 <= pixelResolutionWidth) {
        if (pathName != "pc") {
            var userAgent = window.navigator.userAgent.toLowerCase();
            if (userAgent.indexOf("mobile") != -1) {
                sp[sp.length - 2] = "tl";
                location.href = sp.join('/');;
            }
            else {
                sp[sp.length - 2] = "pc";
                location.href = sp.join('/');;
            }
        }
    }
    else if (720 <= pixelResolutionWidth) {
        if (pathName != "tl") {
            sp[sp.length - 2] = "tl";
            location.href = sp.join('/');;
        }
    }
    else {
        if (pathName != "sp") {
            sp[sp.length - 2] = "sp";
            location.href = sp.join('/');;
        }
    }
});