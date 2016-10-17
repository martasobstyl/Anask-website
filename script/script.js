/**
 * Created by ASUS on 2016-06-03.
 */
$(document).ready(function () {
    $('nav a').click(function () {
        $('div').removeClass('selected, no-selected');
        $('#about, #offer, #gallery, #contact, div.bar').addClass('no-selected');
        $('#home').addClass('selected');
        $('nav ul li a').removeClass('active');
        $('.main').addClass('active')
    });

    $('nav ul li a').click(function () {
        var choice = $(this).attr("href");

        $('body > div').removeClass('selected').addClass('no-selected');
        $(choice).removeClass('no-selected').addClass('selected');
        $('nav ul li a').removeClass('active');
        $(this).addClass('active')

    });

    $('nav .bar').click (function () {
        $('#menu').slideToggle();
    });

    var scrollTrigger = 170,
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });


    $('#submit').click(function () {
        $('#formularz').submit(function (event) {
            event.preventDefault();
            var data = {
                name: $('input#name').val(),
                email: $('input#email').val(),
                message: $('textarea#message').val()
            };

            $.ajax({
                url: 'form.php',
                type: 'post',
                dataType: 'json',
                data: data,
                success: function () {
                }
            });
            $('#formularz')[0].reset();
            alert('Dziękujemy za przesłanie formularza. Skontaktujemy się z Państwem w najbliższym czasie.');
        });
    });
});