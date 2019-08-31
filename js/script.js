// menu

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });


// back to top button

var btn = $('#btt_button');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

// accordion on the elixir page

var section = $('li');

function toggleAccordion() {
  section.removeClass('active');
  $(this).addClass('active');
}

section.on('click', toggleAccordion);

setTimeout(function(){
  $( "div.elixir_text_opener" ).addClass( "fade" );
  setTimeout(function() { $( ".elixir_start" ).removeClass( "d-flex align-items-center"); }, 400);
  $( ".white_rejuvenate" ).delay(500).animate({ height: "0%"
}, 500, function() {
  });
  $( ".awaken_section" ).delay(600).addClass( "height_awaken");
  $( ".unwind_section" ).delay(600).addClass( "height_unwind");
  setTimeout(function() { $( ".awaken_section" ).removeClass( "offscreen_awaken"); }, 600);
  setTimeout(function() { $( ".unwind_section" ).removeClass( "offscreen_unwind"); }, 600);
  setTimeout(function() { $( "footer" ).removeClass( "none"); }, 1500);
  setTimeout(function() { $( ".need_sections" ).removeClass( "none"); }, 1000);
  $( ".need_sections" ).delay(1000).addClass( "flex");
  setTimeout(function() { $( "newsletter" ).removeClass( "none"); }, 1500);
  setTimeout(function() { $( ".elixir_start" ).addClass( "none"); }, 1000);
  $( ".hide_title" ).delay(1000).addClass( "title");
  setTimeout(function() { $( ".title" ).removeClass( "hide_title"); }, 1100);
}, 3000);


$("ul").click(function() {
  $("li").removeClass("height_awaken");
  $("li").removeClass("height_unwind");
  $("li").removeClass("height_rejuvenate");
  $(this).removeClass("overflow_hidden");
  $("aside").removeClass("aside_height");
});

$(".need_sections").click(function() {
  $("div.title").addClass("none");
});


$(".awaken_section").click(function() {
  $(this).removeClass("closed_column_width");
  $(".awaken-closed h1").removeClass("show_title").addClass("none");
  $(".rejuvenate-closed h1").removeClass("none").addClass("show_title");
  $(".unwind-closed h1").removeClass("none").addClass("show_title");
  $(".awaken_arrow_closed").addClass("none");
  $(".rejuvenate_arrow_closed").removeClass("none");
  $(".unwind_arrow_closed").removeClass("none");
  setTimeout(function(){
     $(".rejuvenate_section").addClass('closed_column_width');
  },300);
  setTimeout(function(){
     $(".unwind_section").addClass('closed_column_width');
  },300);
});

$(".rejuvenate_section").click(function() {
  $(this).removeClass("closed_column_width");
  $(".rejuvenate-closed h1").removeClass("show_title").addClass("none");
  $(".awaken-closed h1").removeClass("none").addClass("show_title");
  $(".unwind-closed h1").removeClass("none").addClass("show_title");
  $(".rejuvenate_arrow_closed").addClass("none");
  $(".awaken_arrow_closed").removeClass("none");
  $(".unwind_arrow_closed").removeClass("none");
  setTimeout(function(){
     $(".awaken_section").addClass('closed_column_width');
  },300);
  setTimeout(function(){
     $(".unwind_section").addClass('closed_column_width');
  },300);
});

$(".unwind_section").click(function() {
  $(this).removeClass("closed_column_width");
  $(".unwind-closed h1").removeClass("show_title").addClass("none");
  $(".rejuvenate-closed h1").removeClass("none").addClass("show_title");
  $(".awaken-closed h1").removeClass("none").addClass("show_title");
  $(".unwind_arrow_closed").addClass("none");
  $(".rejuvenate_arrow_closed").removeClass("none");
  $(".awaken_arrow_closed").removeClass("none");
  setTimeout(function(){
     $(".awaken_section").addClass('closed_column_width');
  },300);
  setTimeout(function(){
     $(".rejuvenate_section").addClass('closed_column_width');
  },300);
});

setTimeout(function(){
  $(".philosophy_elixir_image").addClass("philosophy_elixir_image_placement");
}, 1000);

var expandDiv = document.getElementById("quote");

function expanding() {
  var scrolltop = window.pageYOffset / 10; // get number of pixels document has scrolled vertically

  //Or using width
  $('.everything').css('padding-right',100 - scrolltop + 'px');
  $('.everything').css('padding-top',250 - scrolltop + 'px');
  $('.in').css('padding-top',0 - scrolltop + 'px');
  $('.nature').css('padding-left',200 - scrolltop + 'px');
  $('.nature').css('padding-top',300 - scrolltop + 'px');
  $('.invites').css('padding-left',150 - scrolltop + 'px');
  $('.invites').css('padding-top',25 - scrolltop + 'px');
  $('.us').css('padding-top',200 - scrolltop + 'px');
  $('.constantly').css('padding-top',380 - scrolltop + 'px');
  $('.constantly').css('padding-right',50 - scrolltop + 'px');
  $('.are').css('padding-top',400 - scrolltop + 'px');
  $('.we').css('padding-left',100 - scrolltop + 'px');
  $('.we').css('padding-top',230 - scrolltop + 'px');
  $('.what').css('padding-top',405 - scrolltop + 'px');
  $('.what').css('padding-left',150 - scrolltop + 'px');
  $('.be').css('padding-top',250 - scrolltop + 'px');
  $('.be').css('padding-left',150 - scrolltop + 'px');
  $('.to').css('padding-top',400 - scrolltop + 'px');
}

function expanding_logo(){
  var scrolltop = window.pageYOffset/ 80;
  $('.selected').css('height',64 - scrolltop + 'vh');
}


window.addEventListener('scroll', function() {
  requestAnimationFrame(expanding);
}, false);
window.addEventListener('scroll', function() {
  requestAnimationFrame(expanding_logo);
}, false);


$(document).ready(function() {
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if ( windowpos >= 100) {
      $('.everything, .constantly').css('padding-right',0 + 'px');
      $('.everything, .in, .nature, .us, .constantly, .are, .we, .be, .to, .what').css('padding-top',0 + 'px');
      $('.nature, .invites, .we, .what, .be').css('padding-left',0 + 'px');
		}
	});
});

$(document).ready(function() {
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if ( windowpos >= 4500) {
      $('.citation').addClass('citation_opacity');
		}
	});
});
