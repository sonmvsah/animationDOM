function animation(str) {


    var x = setInterval(function() {

        var arr = [],
            str2, arr2 = [],
            i = 0;
        for (var item in str) {
            arr.push(str[item]);
        }

        var timer1 = setInterval(function() {
            arr2.push(arr[i++]);
            str2 = arr2.join("");
            console.log(str2);

        }, 200);

        var b = setTimeout(function() {

            clearInterval(timer1);
        }, 300 * str.length)


    }, 300 * str.length);
}

animation("MAi Viet Son");