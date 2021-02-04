$(function() {


    var h1 = document.getElementsByClassName("h1");
    var x = setInterval(function() {

        var arrH1 = [];
        for (var item in h1[0].innerText) {
            arrH1.push(h1[0].innerText[item])
        }
        var h2 = [];
        var i = 0;
        var timer = setInterval(function() {
            h2.push(arrH1[i++]);
            if (i <= arrH1.length - 1) {
                h1[0].innerText = h2.join("") + "_";
            } else {
                h1[0].innerText = h2.join("");
            }
        }, 100);
        var b = setTimeout(function() {
            clearInterval(timer);
        }, 150 * h1[0].innerText.length);
    }, 150 * h1[0].innerText.length);






    // var h1 = document.getElementsByTagName("h1");
    var x = setInterval(function() {

        var arrH1 = [];
        for (var item in h1[1].placeholder) {
            arrH1.push(h1[1].placeholder[item])
        }
        var h2 = [];
        var i = 0;
        var timer = setInterval(function() {
            h2.push(arrH1[i++]);
            if (i <= arrH1.length - 1) {
                h1[1].placeholder = h2.join("") + "_";
            } else {
                h1[1].placeholder = h2.join("");
            }
        }, 100);
        var b = setTimeout(function() {
            clearInterval(timer);
        }, 150 * h1[1].placeholder.length);
    }, 150 * h1[1].placeholder.length);








});