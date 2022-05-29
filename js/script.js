/*==================================
            Preloader
====================================*/
$(window).on("load", function () {
    $('#preloader').fadeOut('slow');
    $('#status').fadeOut();
});

/*==================================
            progress bar
====================================*/

$(function () {
    $("#progressbar-element").waypoint(function () {
        $(function () {
            $(".progress-bar").each(function () {
                $(this).animate({
                    width: $(this).attr("aria-valuenow") + "%"
                });
            },2000);
        });
        this.destroy();
    }, {
        offset: "bottom-in-view"
    });
});


/*==================================
            responsive tabs
====================================*/

$(function () {
    $("#service-tabs").responsiveTabs({
        animation: 'slide'
    });
});


/*==================================
            protfolio
====================================*/

$(window).on('load', function () {

    var $projects = $('#isotope-container');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    //filter items on button click
    $('#isotope-filter').on('click', 'button', function () {

        //get filter value
        var jk = $(this).attr('data-filter');

        //filter protfolio
        $projects.isotope({
            filter: jk,
        });

        //active button
        $('#isotope-filter').find('.active').removeClass('active');
        $(this).addClass('active');

    });
});

/*==================================
           Navigation
====================================*/

//show and hide white nav
$(function () {

    $(window).scroll(function () {


        if ($(window).scrollTop() > 80) {

            //show white nav
            $("nav").addClass("white-nav-top");

            //add dark image
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //show back top button
            $("#back-to-top").fadeIn();

        } else {

            //hide white nav
            $("nav").removeClass("white-nav-top");

            //hide dark image
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //hide back top button
            $("#back-to-top").fadeOut();
        }

    });
});

/*smooth scrolling*/

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section_id = $(this).attr("href");


        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 60
        }, 1250, "easeInOutExpo");

    });
});


/*==================================
           Mobile Nav
====================================*/

$(function () {

    //show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%")
    });

    //hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%")
    });
});


/*==================================
            text animation
====================================*/

$(function () {
    
    // function([string1, string2],target id,[color1,color2])    
 consoleText(['Frontend Web Developer','Freelancer'], 'home-text',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 1800)
}
    
});

/*==================================
           Animation
====================================*/


//Animate on scroll
$(function () {
    new WOW().init();
});

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#Arrow-down i").addClass("animated fadeInDown infinite");
});