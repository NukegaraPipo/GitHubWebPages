// グラフの表示設定
var width = 320;
var height = 320;
var id = "";
var magni = 1;
// ワードクラウドの表示メソッド
function LoadWordCloud() {
    // $('#resolution').text("端末の解像度は：" + window.screen.width * devicePixelRatio);
    ResolutionChange();
    // ローカルで見るとき用のリンク
    $.getJSON('https://nukegarapipo.github.io/GitHubWebPages/src/common/json/word01.json', (data) => {
        // $.getJSON('../common/json/words.json', (data) => {
        layout(data, "#wordcloud01");
    });
    $.getJSON('https://nukegarapipo.github.io/GitHubWebPages/src/common/json/word02.json', (data) => {
        // $.getJSON('../common/json/words.json', (data) => {
        layout(data, "#wordcloud02");
    });
    $.getJSON('https://nukegarapipo.github.io/GitHubWebPages/src/common/json/word03.json', (data) => {
        // $.getJSON('../common/json/words.json', (data) => {
        layout(data, "#wordcloud03");
    });
}

// ワードクラウドのサイズを変更
function ResolutionChange() {
    var pixelResolutionWidth = window.screen.width * devicePixelRatio;
    if (1280 <= pixelResolutionWidth) {
        width = 856;
        height = 450;
        magni = 3;
    }
    else if (720 <= pixelResolutionWidth) {
        width = 560;
        height = 305;
        magni = 2;
    }
    else {
        width = 255;
        height = 200;
        magni = 1;
    }
}

// 描画設定
function layout(words, tagId) {
    for (var i = 0; i < words.length; i++) {
        words[i]['size'] *= magni;
    }
    id = tagId;

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
    d3.select(id)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .attr("display", "inline-flex")
        .selectAll("text")
        .data(words)
        .enter().append("text")
        .style("font-size", d => d.size + "px")
        .style("font-family", "Impact")
        .style("fill", () => d3.schemeSet2[Math.floor(Math.random() * 10) % 7])
        .attr("text-anchor", "middle")
        .style("cursor", "default")
        .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text(d => d.text);
}