$(document).ready(function(){
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
  
      //Navbar active //
      $(".nav_link").click(function() {
        // remove classes from all
        $(".nav_link").removeClass("activo");
        // add class to the one we clicked
        $(this).addClass("activo");
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
    
  // SKILLS//
    
  });
  
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
  