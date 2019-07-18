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


$( window ).scroll(function() {
  $( "div.elixir_text_opener" ).addClass( "fade" );
});

$( window ).scroll(function() {
  $( ".awaken_section" ).delay(1000).addClass( "height_awaken");
  $( ".unwind_section" ).delay(1000).addClass( "height_unwind");
  setTimeout(function() { $( ".awaken_section" ).removeClass( "offscreen_awaken"); }, 1000);
  setTimeout(function() { $( ".unwind_section" ).removeClass( "offscreen_unwind"); }, 1000);
  setTimeout(function() { $( "footer" ).removeClass( "none"); }, 1000);
  setTimeout(function() { $( ".need_sections" ).removeClass( "none"); }, 1000);
  $( ".need_sections" ).delay(1000).addClass( "flex");
  setTimeout(function() { $( "newsletter" ).removeClass( "none"); }, 1000);
  setTimeout(function() { $( ".elixir_start" ).addClass( "none"); }, 1500);
});

$( window ).scroll(function() {
  $(".white_rejuvenate").delay(1000).slideUp(500);
});

$("ul").click(function() {
  $(this).removeClass("opener_height");
})

// $(".need_sections").click(function() {
//   $("div.title").addClass("hide_title").delay(1000).queue(function() {
//       $(this).addClass("none");
//       $(this).dequeue();
//   });
// });

$(".need_sections").click(function() {
  $("div.title").addClass("none");
});
