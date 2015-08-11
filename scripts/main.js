$(window).on("scroll", function() {
            var headerHeight = document.getElementById('header').clientHeight;
            var fromTop = $(window).scrollTop();
            $("header").toggleClass("sticky", (fromTop > headerHeight));
        });
