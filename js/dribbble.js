const blue = "#3F99FF";
const featured = "#C9DAF7";
let shots = [];

$(document).ready(function() {
  $(window).bind("load", function() {
    init();
    loadShots();
  });

  $(window).resize(function() {
    detect_window();
  });
});

function goBack() {
  window.history.back();
}

function detect_window() {
  // workaround for mobile svg support
  if ($(window).width() <= 550) {
    $("#logo-img").attr("src", "../img-min/logo.png");
  } else {
    $("#logo-img").attr("src", "../img-min/logo.png");
  }
}

function init() {
  animate_revealer();
  animate_text();
  detect_window();
}

function animate_revealer() {
  var rev_logo = new RevealFx(document.querySelector("#rev-logo"), {
    revealSettings: {
      bgcolor: blue,
      direction: "lr",
      delay: 1500,
      duration: 250,
      easing: "easeInOutQuint",
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    }
  });

  rev_logo.reveal();
}

function animate_text() {
  var textTimeline = anime.timeline({
    //direction: 'alternate',
    loop: false
  });

  textTimeline
    .add({
      targets: ".title-1",
      rotate: [1.5, 0],
      opacity: 1,
      duration: 500,
      delay: 1000,
      easing: "easeInOutSine"
    })
    .add({
      targets: ".title-2",
      rotate: [1.5, 0],
      opacity: 1,
      duration: 500,
      offset: 1100,
      easing: "easeInOutSine"
    })
    .add({
      targets: ".title-3",
      rotate: [1.5, 0],
      opacity: 1,
      duration: 500,
      offset: 1200,
      easing: "easeInOutSine"
    })
    .add({
      targets: ".des-p",
      opacity: 1,
      duration: 800,
      offset: 1500,
      easing: "easeInOutSine"
    })
    .add({
      targets: ".nav-arrow",
      opacity: 1,
      duration: 200,
      offset: 1500,
      easing: "easeInOutSine"
    });
}

function loadShots() {
  // set access token
  let accessToken =
    "044d748c2b4fe57d69e45ae8b439916bf95b7246274cb26e35c68a9dbf45740a";
  // call dribble v2 api
  $.ajax({
    url: "https://api.dribbble.com/v2/user/shots?access_token=" + accessToken,
    dataType: "json",
    type: "GET",
    success: function(data) {
      if (data.length > 0) {
        data = data.filter(val => val.projects.length);
        $.each(data.reverse(), function(i, val) {
          console.log(val.projects);
          $("#shots").prepend(
            '<div class="shot col-4"><img src="' +
              val.images.hidpi +
              '" data-action="zoom"/>' +
              '<p class="dribbble-p">' +
              val.title +
              "<br>" +
              "<span class='project-tag'>" +
              val.projects.map(el => "#" + el.name) +
              "</span>" +
              "</p>" +
              "</div>"
          );
        });
      } else {
        $("#shots").append("<p>No shots yet!</p>");
      }
    }
  });
}
