$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})

$(document).ready(function(){
  
   // Reload top//

  $(document).ready(function(){
    $('html,body').scrollTop(0);
  });
  
  
  //Nabvar click active//
  
   $(".nav_link").click(function() {
      // remove classes from all
      $(".nav_link").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });

  
  window.sr = ScrollReveal();
  sr.reveal('.menu', {
    duration: 4000,
    origin: 'bottom',
    distance: '-100px'
  });

  sr.reveal('.home-content .text-1', {
    duration: 4000,
    origin: 'right',
    distance: '-100px'
  });
  
  sr.reveal('.home-content .text-2', {
    duration: 4000,
    origin: 'left',
    distance: '-100px'
  });
  
  sr.reveal('.home-content .button-text-3', {
    duration: 4000,
    origin: 'top',
    distance: '-100px'
  });
  
  sr.reveal('.home-content .text-fe', {
    duration: 4000,
    origin: 'right',
    distance: '-100px'
  });
  
  sr.reveal('.home-perfil', {
    duration: 4000,
    origin: 'top',
    distance: '-100px'
  });
  
  sr.reveal('.home-social', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  });
  
  sr.reveal('.about .title', {
    duration: 4000,
    origin: 'right',
    distance: '-50px'
  });
  
  sr.reveal('.about .subtitle', {
    duration: 4000,
    origin: 'left',
    distance: '-50px'
  });
  
  sr.reveal('.about .column-left', {
    duration: 4000,
    origin: 'right',
    distance: '-100px'
  });
  
  sr.reveal('.about .column-right h2', {
    duration: 4000,
    origin: 'left',
    distance: '-50px'
  });
  
  sr.reveal('.about .column-right p', {
    duration: 4000,
    origin: 'left',
    distance: '-50px'
  });
  
  sr.reveal('.about .column-right .btncv', {
    duration: 5000,
    origin: 'top',
    distance: '-100px'
  });
  
  sr.reveal('.skills .title', {
    duration: 4000,
    origin: 'right',
    distance: '-50px'
  });
  
  sr.reveal('.skills .subtitle', {
    duration: 4000,
    origin: 'left',
    distance: '-50px'
  });
  
  sr.reveal('.skills .descripcion', {
    duration: 4000,
    origin: 'top',
    distance: '-100px'
  });
  
  sr.reveal('.skills .skill-cont', {
    duration: 5000,
    origin: 'bottom',
    distance: '-100px'
  });
  
  sr.reveal('.proyects .title', {
    duration: 4000,
    origin: 'right',
    distance: '-50px'
  });
  
  sr.reveal('.proyects .subtitle', {
    duration: 4000,
    origin: 'left',
    distance: '-50px'
  });
  
  sr.reveal('.proyects .subtitle', {
    duration: 4000,
    origin: 'left',
    distance: '-50px'
  });
  
  sr.reveal('.proyects .card', {
    duration: 4000,
    origin: 'bottom',
    distance: '-50px'
  });
  
  sr.reveal('.contacto .title', {
    duration: 4000,
    origin: 'right',
    distance: '-50px'
  });
  
  sr.reveal('.contacto .subtitle', {
    duration: 4000,
    origin: 'left',
    distance: '-50px'
  });
  
  sr.reveal('.contacto .column-left', {
    duration: 5000,
    origin: 'left',
    distance: '-50px'
  });
  
  sr.reveal('.contacto .column-right', {
    duration: 5000,
    origin: 'right',
    distance: '-50px'
  });
  
  
  
  
  $(window).scroll(function(){
    
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
    if(this.scrollY > 300){
          $('.scroll-up').addClass("show");
    }else{
          $('.scroll-up').removeClass("show");
    }
        
});   
  
    //slip-up script//
    $('.scroll-up').click(function(){
      $('html, body').animate({ scrollTop: 0 });
});
    
  //formulario//
  $('#btnSedn').click(function(){

    var errores = '';

    // Validado Nombre ==============================
    if( $('#names').val() == '' ){
        errores += '<p>Escriba un nombre</p>';
        $('#names').css("border-color", "var(--rojo)")
    } else{
        $('#names').css("border-color", "var(--verde)")
    }

    // Validado Correo ==============================
    if( $('#email').val() == '' ){
        errores += '<p>Ingrese un correo</p>';
        $('#email').css("border-color", "var(--rojo)")
    } else{
        $('#email').css("border-color", "var(--verde)")
    }

    // Validado Asunto ==============================
    if( $('#asunto').val() == '' ){
      errores += '<p>Ingrese un asunto</p>';
      $('#asunto').css("border-color", "var(--rojo)")
  } else{
      $('#asunto').css("border-color", "var(--verde)")
  }

    // Validado Mensaje ==============================
    if( $('#mensaje').val() == '' ){
        errores += '<p>Escriba un mensaje</p>';
        $('#mensaje').css("border-color", "var(--rojo)")
    } else{
        $('#mensaje').css("border-color", "var(--verde)")
    }

    // ENVIANDO MENSAJE ============================
    if( errores == '' == false){
        var mensajeModal = '<div class="modal-form">'+
                                '<div class="mensaje-modal">'+
                                    '<h3>Errores encontrados</h3>'+
                                    errores+
                                    '<span id="btnclose">Cerrar</span>'+
                                '</div>'+
                            '</div>'

        $('body').append(mensajeModal);
    }

    // CERRANDO MODAL ==============================
    $('#btnclose').click(function(){
        $('.modal-form').remove();
    });
    
    
});
     
    
  //typing animation script//
  var typed = new Typed(".typing",{
    strings: ["Alejandro","Martinez","Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    
  });
  
  
    //toggle menu/ navbar active//
    $('.menu-btn').click(function(){
      $('.navbar .menu').addClass("active");
      $('#burger').hide();
    });
     //nav menu close//
    $('#menu-close').click(function(){
      $('.navbar .menu').removeClass('active');
      $('#burger').show();
    })
    //nav menu close icons//
    $('.nav_link').click(function(){
      $('.navbar .menu').removeClass('active');
      $('#burger').show();
   });

   //img animation//
   $('#mi_imagen').hover(function(){
    $(this).attr('src','https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Surprised&eyebrowType=UpDown&mouthType=Serious&skinColor=Light');
},function(){
     $(this).attr('src','https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Light'); 
});
  

  
});

// SKILLS//
 const skillContent = document.getElementsByClassName('skill-cont'),
        skillHeader = document.querySelectorAll('.skill-header')
  
  function toggleskill(){
    let itemClass = this.parentNode.className
    
    for(i = 0; i < skillContent.length; i++ ){
      skillContent[i].className = 'skill-cont skill-close'
    }
    if(itemClass === 'skill-cont skill-close'){
      this.parentNode.className = 'skill-cont skill-open'
    }
  }
  
  skillHeader.forEach((el) =>{
    el.addEventListener('click', toggleskill)
  });

  
