$(document).ready(function(){
    

    
    
    var p = $( "#arrowhead" );
    var position = p.offset().top;
    position = position.toFixed(0); 
  
    var p2 = $( "#timelinelast" );
    var position2 = p2.offset().top;
    position2 = position2.toFixed(0); 
    
    var tamanhoTimeline =  (parseInt(position2) - parseInt(position)) + parseInt(20); 
    $('#timeline').append('<style>.timeline:before{height:'+tamanhoTimeline+'px !important;}</style>');
    
    
    $( "" ).css({ "height":  tamanhoTimeline+"px"});
       $altura = $(window).height();
  
    
   $('#sobre-inicial').css("min-height", $altura);
    
    
  


    
    if($(window).width() > 	970 ){
        alturaTeam();
        videoAlinhado();
    }  else 
    {
        $altura = $('#team-mobile').height();
        $('#time').css("height", $altura+ 150 );
    }
    
});



function videoAlinhado()
{
    var paddingTop = ($('#sobre-texto').height()/2) - ($('#sobre-video').height()/2);
    $('#sobre-video').css("padding-top", paddingTop );
    
}

function alturaTeam(){
var altura =  parseInt( $('#grid_team').height());
    var largura = parseInt( $('#grid_team').width());
    var diametro = (altura * altura) + (largura*largura);
    diametro = parseInt( Math.sqrt(diametro));
    
    altura = $("#team-row").height();
    $('#time').css('height', altura-270);
    $('#grid_team').css("margin-top", parseInt(-(diametro) * 0.28));
    $('.team-members').css("max-width", altura );
    
    
    
}

function scrollBanner() {
  var scrollPos;
  var headerText = document.querySelector('.header-paralax h1');
  scrollPos = window.scrollY;

  if (scrollPos <= 600) {
    headerText.style.transform = "translateY(" + (-scrollPos / 3) + "px" + ")";
    headerText.style.opacity = 1 - (scrollPos / 200);
  }
}
window.addEventListener('scroll', scrollBanner);




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


/* NAVBAR */

var  mn = $(".navbar.navbar-default");
var  mns = "navbar-fixed-top";
var  hdr = resizeContent() / 2.5; 
 $('main').css("top",hdr);
$('.header-paralax').css("height",hdr);
$('.header-paralax h1').css("padding-top",hdr/5);
$('.header-paralax h1').css("padding-bottom",hdr/5);



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
    });
    
    
    $largura = $(window).width();
    
    if($largura   < 770){
            $('#bs-example-navbar-collapse-1').addClass("collapse");
        
    }
    
});

function resizeContent() {
    $height = $(window).height();
    $('body div#header').height($height);
    return $height;
}
// FIM DO HOME DO TAMANHO DA TELA






// TEXTO TYPING

var
  words = ['A consultoria certa para o momento exato.','Aquele que não simplifica, não inova.','Uma empresa sem estratégia faz qualquer negócio.', 'Um bom planejamento vence quase todas as dificuldades.','Não se pode planejar o futuro pelo passado.', 'Nenhuma empresa é melhor do que o seu administrador permite.', 'Tempo de decisão poupado, é tempo de ação ganho.', 'O melhor cliente é aquele que já temos.', 'Quem não tem sonhos, tem pesadelos. Pense Grande.', 'Se você acordar sem metas, volte a dormir.', 'Quem é a alma da sua empresa?', 'O que nos motiva é gerar conexões positivas alinhadas com a estratégia do negócio.'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  encaminha = true,
  skip_count = 0,
  skip_delay = 25,
  velocidade = 80;


var wordflick = function(){
  setInterval(function(){
      if (encaminha) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            encaminha = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            encaminha = true;
          //  i++; // chama a proxima frase do array
             posicaoAnterior = i;
             while(posicaoAnterior == i){
              i = Math.floor((Math.random() * len) + 4);   
             }
              
            offset = 0;
            if(i >= len){
              i=1;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (encaminha) {
          offset++;
        }
        else {
          offset--;
        }
      }
    	$('.word').html(part );
  },velocidade);
};

$(document).ready(function(){
  wordflick();
});

// FIM TEXTO TYPING



// PROJETOS


	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});



  	/* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });

// FIM PROJETOS


// PARALAXX

$(document).ready(function() {
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




// YOUTUBE EMBED 
$(document).ready(function() {
// START Fast & Agile YouTube Embed by Schoberg.net
  $(".youtube").each(function() {
    // Set the BG image from the youtube ID
          //  $(this).css('background-image', 'url(https://i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
      $(this).css('background-image', 'url(img/team.png)');
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


/* TEAM */


// PEga o elemento que está com over
function handler(ev) {
    var target = $(ev.target);
    var elId = target.attr('id');
    $(".hex").css('filter','grayscale(100%) blur(2px)' );
    if( target.is(".hex")  ) {
        target.css('filter','blur(0px)' );   
          target.css('filter','grayscale(0%) blur(0px)' ); 
        cardInformacoes(target);
    } 
    if( target.is(".corner-2") || target.is(".corner-1")){
        target.parent( ".hex" ).css('filter','grayscale(0%) blur(0px)' ); 
           cardInformacoes(target.parent( ".hex" ));
    }
    
}

$(".hex").mouseenter(handler);
$(".hex").mouseleave(function(){
     $(".hex").css('filter','grayscale(0%) blur(0px)' );
     $("#card-info").remove();
    
});

$(document).ready(function(){
    var yAtual;
    var yProximo;
    var trocar = true;
    
    var classList = $('#eja-hexgono').children();
$.each(classList, function(index, item) {
    if (item.className === 'hex' && index+1 < classList.length) {
       yAtual = $('#eja-hexgono').children()[index].offsetTop;
        yProximo = $('#eja-hexgono').children()[index+1].offsetTop;
        if(yAtual != yProximo && trocar == true ){
            $('#eja-hexgono').children()[index+1].className ="hex hex-gap";
            trocar = false;
        } else if((yAtual != yProximo && trocar == false )){
            trocar = true;
        }
        //do something
    }
});  
    
});




function cardInformacoes(pai)
{
    $("#card-info").empty();
    div = document.createElement("div");
    div.id = "card-info";
    div.className = "card-profile";
    
    nome = document.createElement("h5");
    nome.id = "nome-team";
    nome.innerHTML = "Augusto the Rock de Assis";
    
    
    cargo = document.createElement("h6");
    cargo.id = "cargo-team";
    cargo.innerHTML = "Diretor de projetos";
    
    
    descricao = document.createElement("p");
    descricao.id = "descricao-team";
    descricao.innerHTML = "Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.";

    
    
    
    div.appendChild(nome);
        div.appendChild(cargo);
    
     div.appendChild(descricao);
    
    var larguratela = $( window ).width();
    pai.append(div); 
    
     if( (pai[0].offsetLeft +  $("#card-info").width() + pai[0].clientWidth + 290 )> larguratela){
        $("#card-info").css("margin-left", "-343px");
    } 
    
}



function dadosMembroSelecionado( indice ){
    switch(indice) {
    case 0:
            
        break;
    case 1:
             
        break;
    case 2:
       
            
         break;   
        case 3:
  
        break;
             case 4:

        break;
     case 5:
           
        break;
             case 6:
            
        break;
    default:
        htmlEJAPORQUE();
                 }    
}



/* FIM TEAM */
