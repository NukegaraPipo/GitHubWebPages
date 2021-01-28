window.onload = function () {
    // ページ読み込み時に実行したい処
    $('#resolution').text("解像度：" + window.screen.availWidth);
    $.getJSON('../../json/words.json', (data) => {
        console.log(data);
        for (var item in data) {
            console.log(data[item]);
            console.log(data[item]['size']);
        }
        layout(data);
    });
}
