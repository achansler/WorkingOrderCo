//order moving on the homepage
var expandDiv = document.getElementById("order_logo");

function expanding() {
  var scrolltop = window.pageYOffset / 5; // get number of pixels document has scrolled vertically
  $('.order_logo').css('padding-top',300 - scrolltop + 'px');
}

window.addEventListener('scroll', function() { // on page scroll
  requestAnimationFrame(expanding); // call parallaxing()
}, false);


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
  setTimeout(function() { $( ".elixir_start" ).removeClass( "d-flex align-items-center"); }, 350);
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
}, 4000);


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
