$(function () {

    $('#logo').on('click', function (e) {
        e.preventDefault();
        console.log("clicked logo")

        let count = 0;
        count++;

        if (count < 10) {

            let a, b, c;
            let newa, newb, newc;

            a = 230;
            b = 240;
            c = 228;
            newa -= 15;
            newb += 15;
            newc -= 15;
            $('body').css('background-color', 'rgb(newa, newb, newc)');

            a = 200;
            b = 233;
            c = 167;
            $('nav').css('background-color', 'rgb(calc(a*0.95), calc(b*1.05), calc(c*0.95))');

            a = 200;
            b = 233;
            c = 167;
            $('footer').css('background-color', 'rgb(calc(a*0.95), calc(b*1.05), calc(c*0.95))');

            a = 93;
            b = 184;
            c = 102;
            $('.bottomicons:hover').css('background-color', 'rgb(calc(a*0.95), calc(b*1.05), calc(c*0.95))');

            a = 60;
            b = 115;
            c = 41;
            $('.options:hover').css('background-color', 'rgb(calc(a*0.95), calc(b*1.05), calc(c*0.95))');

        } else {
            count = 0;
            let a, b, c;

            a = 230;
            b = 240;
            c = 228;
            $('body').css('background-color', 'rgb(a, b, c)');

            a = 200;
            b = 233;
            c = 167;
            $('nav').css('background-color', 'rgb(a, b, c)');

            a = 200;
            b = 233;
            c = 167;
            $('footer').css('background-color', 'rgb(a, b, c)');

            a = 93;
            b = 184;
            c = 102;
            $('.bottomicons:hover').css('background-color', 'rgb(a, b, c)');

            a = 60;
            b = 115;
            c = 41;
            $('.options:hover').css('background-color', 'rgb(a, b, c)');

        }

    })

});