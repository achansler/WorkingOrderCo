// menu

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

  $('#toggle-mobile').click(function() {
     $(this).toggleClass('active');
     $('#overlay-mobile').toggleClass('open');
    });

// back to top button

var btn = $('#btt_button');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

// accordion on the elixir page

const mq = window.matchMedia( "(min-width: 769px)" );


if (mq.matches) {
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
    setTimeout(function() { $( ".awaken_section" ).removeAttr("data-aos data-aos-delay") }, 2000);
    setTimeout(function() { $( ".rejuvenate_section" ).removeAttr("data-aos data-aos-delay") }, 2000);
    setTimeout(function() { $( ".unwind_section" ).removeAttr("data-aos data-aos-delay") }, 2000);
    setTimeout(function() { $( ".awaken_section" ).removeClass( "offscreen_awaken"); }, 600);
    setTimeout(function() { $( ".unwind_section" ).removeClass( "offscreen_unwind"); }, 600);
    setTimeout(function() { $( "footer" ).removeClass( "none"); }, 1500);
    setTimeout(function() { $( ".need_sections" ).removeClass( "none"); }, 1000);
    $( ".need_sections" ).delay(1000).addClass( "flex");
    setTimeout(function() { $( ".newsletter_elixir" ).removeClass( "none"); }, 1500);
    setTimeout(function() { $( ".elixir_start" ).addClass( "none"); }, 1000);
    $( ".hide_title" ).delay(1000).addClass( "title");
    setTimeout(function() { $( ".title" ).removeClass( "hide_title"); }, 1100);
  }, 5000);


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
    $(this).removeClass("percent");
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
    $(window).trigger('resize');
  });


  $(".rejuvenate_section").click(function() {
    $(this).removeClass("closed_column_width");
    $(this).removeClass("percent");
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
    $(this).removeClass("percent");
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
} else {
  var section = $('li');

  function toggleAccordion() {
    section.removeClass('active');
    $(this).addClass('active');
  }

  section.on('click', toggleAccordion);

  setTimeout(function(){
    $( ".awaken_section" ).delay(0).addClass( "height_awaken");
    $( ".unwind_section" ).delay(0).addClass( "height_unwind");
    setTimeout(function() { $( ".awaken_section" ).removeClass( "offscreen_awaken"); }, 0);
    setTimeout(function() { $( ".unwind_section" ).removeClass( "offscreen_unwind"); }, 0);
    setTimeout(function() { $( ".need_sections" ).removeClass( "none"); }, 0);
    setTimeout(function() { $( ".awaken_section" ).removeAttr("data-aos data-aos-delay") }, 2000);
    setTimeout(function() { $( ".rejuvenate_section" ).removeAttr("data-aos data-aos-delay") }, 2000);
    setTimeout(function() { $( ".unwind_section" ).removeAttr("data-aos data-aos-delay") }, 2000);
    $( ".need_sections" ).delay(0).addClass( "flex");
    $( ".hide_title" ).delay(1000).addClass( "title");
    setTimeout(function() { $( ".title" ).removeClass( "hide_title"); }, 0);
  }, 0);

  setTimeout(function() { $( "footer" ).removeClass( "none"); }, 4500);
  setTimeout(function() { $( "footer" ).addClass( "mobile_view"); }, 4500);
  setTimeout(function() { $( ".newsletter_elixir" ).removeClass( "none"); }, 4000);


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
    $(this).removeClass("percent");
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
    $(window).trigger('resize');
  });


  $(".rejuvenate_section").click(function() {
    $(this).removeClass("closed_column_width");
    $(this).removeClass("percent");
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
    $(this).removeClass("percent");
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
}

if (window.innerWidth > 769) {
  var expandDiv = document.getElementById("quote");

  function expanding() {
    var scrolltop = window.pageYOffset / 10; // get number of pixels document has scrolled vertically

    //Or using width
    $('.everything').css('padding-right', Math.floor(100 - scrolltop) + 'px');
    $('.everything').css('padding-top', Math.floor(250 - scrolltop) + 'px');
    $('.in').css('padding-top', Math.floor(0 - scrolltop) + 'px');
    $('.nature').css('padding-left', Math.floor(150 - scrolltop) + 'px');
    $('.nature').css('padding-top', Math.floor(300 - scrolltop) + 'px');
    $('.invites').css('padding-left', Math.floor (150 - scrolltop) + 'px');
    $('.invites').css('padding-top', Math.floor(25 - scrolltop) + 'px');
    $('.us').css('padding-top', Math.floor(200 - scrolltop) + 'px');
    $('.constantly').css('padding-top', Math.floor(380 - scrolltop) + 'px');
    $('.constantly').css('padding-right', Math.floor(50 - scrolltop) + 'px');
    $('.are').css('padding-top', Math.floor(400 - scrolltop) + 'px');
    $('.we').css('padding-left', Math.floor(100 - scrolltop) + 'px');
    $('.we').css('padding-top', Math.floor(230 - scrolltop) + 'px');
    $('.what').css('padding-top', Math.floor(405 - scrolltop) + 'px');
    $('.what').css('padding-left', Math.floor(150 - scrolltop) + 'px');
    $('.be').css('padding-top', Math.floor(250 - scrolltop) + 'px');
    $('.be').css('padding-left', Math.floor(150 - scrolltop) + 'px');
    $('.to').css('padding-top', Math.floor(400 - scrolltop) + 'px');
  }

  function expanding_logo(){
    var scrolltop = window.pageYOffset/ 80;
    $('.selected').css('height', 64 - scrolltop + 'vh');
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
  		if ( windowpos >= 4000) {
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




}


//Mailchimp form

$(document).ready(function(){
    ajaxMailChimpForm($("#subscribe-form"), $("#subscribe-result"));

    // Turn the given MailChimp form into an ajax version of it.
    // If resultElement is given, the subscribe result is set as html to
    // that element.
    function ajaxMailChimpForm($form, $resultElement){

        // Hijack the submission. We'll submit the form manually.
        $form.submit(function(e) {
            e.preventDefault();

            if (!isValidEmail($form)) {
                var error =  "A valid email address must be provided.";
                $resultElement.html(error);
                $resultElement.css("color", "red");
            } else {
                $resultElement.css("color", "black");
                $resultElement.html("Subscribing...");
                submitSubscribeForm($form, $resultElement);
            }
        });
    }

    // Validate the email address in the form
    function isValidEmail($form) {
        // If email is empty, show error message.
        // contains just one @
        var email = $form.find("input[type='email']").val();
        if (!email || !email.length) {
            return false;
        } else if (email.indexOf("@") == -1) {
            return false;
        }

        return true;
    }

    // Submit the form with an ajax/jsonp request.
    // Based on http://stackoverflow.com/a/15120409/215821
    function submitSubscribeForm($form, $resultElement) {
        $.ajax({
            type: "GET",
            url: $form.attr("action"),
            data: $form.serialize(),
            cache: false,
            dataType: "jsonp",
            jsonp: "c", // trigger MailChimp to return a JSONP response
            contentType: "application/json; charset=utf-8",

            error: function(error){
                // According to jquery docs, this is never called for cross-domain JSONP requests
            },

            success: function(data){
                if (data.result != "success") {
                    var message = data.msg || "Sorry. Unable to subscribe. Please try again later.";
                    $resultElement.css("color", "red");

                    if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                        message = "You're already subscribed!";
                        $resultElement.css("color", "black");
                    }

                    $resultElement.html(message);

                } else {
                    $resultElement.css("color", "black");
                    $resultElement.html("Thank you!");
                }
            }
        });
    }

});
