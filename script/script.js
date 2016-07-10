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

        if (choice === "#home") {
            $('div').removeClass('selected, no-selected');
            $('div.about, div.offer, div.gallery, div.contact, div.bar').addClass('no-selected');
            $('.home').addClass('selected');
            $('nav ul li a').removeClass('active');
            $(this).addClass('active')
        }

        else if (choice === "#about") {
            $('div').removeClass('selected, no-selected');
            $('div.home, div.offer, div.gallery, div.contact, div.bar').addClass('no-selected');
            $('.about').addClass('selected');
            $('nav ul li a').removeClass('active');
            $(this).addClass('active')
        }

        else if (choice === "#offer") {
            $('div').removeClass('selected, no-selected');
            $('div.home, div.about, div.gallery, div.contact, div.bar').addClass('no-selected');
            $('.offer').addClass('selected');
            $('nav ul li a').removeClass('active');
            $(this).addClass('active')
        }

        else if (choice === "#gallery") {
            $('div').removeClass('selected, no-selected');
            $('div.home, div.about, div.offer, div.contact, div.bar').addClass('no-selected');
            $('.gallery').addClass('selected');
            $('nav ul li a').removeClass('active');
            $(this).addClass('active')
        }

        else if (choice === "#contact") {
            $('div').removeClass('selected, no-selected');
            $('div.home, div.about, div.offer, div.gallery, div.bar').addClass('no-selected');
            $('.contact').addClass('selected');
            $('nav ul li a').removeClass('active');
            $(this).addClass('active')
        }
    });

    function menuDropdown() {
        var switcher = true;
        $('nav .bar').click(function () {
            if (switcher == true) {
                $('#menu').slideDown();
                switcher = false;

            } else {
                $('#menu').slideUp();
                switcher = true;
            }
        });
    }
    menuDropdown();

    if ($('#back-to-top').length) {
        var scrollTrigger = 50,
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
    }

});
