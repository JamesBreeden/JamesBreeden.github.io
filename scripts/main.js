$(window).on("scroll", function() {
            var headerHeight = document.getElementById('header').clientHeight;
            var fromTop = $(window).scrollTop();
            $("navSection").toggleClass("sticky", (fromTop > headerHeight));
        });
