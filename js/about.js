const blue = '#3F99FF';
const featured = '#C9DAF7';


$(document).ready(function() {
	
	$(window).bind('load', function() {
		init();
	});
	
	$( window ).resize(function() {
		detect_window();
	});
	
});

function goBack() {
    window.history.back();
}

function detect_window() {
	
	// workaround for mobile svg support
	if ($(window).width() <= 550) {
		$('#logo-img').attr('src', 'img-min/logo.png');
	} else {
		$('#logo-img').attr('src', 'img-min/logo.svg');
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
				bgcolor: '#e3e6ee',
				direction: 'bt',
				delay: 500,
				duration: 500,
				easing: 'easeInOutQuint',
				onCover: function(contentEl, revealerEl) {
					contentEl.style.opacity = 1;
				}
			}
		});
	
	$('.profile-img').attr('src', 'img-min/profile/profile-' + (Math.floor(Math.random() * 3) + 1) + '.JPG');
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
			targets: '.des-p',
			opacity: 1,
			duration: 800,
			offset: 1500,
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