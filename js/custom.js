// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


$.getJSON("https://cpv2api.com/posts/published/j-w-v", function(resp){
	if(resp.success){
		for (var i = 0; i < resp.data.length; i++) { 
    $('.posts ul').append('<li><a target="_blank" href="' + resp.data[i].link +'">' + resp.data[i].title + ' <span> ' +resp.data[i].views+ ' views</span> </a></li>');
    }
	}
});

$.getJSON("https://cpv2api.com/pens/showcase/j-w-v", function(resp){
	if(resp.success){
		for (var i = 0; i < 5; i++) { 
    $('.pens ul').append('<li><a target="_blank" href="' + resp.data[i].link +'">' + resp.data[i].title + ' <span> ' +resp.data[i].views+ ' views</span> </a></li>');
    }
	}
}); 



particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 0,
      "density": {
        "enable": true,
        "value_area": 1420.4657549380909
      }
    },
    "color": {
      "value": "#423f93"
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#423f93"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4313181133058181,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 2,
        "opacity_min": 0.4,
        "sync": false
      }
    },
    "size": {
      "value": 11.83721462448409,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 60,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ec2937",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 12,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});







// CIRCULAR MENU

// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect

function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}
/* FIM CIRCULAR MENU*/


/* NAVBAR */

var  mn = $(".navbar.navbar-default");
var  mns = "navbar-fixed-top";
var hdr = $(window).height(); 

