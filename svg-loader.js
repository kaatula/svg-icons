
var embedSvg = function () {
    var $iconsLink = $("link[rel=svg-icons]");
    if($iconsLink.length != 1) {
        throw "SVG icons are not linked";
    }
    $.get($iconsLink.attr("href")).done(function(content) {
        document.body.appendChild(content.childNodes[1]);
    });
}
//embedSvg();

$.get("/icons.svg").done(function(content) {
    document.body.appendChild(content.childNodes[1]);
});