var embedSvg = function () {
    var $iconsLink = $("link[rel=svg-icons]");
    if($iconsLink.length != 1) {
        throw "SVG icons are not linked";
    }
    return $.get($iconsLink.attr("href")).done(function(content) {
        document.body.appendChild(content.childNodes[1]);
    });
}

var $iconsLoading = embedSvg();

$.when($iconsLoading, $.ready).then(function () {
	$("body").append("<form method='post' action='http://jsfiddle.net/api/post/jquery/2.1.3/dependencies/more/' target='check'>        <button class='btn btn-primary' type='submit'>Показать на JS Fiddle</button>        <input name='html' type='hidden' value=''>        <input name='js' type='hidden' value=''>        <input name='css' type='hidden' value=''>    </form>");
	var htmlBody = $("#panel").html();
	for(var i = 0;i<20;i++)
		htmlBody += "\r\n";
	htmlBody += "<!-- Embedded assets.svg file with collection of icons -->" + $("svg").last()[0].outerHTML;


	$("input[name=html]").val(htmlBody);
    $("input[name=css]").val($("#catstyles").html());
    $("input[name=js]").val($("#catscripts").html());
});

//Или просто захардкодить...
//$.get("icons.svg").done(function(content) {
//    document.body.appendChild(content.childNodes[1]);
//});
