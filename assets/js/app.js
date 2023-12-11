addEventListener('render', function() {

    // Auto Collapsed List
    $('ul.bullet-list li.active:first').each(function() {
        $(this).parents('ul.collapse').each(function() {
            $(this).addClass('show').prevAll('.collapse-caret:first').removeClass('collapsed');
        });
    });

    // Popovers
    $('[data-bs-toggle="popover"]').each(function() {
        var $el = $(this);
        if ($el.data('content-target')) {
            $el
                .popover({ html: true, content: $($el.data('content-target')).get(0) })
                .on('shown.bs.popover', function() {
                    $('input:first', $($el.data('content-target'))).focus();
                })
            ;
        }
        else {
            $el.popover();
        }
    });

    // AGGIUNTA CLASSE STICKY ALL'HEADER DOPO LO SCROLL
    window.onload = function(){
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 10) {
                $(".header-main").addClass("sticky");
            } else {
                $(".header-main").removeClass("sticky");
            }
        });
    };

    //MENU
    $('nav ul li').on('mouseenter', function() {
        console.log('mouse-entered');
        $(this).children('ul').stop().slideDown();
    });
    
    // Nascondi il sottomenu quando il mouse esce dall'elemento <li>
    $('nav ul li').on('mouseleave', function() {
        $(this).children('ul').stop().slideUp();
    });   

    // MENU MOBILE
    $('.open-menu-button').on('click', function(){
        $('.inside-mobile-menu-container').addClass('visible');
    })

    $('.menu-close-button').on('click', function(){
        $('.inside-mobile-menu-container').removeClass('visible');
    })

    $(".menu-mobile-container ul li").each(function() {
        if ($(this).find('ul').length > 0) {
            $(this).addClass("expandable").prepend("<span class='expand-icon'>+</span>");
        }
    });

    // Gestisci il click sugli span con classe expand-icon
    $(".menu-mobile-container .expand-icon").click(function(e) {
        e.stopPropagation(); // Evita che il click si propaghi agli elementi superiori

        var $ul = $(this).parent().children("ul");
        $ul.slideToggle(); // Mostra/nasconde il ul con effetto slide

        // Cambia il segno "+" o "-" al clic
        if ($(this).text() === "+") {
            $(this).text("-");
        } else {
            $(this).text("+");
        }
    });

    //Button scroll to top
    let mybutton = document.getElementById("btn-back-to-top");
    let callDiv = document.querySelector(".call"); // Ottieni il div con classe "call"

    // When the user scrolls down 800px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 800 ||
            document.documentElement.scrollTop > 800
        ) {
            mybutton.style.display = "block";
            callDiv.classList.add("moved-up"); // Aggiungi la classe per spostare il div verso l'alto
        } else {
            mybutton.style.display = "none";
            callDiv.classList.remove("moved-up"); // Rimuovi la classe per ripristinare la posizione originale
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // end Button scroll to top

});

// ANIMAZIONI
// funzione di animazione  per tutti gli elementi, applicare la classe animate al div che si desidera animare dopo lo scroll di 150 pixel
	function reveal() {
	  var reveals = document.querySelectorAll(".animate");

	  for (var i = 0; i < reveals.length; i++) {
	    var windowHeight = window.innerHeight;
	    var elementTop = reveals[i].getBoundingClientRect().top;
	    var elementVisible = 150;

	    if (elementTop < windowHeight - elementVisible) {
	      reveals[i].classList.add("active");
	    } else {
	      reveals[i].classList.remove("active");
	    }
	  }
	}
	window.addEventListener("scroll", reveal);
// Funzione di animazione per tutti gli elementi, applicare la classe animatenow al div che si desidera animare senza attendere lo scroll
    function revealNow() {
      var owlItems = document.querySelectorAll('.owl-item');

      owlItems.forEach(function (owlItem) {
        if (owlItem.classList.contains('active')) {
          var activeElements = owlItem.querySelectorAll('.animatenow');
          activeElements.forEach(function (activeElement) {
            setTimeout(function () {
              activeElement.classList.add('active');
            }, 500);
          });
        }
      });

      // Rimuovi la classe "active" da tutti gli elementi con classe .animatenow alla fine della funzione
      var activeElements = document.querySelectorAll('.animatenow.active');
      activeElements.forEach(function (element) {
        element.classList.remove('active');
      });
    }

    // Esegui la funzione inizialmente
    revealNow();

    // Esegui la funzione continuamente con un intervallo di 500 millisecondi
    setInterval(revealNow, 500);

//END ANIMAZIONI

