window.onload = function () {

    var pixelResolutionWidth = window.screen.width * devicePixelRatio;

    var path = location.pathname;
    var sp = location.href.split("/");

    console.log("path：" + path);
    console.log("href：" + location.href);

    var pathName = sp[sp.length - 2];
    console.log(pathName);

    var link = "";
    //     if (1280 <= pixelResolutionWidth) {
    //         // 現在のページが1280px以外だったら
    //         if (pathName != "1280px") {
    //             var userAgent = window.navigator.userAgent.toLowerCase();
    //             if (userAgent.indexOf("mobile") != -1) {
    //                 link = 'src/720px/tab01.html';
    //             }
    //             else {
    //                 link = 'src/1280px/tab01.html';
    //             }
    //         }
    //     }
    //     else if (720 <= pixelResolutionWidth) {
    //         if (pathName != "720px") {
    //             link = 'src/720px/tab01.html';
    //         }
    //     }
    //     else {
    //         if (pathName != "320px") {
    //             link = 'src/320px/tab01.html';
    //         }
    //     }
    //     location.pathname = "../";
};