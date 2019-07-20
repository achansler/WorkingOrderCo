// menu

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });



// back to top button

var btn = $('#btt_button');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// accordion on the elixir page

var section = $('li');

function toggleAccordion() {
  section.removeClass('active');
  $(this).addClass('active');
}

section.on('click', toggleAccordion);


$( window ).one("scroll", function() {
  $( "div.elixir_text_opener" ).addClass( "fade" );
  $(".white_rejuvenate").delay(500).slideUp(500);
  $( ".awaken_section" ).delay(500).addClass( "height_awaken");
  $( ".unwind_section" ).delay(500).addClass( "height_unwind");
  setTimeout(function() { $( ".awaken_section" ).removeClass( "offscreen_awaken"); }, 500);
  setTimeout(function() { $( ".unwind_section" ).removeClass( "offscreen_unwind"); }, 500);
  setTimeout(function() { $( "footer" ).removeClass( "none"); }, 1000);
  setTimeout(function() { $( ".need_sections" ).removeClass( "none"); }, 1000);
  $( ".need_sections" ).delay(1000).addClass( "flex");
  setTimeout(function() { $( "newsletter" ).removeClass( "none"); }, 1000);
  setTimeout(function() { $( ".elixir_start" ).addClass( "none"); }, 1500);
  $( ".hide_title" ).delay(1500).addClass( "title");
  setTimeout(function() { $( ".title" ).removeClass( "hide_title"); }, 1500);
});


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
  $(".awaken-closed h1").removeClass("show_title");
  $(".rejuvenate-closed h1").addClass("show_title");
  $(".unwind-closed h1").addClass("show_title");
});

$(".rejuvenate_section").click(function() {
  $(".rejuvenate-closed h1").removeClass("show_title");
  $(".awaken-closed h1").addClass("show_title");
  $(".unwind-closed h1").addClass("show_title");
});

$(".unwind_section").click(function() {
  $(".unwind-closed h1").removeClass("show_title");
  $(".rejuvenate-closed h1").addClass("show_title");
  $(".awaken-closed h1").addClass("show_title");
});
