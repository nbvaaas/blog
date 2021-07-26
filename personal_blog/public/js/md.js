function mdSwitch() {
    var mdValue = document.getElementById("md-area").value;
    var converter = new showdown.Converter();
    var html = converter.makeHtml(mdValue);
    document.getElementById("show-area").innerHTML = html;
}