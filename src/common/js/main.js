window.addEventListener('DOMContentLoaded', function () {
    var pixelResolutionWidth = window.screen.width * devicePixelRatio;
    var sp = location.href.split("/");
    var pathName = sp[sp.length - 2];

    // if (1280 <= pixelResolutionWidth) {
    //     if (pathName != "1280px") {
    //         var userAgent = window.navigator.userAgent.toLowerCase();
    //         if (userAgent.indexOf("mobile") != -1) {
    //             sp[sp.length - 2] = "720px";
    //             location.href = sp.join('/');;
    //         }
    //         else {
    //             sp[sp.length - 2] = "1280px";
    //             location.href = sp.join('/');;
    //         }
    //     }
    // }
    // else if (720 <= pixelResolutionWidth) {
    //     if (pathName != "720px") {
    //         sp[sp.length - 2] = "720px";
    //         location.href = sp.join('/');;
    //     }
    // }
    // else {
    //     if (pathName != "320px") {
    //         sp[sp.length - 2] = "320px";
    //         location.href = sp.join('/');;
    //     }
    // }
});