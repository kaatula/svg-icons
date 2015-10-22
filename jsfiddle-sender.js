(function() {
    var $iconsLink = $("link[rel=svg-icons]");
    if ($iconsLink.length != 1) {
        throw "SVG icons are not linked";
    }

    var $iconsLoading = $.get($iconsLink.attr("href"));

    $.when($iconsLoading, $.ready).then(function(results) {
        var assets = new XMLSerializer().serializeToString(results[0].documentElement);
        var $form = $("<form method='post' action='http://jsfiddle.net/api/post/jquery/2.1.3/dependencies/more/' target='check'></form>");


        $form.append($("<button/>", {
            "class": 'btn btn-primary',
            "type": "submit",
            text: "Показать на JS Fiddle"
        }));

        $("body").append($form);
        var htmlBody = $("#panel").html();
        htmlBody += "<!--"
        for (var i = 0; i < 20; i++)
            htmlBody += "  ↓\r\n";
        htmlBody += "Ты нашёл котика!\r\nКотик должен быть в ДОМе; обычно мы грузим его через AJAX, но это невозможно на JSFiddle -->\r\n" + assets;

        var fiddleData = {
            "html": htmlBody, 
            "css": $("#catstyles").html(),
            "js": $("#catscripts").html(), 
            "title": $("head title").text(), 
            "description": document.URL,
            "resources": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
        };

        Object.keys(fiddleData).forEach(function(key) {
            $form.append($("<input/>", {
                name: key,
                type: "hidden",
                value: fiddleData[key]
            }));
        });
    });

})();
