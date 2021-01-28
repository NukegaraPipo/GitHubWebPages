window.onload = function () {
    // ページ読み込み時に実行したい処
    $('#resolution').text("解像度：" + window.screen.availWidth);
    // ローカルで見るとき用のリンク
    // $.getJSON('https://nukegarapipo.github.io/GitHubWebPages/src/common/json/words.json', (data) => {
    $.getJSON('../common/json/words.json', (data) => {
        for (var item in data) {
            console.log(data[item]);
            console.log(data[item]['size']);
        }
        layout(data);
    });
}

// グラフの表示設定
var width = 320;
var height = 320;

function layout(words) {
    for (var i = 0; i < words.length; i++) {
        words[i]['size'] *= 1.1;
    }

    d3.layout.cloud()
        .size([width, height])
        // wordsメソッドに送るwordsを整形している
        .words(words.map(d => { return { "text": d.text, "size": d.size, "url": d.url }; }))
        .padding(2)
        .rotate(() => ~~Math.random() * 2)
        .font("Impact")
        .fontSize(d => d.size)
        .on("end", draw)
        .start();
}

// layoutの出力を受け取り単語を描画
function draw(words) {
    d3.select("#wordcloud")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", d => d.size)
        .style("font-family", "Impact")
        .style("fill", () => d3.schemeSet2[Math.floor(Math.random() * 10) % 7])
        .attr("text-anchor", "middle")
        .style("cursor", "pointer")
        .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text(d => d.text)
        .on("click", d => window.open(d.url, "_blank"));
}