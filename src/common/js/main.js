window.onload = function () {

    var pixelResolutionWidth = window.screen.width * devicePixelRatio;

    var path = location.pathname;
    var sp = location.href.split("/");

    console.log("path：" + path);
    console.log("href：" + location.href);

    var pathName = sp[sp.length - 2];
    console.log(pathName);

    var link = "";
    if (1280 <= pixelResolutionWidth) {
        // 現在のページが1280px以外だったら
        if (pathName != "1280px") {
            var userAgent = window.navigator.userAgent.toLowerCase();
            if (userAgent.indexOf("mobile") != -1) {
                sp[sp.length - 2] = "720px";
            }
            else {
                sp[sp.length - 2] = "1280px";
            }
        }
    }
    else if (720 <= pixelResolutionWidth) {
        if (pathName != "720px") {
            sp[sp.length - 2] = "720px";
        }
    }
    else {
        if (pathName != "320px") {
            sp[sp.length - 2] = "320px";
        }
    }

    var text = sp.join('/');
    console.log(text);

};