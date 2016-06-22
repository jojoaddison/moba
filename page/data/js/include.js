(jQuery)(function ($) {

    // MAIN NAVIGATION
     $('.nav .dropdown').hover(function() {
            $(this).find('ul:first').css({
                visibility: "visible",
                display: "none"
            }).fadeIn(300);
        }, function() {
            $(this).find('ul:first').css({
                display: "none"
            });
        });

    // RESPONSIVE NAVIGATION
    $(function () {
        $('#dl-menu').dlmenu({
            animationClasses: {
                classin: 'dl-animate-in-2',
                classout: 'dl-animate-out-2'
            }
        });
    });


    // SEARCH ANIMATION
    $('#header').on('click', '#search', function (e) {
        e.preventDefault();

        $(this).find('#m_search').fadeIn().focus();
    });

    $('#m_search').focusout(function (e) {
        $(e.target).fadeOut();
    });

    $(window).resize(function () {
        if (!is_touch_device()) {
            // SOLID HEADER  - TRANSPARENT HEADER
            (function () {
                var window_y = $(document).scrollTop();
                if (window_y > 0) {
                    set_static_header(1);
                }
            })();

            function set_static_header(position) {
                var header_height = $("#header-wrapper.header-transparent").height();
                if (position > header_height) {
                    $("#header-wrapper.header-transparent").addClass("solid-color");
                } else {
                    $("#header-wrapper.header-transparent").removeClass("solid-color");
                }

            }

            $(window).scroll(function () {
                var position = $(this).scrollTop();
                set_static_header(position);
            });

            var headerWwrapperHeight = $('#header-wrapper').height();
            $('#header-wrapper').next().css('margin-top', headerWwrapperHeight);
        }
    });

    // CONTENT TABS
    (function () {
        $('.tabs').each(function () {
            var $tabLis = $(this).find('li');
            var $tabContent = $(this).next('.tab-content-wrap').find('.tab-content');

            $tabContent.hide();
            $tabLis.first().addClass('active').show();
            $tabContent.first().show();
        });

        $('.tabs').on('click', 'li', function (e) {
            var $this = $(this);
            var parentUL = $this.parent();
            var tabContent = parentUL.next('.tab-content-wrap');

            parentUL.children().removeClass('active');
            $this.addClass('active');

            tabContent.find('.tab-content').hide();
            var showById = $($this.find('a').attr('href'));
            tabContent.find(showById).fadeIn();

            e.preventDefault();
        });
    })();

    // TWEETSCROLL PLUGIN 
    $('.tweets-list-container').tweetscroll({
        username: 'pixel_industry',
        limit: 20,
        replies: true,
        position: 'append',
        animation: 'fade',
        date_format: 'style1',
        visible_tweets: 2,
        request_url: "js/twitter/tweets.php",
        delay: 7000,
        logo: false,
        profile_image: true
    }); // TWEETSCROLL END

    //ACCORDION
    (function () {
        'use strict';
        $('.accordion').on('click', '.title', function (event) {
            event.preventDefault();
            $(this).siblings('.accordion .active').next().slideUp('normal');
            $(this).siblings('.accordion .title').removeClass("active");

            if ($(this).next().is(':hidden') === true) {
                $(this).next().slideDown('normal');
                $(this).addClass("active");
            }
        });
        $('.accordion .content').hide();
        $('.accordion .active').next().slideDown('normal');
    })();


    (function () {
        // INFORMATION BOXES 
        $('.information-boxes .close').on('click', function () {
            $(this).parent().slideUp(300);
        });
    })();


    // SCROLL TO TOP 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('.scroll-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    // NEWSLETTER FORM AJAX SUBMIT
    $('.newsletter .submit').on('click', function (event) {
        event.preventDefault();
        var email = $(this).siblings('.email').val();
        var form_data = new Array({'Email': email});
        $.ajax({
            type: 'POST',
            url: "contact.php",
            data: ({'action': 'newsletter', 'form_data': form_data})
        }).done(function (data) {
            alert(data);
        });
    });


    // function to check is user is on touch device
    if (!is_touch_device()) {
        // ANIMATION FOR CONTENT
        $.stellar({
            horizontalOffset: 0,
            horizontalScrolling: false
        });

        // ANIMATED CONTENT
        if ($(".animated")[0]) {
            jQuery('.animated').css('opacity', '0');
        }

        var currentRow = -1;
        var counter = 1;

        $('.triggerAnimation').waypoint(function () {
            var $this = $(this);
            var rowIndex = $('.row').index($(this).closest('.row'));
            if (rowIndex !== currentRow) {
                currentRow = rowIndex;
                $('.row').eq(rowIndex).find('.triggerAnimation').each(function (i, val) {
                    var element = $(this);
                    setTimeout(function () {
                        var animation = element.attr('data-animate');
                        element.css('opacity', '1');
                        element.addClass("animated " + animation);
                    }, (i * 250));
                });

            }

            //counter++;

        },
                {
                    offset: '70%',
                    triggerOnce: true
                }
        );

        $('.post-timeline-item').waypoint(function () {
            var timeline_animation = $(this).attr('data-animate');
            $(this).css('opacity', '');
            $(this).addClass("animated " + timeline_animation);
        },
                {
                    offset: '80%',
                    triggerOnce: true
                }
        );

    }
    ;

    // function to check is user is on touch device
    function is_touch_device() {
        return Modernizr.touch;
    }

    $('.call-to-action.contact').on("click", function (e) {
        e.preventDefault();
        $('#map').slideToggle("slow");
    });

    // Placeholder fix for old browsers
    $('input, textarea').placeholder();

    // HERO IMAGE PAGE TITLE 5
    $(window).resize(function () {
        var windowHeight = $(window).height();
        var inner_headerHeight = $('#header').height();
        $('.page-title-5').height(windowHeight - inner_headerHeight);

        // PROCES BOX CIRCLES 
        var processBox_width = $('.process-box-circle').width();
        $('.process-box-circle .icon-container').height(processBox_width - 40).css('width', processBox_width - 40);
        $('.process-box-circle .icon-container i').height(processBox_width - 40).css('width', processBox_width - 40);

    }).resize();
});


