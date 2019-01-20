const blue = '#3F99FF';
const featured = '#ff4043';


$(document).ready(function() {

	$(window).bind('load', function() {
		init();
	});

	$( window ).resize(function() {
		detect_window();
	});
/*

	smoothScroll.init({
	    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
	    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
	    speed: 800, // Integer. How fast to complete the scroll in milliseconds
	    easing: 'easeInOutCubic', // Easing pattern to use
	    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels
	});
	ts
	var blazy = new Blazy({
		selector: ['.lazyload-img', '.lazyload-collection'],
		offset: 2000,
		loadInvisible: true
	});

	var grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true,
	});

	grid.imagesLoaded().done(function() {
		grid.masonry('layout');
		//grid.masonry('reloadItems');
		//lazyLoad();
	});
*/

});

function detect_window() {

	// workaround for mobile svg support
	if ($(window).width() <= 550) {
		$('#logo-img').attr('src', 'img-min/logo.png');
		$('.arrow-down').attr('href', '#row-0');
	} else {
		$('#logo-img').attr('src', 'img-min/logo.png');
		$('.arrow-down').attr('href', '#row-1');
	}
}

function init() {
	animate_revealer();
	animate_text();
	detect_window();
}

function animate_revealer() {
		var rev_logo = new RevealFx(document.querySelector('#rev-logo'), {
			revealSettings : {
				bgcolor: blue,
				direction: 'lr',
				delay: 1500,
				duration: 250,
				easing: 'easeInOutQuint',
				onCover: function(contentEl, revealerEl) {
					contentEl.style.opacity = 1;
				}
			}
		});

	rev_logo.reveal();

	var rev_featured = new RevealFx(document.querySelector('#rev-featured'), {
			revealSettings : {
				bgcolor: featured,
				direction: 'bt',
				delay: 500,
				duration: 500,
				easing: 'easeInOutQuint',
				onCover: function(contentEl, revealerEl) {
					contentEl.style.opacity = 1;
				}
			}
		});

	$('.featured-img').attr('src', 'img-min/project-cover/featured-0.jpg');
	rev_featured.reveal();
}

function animate_text() {
	var textTimeline = anime.timeline({
	  //direction: 'alternate',
	  loop: false,
	});

	textTimeline
		.add({
			targets: '.title-1',
			rotate: [1.5, 0],
			opacity: 1,
			duration: 500,
			delay: 1000,
			easing: 'easeInOutSine',
		})
		.add({
			targets: '.title-2',
			rotate: [1.5, 0],
			opacity: 1,
			duration: 500,
			offset: 1100,
			easing: 'easeInOutSine',
		})
		.add({
			targets: '.title-3',
			rotate: [1.5, 0],
			opacity: 1,
			duration: 500,
			offset: 1200,
			easing: 'easeInOutSine',
		})
		.add({
			targets: '.nav-arrow',
			opacity: 1,
			duration: 200,
			offset: 1500,
			easing: 'easeInOutSine',
		})
}
