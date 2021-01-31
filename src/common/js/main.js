// グラフの表示設定
var width = 320;
var height = 320;

// ワードクラウドの表示メソッド
function LoadWordCloud() {
    $('#resolution').text("端末の解像度は：" + window.screen.width * devicePixelRatio);
    var pixelResolutionWidth = window.screen.width * devicePixelRatio;

    if (1200 <= pixelResolutionWidth) {
        console.log("1200通った");
        width = 1200;
        height = 1200;
    }
    else if (720 <= pixelResolutionWidth) {
        console.log("720通った");
        width = 720;
        height = 720;
    }
    else {
        console.log("320通った");
        width = 320;
        height = 320;
    }
    // ローカルで見るとき用のリンク
    //$.getJSON('https://nukegarapipo.github.io/GitHubWebPages/src/common/json/words.json', (data) => {
    $.getJSON('../common/json/words.json', (data) => {
        layout(data);
    });
}

function layout(words) {
    for (var i = 0; i < words.length; i++) {
        words[i]['size'] *= 5;
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
        .style("font-size", d => d.size + "px")
        .style("font-family", "Impact")
        .style("fill", () => d3.schemeSet2[Math.floor(Math.random() * 10) % 7])
        .attr("text-anchor", "middle")
        .style("cursor", "pointer")
        .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
        .text(d => d.text)
        .on("click", d => window.open(d.url, "_blank"));
}