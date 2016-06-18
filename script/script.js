/**
 * Created by ASUS on 2016-06-03.
 */
$(document).ready(function () {
    $('nav a').click(function () {
        $('div').removeClass('selected, no-selected');
        $('#about, #offer, #gallery, #contact').addClass('no-selected');
        $('#home').addClass('selected');
        $('nav ul li a').removeClass('active');
        $('.main').addClass('active')
    });

    $('nav ul li a').click(function () {
        var choice = $(this).attr("href");

        if (choice === "#home") {
            $('div').removeClass('selected, no-selected');
            $('div.about, div.offer, div.gallery, div.contact').addClass('no-selected');
            $('.home').addClass('selected');
            $('nav ul li a').removeClass('active');
            $(this).addClass('active')
        }

        else if (choice === "#about") {
            $('div').removeClass('selected, no-selected');
            $('div.home, div.offer, div.gallery, div.contact').addClass('no-selected');
            $('.about').addClass('selected');
            $('nav ul li a').removeClass('active');
            $(this).addClass('active')
        }

        else if (choice === "#offer") {
            $('div').removeClass('selected, no-selected');
            $('div.home, div.about, div.gallery, div.contact').addClass('no-selected');
            $('.offer').addClass('selected');
            $('nav ul li a').removeClass('active');
            $(this).addClass('active')
        }

        else if (choice === "#gallery") {
            $('div').removeClass('selected, no-selected');
            $('div.home, div.about, div.offer, div.contact').addClass('no-selected');
            $('.gallery').addClass('selected');
            $('nav ul li a').removeClass('active');
            $(this).addClass('active')
        }

        else if (choice === "#contact") {
            $('div').removeClass('selected, no-selected');
            $('div.home, div.about, div.offer, div.gallery').addClass('no-selected');
            $('.contact').addClass('selected');
            $('nav ul li a').removeClass('active');
            $(this).addClass('active')
        }
    })
});