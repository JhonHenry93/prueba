var width = document.documentElement.clientWidth;

console.log("width pantalla :", width);
var stickyFooter = document.getElementById("footer-sticky");

var myScrollFunc = function() {
    var y = window.scrollY;

    if (width > 580) {
        if (y >= 50 && y <= 900) {
            stickyFooter.classList.remove("hide");
        } else {
            stickyFooter.classList.add("hide");
        }
    } else {
        if (y >= 50 && y <= 2000) {
            stickyFooter.classList.remove("hide");
        } else {
            stickyFooter.classList.add("hide");
        }
    }


};

window.addEventListener("scroll", myScrollFunc);


/* peticiones */
$("#btn-enviar").on("click", function() {

    /*
    var info = {
        "action": "getUserforCredential",
        "key": "vJvRvPR30X4I81PoIfjB4Azl6Etcjs8EZslj70cVO4rKT4Yqa7R2websJusSLrkyHuHCkInWCCxkxjyvhfnBkmTTEbzfqJEV3bneJy0a1limvGFAJQ1T2IAwHZAWz4Hq",
        "ipAddress": "127.0.0.1",
        "data": {
            "typeCredential": 2,
            "credential": "10266797"
        }
    };

    var settings = {
        url: "http://209.45.29.66:82/crm_gerens/webGateEnrolamientoCursos.php",
        method: "POST",
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
            'Access-Control-Allow-Headers': 'application/json',
        },
        contentType: 'application/json',
        data: JSON.stringify(info)
    }

    $.ajax(settings).done(function(response) {
        console.log(response);
    }); */

    var data = JSON.stringify({
        "action": "getUserforCredential",
        "key": "vJvRvPR30X4I81PoIfjB4Azl6Etcjs8EZslj70cVO4rKT4Yqa7R2websJusSLrkyHuHCkInWCCxkxjyvhfnBkmTTEbzfqJEV3bneJy0a1limvGFAJQ1T2IAwHZAWz4Hq",
        "ipAddress": "127.0.0.1",
        "data": {
            "typeCredential": 2,
            "credential": "10266797"
        }
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://209.45.29.66:82/crm_gerens/webGateEnrolamientoCursos.php");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

});