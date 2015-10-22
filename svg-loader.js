var embedSvg = function() {
    var $iconsLink = $("link[rel=svg-icons]");
    if ($iconsLink.length != 1) {
        throw "SVG icons are not linked";
    }
    $.when($.get($iconsLink.attr("href")), $.ready).done(function(results) {
        var div = document.createElement("div");
        div.style.display = "none";
        div.innerHTML = new XMLSerializer().serializeToString(results[0].documentElement);
        document.body.insertBefore(div, document.body.childNodes[0]);

    });
}

embedSvg();

//Или просто захардкодить...
//$.get("icons.svg").done(function(content) {
//    document.body.appendChild(content.childNodes[1]);
//});
