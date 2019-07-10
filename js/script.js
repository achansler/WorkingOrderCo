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


$('#accordion_section').click(function() {
   $(this).removeClass('original_space');
  });
