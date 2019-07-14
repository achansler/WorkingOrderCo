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
  $( "div.elixir_text_opener" ).addClass( "fade", 1000);
});