$(window).scroll(function() {
  if( $(this).scrollTop() > (hdr) ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

/* FIM NAVBAR*/
 
//HOME DO TAMANHO DA TELA
$(document).ready(function(){
    resizeContent();

    $(window).resize(function() {
        resizeContent();
        $('.parallax').css('width', $(window).width());
    });
    
    
    $largura = $(window).width();
    
    if($largura   < 750){
            $('#bs-example-navbar-collapse-1').addClass("collapse");
    } 
    
    // Deixa o padding do texto lá do circulo do processo sempre no meio.
    if($largura   > 970){
        $alturaEjaCircle = $('#eja-hexgono').height();
        $textoAltura = $('#contratar-text').height();
        $paddingTop = ($alturaEjaCircle/2) -  ($textoAltura/1.6);
         $('#contratar-text').css('padding-top', $paddingTop +'px');
    }
    
    $('#bubble-image').attr('src','');
    
    
    
});

function resizeContent() {
    $height = $(window).height();
    $width = $(window).width();
    
    $('body div#header').height($height);
    
    if( $width >= ($height*2) || ( ($width < 1000) && ($width >= $height*1.5 ) ) )
    {
        $height = $height*1.6;
        $('#img-logo').css('width', ($(window).width()*0.6));
        $('#img-logo').css('padding-bottom', 10);
        $('#arrow').css('margin-top',-20);
    }
    
    $('#video-background').css('height',$height*1.3);
    return $height;
}
// FIM DO HOME DO TAMANHO DA TELA





// PARALAXX

$(document).ready(function () {

    $('.parallax').css('width', $(window).width());


  var wHeight = $(window).height();
  
  function parallax() {
    var pHeight = $(this).outerHeight();
    var pMiddle = pHeight / 2;
    var wMiddle = wHeight / 2;
    var fromTop = $(this).offset().top;
    var scrolled = $(window).scrollTop();
    var speed = $(this).attr('data-parallax-speed');
    var rangeA = (fromTop - wHeight);
    var rangeB = (fromTop + pHeight);
    var rangeC = (fromTop - wHeight);
    var rangeD = (pMiddle + fromTop) - (wMiddle + (wMiddle / 2));
    
    if (rangeA < 0) {
      rangeA = 0;
      rangeB = wHeight
    }

    var percent = (scrolled - rangeA) / (rangeB - rangeA);
    percent = percent * 50;
    percent = percent * speed;
    percent = percent.toFixed(2);
    
    var animFromBottom = (scrolled - rangeC) / (rangeD - rangeC);
    animFromBottom = animFromBottom.toFixed(2);
    
    if (animFromBottom >= 1) {
      animFromBottom = 1;
    }

    $(this).css('background-position', 'center ' + percent + '%');
    $(this).find('.parallax-content').css('opacity', animFromBottom);
    $(this).find('.parallax-content').css('transform', 'scale(' + animFromBottom + ')');
  }
  $('.parallax').each(parallax);
  $(window).scroll(function(e) {
    $('.parallax').each(parallax);
  });
}); 
// FIM PARALAXX



$(document).ready(function () {

    $('.modal-body').css('min-height', $(window).height() - 75);
});


// TESTIMONIAL


// FIM TESTIMONIAL


// YOUTUBE EMBED 
$(document).ready(function() {
// START Fast & Agile YouTube Embed by Schoberg.net
  $(".youtube").each(function() {
    // Set the BG image from the youtube ID
            $(this).css('background-image', 'url(https://i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
    // Click the video div
    $(document).delegate('#' + this.id, 'click', function() {
      // Build embed URL
      var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
      // Grab extra parameters set on div
      if ($(this).data('params')) iframe_url += '&' + $(this).data('params');
      // Build iframe tag
      var iframe = $('<iframe/>', {'allowfullscreen':'allowfullscreen', 'frameborder': '0', 'src': iframe_url})
      // Replace the YouTube thumbnail with YouTube HTML5 Player
      $(this).append(iframe);
    });// /click
  }); // /each video
// END Fast & Agile YouTube Embed by Schoberg.net
}); // /document ready

// FIM YOUTUBE


// PEga o elemento que está com over
function handler(ev) {
    var target = $(ev.target);
    var elId = target.attr('id');
      $(".hex-visible").css('filter','blur(2px)' );
    if( target.is(".hex-visible") ) {
        target.css('filter','blur(0px)' );   
    }
     if( target.is(".hexagontent") ) {
        target.parent( ".hex-visible" ).css('filter','blur(0px)' );  
    }
    
}


$(".hex-visible").mouseenter(handler);
$(".hexagontent").mouseenter(handler);




function porquerContratar(indice){
    montarHTMLEJAPorque(indice);
 //  document.getElementById('eja-porque').style.display = 'none';
    return null;
}

function reverterPorquerContratar(){
    
        htmlEJAPORQUE();
        $(".hex-visible").css('filter','blur(0px)' );
       // Deixa o padding do texto lá do circulo do processo sempre no meio.
    
}



function montarHTMLEJAPorque( indice ){
    switch(indice) {
    case 0:
            htmlPorqueEJAMarcado("Canvas Gratuito", " Ao entrar em contato conosco, nossos clientes têm a oportunidade de obter um diagnóstico gratuito acerca dos problemas que a sua empresa está enfrentando e ter uma melhor visão sobre seu negócio. (Plano Negócios, rentabilidade, facilidade em atrair capital). ");
        break;
    case 1:
            htmlPorqueEJAMarcado("PMBOK", " Como garantia de qualidade dos nossos projetos utilizamos o Guia PMBOK, desenvolvido pelo PMI (Project Management Institute) e utilizado pelas maiores consultorias do mundo, de forma a proporcionar o que há de melhor no que se refere à gestão de projetos. Assim podemos desenvolver projetos mais bem planejados e com garantia de qualidade na sua execução.");
        break;
    case 2:
            htmlPorqueEJAMarcado("26 anos", "  Desde 1993 a EJAUFS Consultoria vem construindo uma trajetória de sucesso, desenvolvendo projetos inovadores, que impactam o mercado ao reescrever a história do empresariado sergipano. E como garantia de reconhecimento do nosso trabalho construímos diversas parcerias ao longo da nossa história, como, por exemplo: PMI (Project Management Institute), KNN Idiomas, Podio, Hello World Soft e SERJÚNIOR");
         break;   
        case 3:
            htmlPorqueEJAMarcado("Preços Abaixo do Mercado", "  A EJAUFS é formada e gerida por graduandos que trabalham de forma voluntária, com o auxílio de professores, permitindo que as nossas consultorias tenham um baixo custo, se comparada a outras consultorias do mercado. ");
        break;
             case 4:
            htmlPorqueEJAMarcado("Serviço Personalizado", " Cada cliente é diferenciado e para oferecer os melhores serviços, a nossa consultoria é adaptada a cada um deles, de forma a proporcionar as melhores soluções e impulsionar seus negócios.");
        break;
     case 5:
            htmlPorqueEJAMarcado("Resultados", "Ao longo de sua história a EJAUFS Consultoria realizou mais de 300 projetos relacionados aos mais diversos serviços do nosso portfólio, sempre com o objetivo de alcançar a máxima satisfação dos nossos clientes. Assim pudemos desenvolver o negócio dos nossos clientes, impactando positivamente na vida de diversas pessoas e, consequentemente, na economia do nosso estado.");
        break;
             case 6:
            htmlPorqueEJAMarcado("Contato acadêmico", " Por estarmos inseridos no meio acadêmico, temos o apoio de professores altamente qualificados, que nos oferecem o suporte técnico de que precisamos para fornecer excelência às nossas consultorias.");
        break;
    default:
        htmlEJAPORQUE();
                 }    
}


function htmlEJAPORQUE(){
    $("#eja-porque").empty();
    h1 = document.createElement("h1");
    h1.id = "contratar-text";
    h1.innerHTML = " Por que contratar a EJAUFS?";
    document.getElementById("eja-porque").appendChild(h1); 
    
     if($largura   > 970){
        $alturaEjaCircle = $('#eja-hexgono').height();
        $textoAltura = $('#contratar-text').height();
        $paddingTop = ($alturaEjaCircle/2) -  ($textoAltura/1.6);
         $('#contratar-text').css('padding-top', $paddingTop +'px');
    }
}



function htmlPorqueEJAMarcado(titulo, texto){
    $("#eja-porque").empty();
    h2 = document.createElement("h2");
    h2.id = "contratar-text";
    h2.innerHTML = titulo;
    
    p1 = document.createElement("p");
    p1.innerHTML = texto;
    
    
    document.getElementById("eja-porque").appendChild(h2); 
    document.getElementById("eja-porque").appendChild(p1); 
    
     if($largura   > 970){
        $alturaEjaCircle = $('#eja-hexgono').height();
        $textoAltura = $('#contratar-text').height();
        $paddingTop = ($alturaEjaCircle/3) -  ($textoAltura/1.6);
         $('#contratar-text').css('padding-top', $paddingTop +'px');
    }
}




 $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });




