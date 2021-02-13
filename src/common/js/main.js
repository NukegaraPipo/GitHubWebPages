window.onload = function () {

    var pixelResolutionWidth = window.screen.width * devicePixelRatio;

    var url = location.href;
    var path = location.pathname;

    var ida = location.search;

    var sp = location.href.split("/");

    console.log("location：" + url);
    console.log("patu：" + path);
    var pathName = sp[sp.length - 2]
    console.log(pathName);
    var link = '/src/720px/tab01.html';

};