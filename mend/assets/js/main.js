$(document).ready(function () {
    var changeSides = function () {
        $('.ui.shape')
            .eq(0)
            .shape('flip over')
            .end()
            .eq(1)
            .shape('flip over')
            .end()
            .eq(2)
            .shape('flip back')
            .end()
            .eq(3)
            .shape('flip back')
            .end();
    };
    
    setInterval(changeSides, 3000);
    
    $('.masthead .information').transition('scale in', 1000);
    
	/* Navbar animation */
	$(window).bind('mousewheel', function (event) {
	    if (event.originalEvent.wheelDelta >= 0) {
	        $('.fixed.top.menu').removeClass('slide up');
	    } else {
	        $('.fixed.top.menu').addClass('slide up');
	        $('.vertical.menu.collapse').removeClass('slide down');
	    }

	});

	/* Back to top fade */
	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
	    $('#toTop').hide();
	    if (scroll > 200) {
            $('#toTop').show();
	    } else {
            $('#toTop').hide();
	    }

	    if (scroll <= 8) {
            $('.fixed.top.menu').removeClass('slide up');
            $('.fixed.top.menu').addClass('slide down');
	    }
	});

	/* Scroll Event*/
    $('a[data-slide="slide"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 90
        }, 900, 'swing');
    });

	/* Responsive Event */
	var navbarMenu = $('.fixed.top.menu .center.menu').clone();
	$('.vertical.menu.collapse').html(navbarMenu);

	$('#trigger').click(function (e) {
		e.preventDefault();
		$('.vertical.menu.collapse').toggleClass('slide down');
	});
});