
/*
    ===============================================================================
                                    FUNCION ACTUADOR SUBMENU
                             Despliega el submenu ETN taquilllas
    ===============================================================================
**/
$(document).ready(function(){/*Activar el submenu*/$("#sub-menu-action").mouseover(function(){ $('#sub-menu-items').toggle("show");}); });


/*
    ===============================================================================
                                FUNCION BUSCADOR SAFARI
            Busqueda de naveadores Safari: atencion-a-clientes-app/index.php
    ===============================================================================
*/

$(document).ready(function(){/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?($("#phoneTypeUno").attr("href","tel:018008000386"),$("#phoneTypeDos").attr("href","tel:018008000386")):($("#phoneTypeUno").attr("href","wtai://wp/mc;018008000386"),$("#phoneTypeDos").attr("href","wtai://wp/mc;018008000386"))});

/*
    =======================================================================================================
                                          FUNCION COOKIES MAC AND IOS
      Imprimir mensaje a usuario en cado de encontrar cookies desactivadas en navegadores MAC e IOS
    =======================================================================================================
*/


$(document).ready(function(){if(!navigator.cookieEnabled){$(window).load(function(){var e=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),i=/^((?!iPhone|iPad|iPod).)*Mac/i.test(navigator.userAgent),a=/iPhone|iPad|iPod/i.test(navigator.userAgent);e&&(i?$(".ChangeText").html("RUTA: MenuSafari --\x3e Preferencias --\x3e Privacidad"):a&&$(".ChangeText").html("RUTA: Configuraci&oacute;n --\x3e Safari --\x3e Privacidad y Seguridad"),$("#Cookies").show());$("#btn_cerrar").click(function(){this.checked&&$("#Cookies").hide()})}()),setTimeout(function(){$("#Cookies").fadeOut(1500)},3e4)}});


/*
    =======================================================================================================
                                          FUNCION IMPRIMIR MOTOR VENTAS
                            Imprimir Iframe con motor Ventas ETN en el documento 
    =======================================================================================================
*/
$('#motor-venta').html('<iframe src="https://venta.etn.com.mx/Request.aspx?APPNAME=Navegante&PRGNAME=AccesoEx&ARGUMENTS=-APU,-AH,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-AES" frameborder="0" scrolling="no" id="object-ventas"></iframe>');
$('#motor-venta-mobile').html('<iframe src="https://venta.etn.com.mx/Request.aspx?APPNAME=Navegante&PRGNAME=AccesoEx&ARGUMENTS=-AML,-AH,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-A,-AES" frameborder="0" scrolling="no" id="object-ventas"></iframe>');

/*
    =======================================================================================================
                                          EFECTO SCROLL
    =======================================================================================================
*/
$(document).ready(function() {
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 700) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

}); // ready() END


/*
    =======================================================================================================
                                          MOSTRAR BTN ENCUETA
                            En el Top 700 Se muestra el Botón Encuesta
    =======================================================================================================
*/
$(document).ready(function($){
    // Variables locales
    var topPos = 0;
    var ancho  = 0;

 // Variable btn-encuesta
  var item = $(".btn-encuesta");

    // Evento scroll
        $(window).scroll(function() 
        {
            // Obtener ubicación de scroll
            topPos = $(this).scrollTop();
            // Obtener tamaño de la ventana
            ancho = $(window).width();
            // Si se cumple la condición scroll mayor a 700 y ventana ancho meyor igual a 800
            if (topPos > 700 && ancho <= 800) {
               $(item).css("display", "block"); 
            } 
            else
            {
                $(item).css("display", "none");
                if(ancho >= 801)
                {
                    $(item).css("display", "block");
                }
            }
            
        
          }); // scroll evento END

          // Evento resize
          $(window).resize(function(){
            ancho = $(window).width();

            if(ancho >= 801 )
            {
                $(item).css("display", "block"); 
            }
          });

      

}); 








/*
    ================================================================================
                                        RÁPIDO SCROLL
                 Scroll que facilita al usuario mediante semicirculos blancos
    ================================================================================
  */
$(document).ready(function(){

    $(window).scroll(function(){

        var topScroll = $(this).scrollTop();

        if(topScroll < 700){
            $('#square-1').css({'color':'black', 'background':'black'});
        }
        else{
            $('#square-1').css({'color':'white', 'background':'white'});
        }




        if(topScroll > 700 && topScroll < 1700){
            $('#square-2').css({'color':'black', 'background':'black'});
        }
        else{
            $('#square-2').css({'color':'white', 'background':'white'});
        }

        if(topScroll > 1700 && topScroll < 2450){
            $('#square-3').css({'color':'black', 'background':'black'});
        }
        else{
            $('#square-3').css({'color':'white', 'background':'white'});
        }

        if(topScroll > 2450 && topScroll < 4200){
            $('#square-4').css({'color':'black', 'background':'black'});
        }
        else{
            $('#square-4').css({'color':'white', 'background':'white'});
        }

        if(topScroll > 4200){
            $('#square-5').css({'color':'black', 'background':'black'});
        }
        else{
            $('#square-5').css({'color':'white', 'background':'white'});
        }



        

    });
});




/*
    ================================================================================
                                        
                
    ================================================================================
  */
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
}), $(document).ready(function() {
    $(".zoom").css("cursor", "pointer"), $(".zoom").hover(function() {
        $(this).addClass("transition")
    }, function() {
        $(this).removeClass("transition")
    })
}), $(".inicio-tol").click(function() {
    $("html,body").animate({
        scrollTop: $("#inicio").offset().top
    }, 1e3)
}), $(".inicio-deplaza").click(function() {
    $("html,body").animate({
        scrollTop: $("#lugares").offset().top
    }, 1e3)
}), $(".lugares-tol").click(function() {
    $("html,body").animate({
        scrollTop: $("#lugares").offset().top
    }, 1e3)
}), $(".servicios-tol").click(function() {
    $("html,body").animate({
        scrollTop: $("#servicios").offset().top
    }, 1e3)
}), $(".paqueteria-tol").click(function() {
    $("html,body").animate({
        scrollTop: $("#paqueteria").offset().top
    }, 1e3)
}), $(".promociones-tol").click(function() {
    $("html,body").animate({
        scrollTop: $("#promociones-late").offset().top
    }, 1e3)
}), $(".visita-tol").click(function() {
    $("html,body").animate({
        scrollTop: $("#visita").offset().top
    }, 1e3)
}), $(".seccion-asientos").click(function() {
    $("html,body").animate({
        scrollTop: $(".servi-abajo").offset().top
    }, 1e3)
}), $(".seccion-iconos").click(function() {
    $("html,body").animate({
        scrollTop: $(".icons-abajo").offset().top
    }, 1e3)
}), $(".iconos-eclipse").click(function() {
    $("html,body").animate({
        scrollTop: $(".abajo-eclipse").offset().top
    }, 1e3)
}), $(".iconos-grand").click(function() {
    $("html,body").animate({
        scrollTop: $(".abajo-grand").offset().top
    }, 1e3)
}), $(".iconos-luxury").click(function() {
    $("html,body").animate({
        scrollTop: $(".abajo-luxury").offset().top
    }, 1e3)
}), 


/*
    ================================================================================
                                          
                
    ================================================================================
  */
$(window).scroll(function() {
    $(this).scrollTop() > 650 ? $("#despla, #arriba-servicios-abordo").fadeIn() : $("#despla, #arriba-servicios-abordo").fadeOut()
}), 



/*
    ================================================================================
                                        
                
    ================================================================================
  */
    
 /*
    ================================================================================
                                        
                
    ================================================================================
  */     
    $(".pack, #preview").hover(function() {
                      var state = $(this).data('state');
                     if ( state ) {
                     $("#preview").stop().animate({height: 0, width: 0, opacity: 0}, 150);
                     $("#combo").stop().animate({height: "auto", width: "100%" }, 150);
                     state = false;
                     }else{
                     $("#preview").stop().animate({height: "550px", width: "40%", opacity: 1}, 150);
                     $("#combo").stop().animate({height: "auto", width: "60%" }, 150);


                     state = true;
                     }
                     $(this).data('state', state);
                      }), 
    
    
    
/*
    ================================================================================
                                        
                
    ================================================================================
  */    
    
     $(".turismo, #preview2").hover(function() {
                      var state = $(this).data('state');
                     if ( state ) {
                     $("#preview2").stop().animate({height: 0, width: 0, opacity: 0}, 150);
                     $("#combo").stop().animate({height: "auto", width: "100%" }, 150);
                     state = false;
                     }else{
                     $("#preview2").stop().animate({height: "550px", width: "40%", opacity: 1}, 150);
                     $("#combo").stop().animate({height: "auto", width: "60%" }, 150);


                     state = true;
                     }
                     $(this).data('state', state);
                      }), 
    
    
    
    
/*
    ================================================================================
                                        
                
    ================================================================================
  */    
     $(".vtn, #preview3").hover(function() {
                      var state = $(this).data('state');
                     if ( state ) {
                     $("#preview3").stop().animate({height: 0, width: 0, opacity: 0}, 150);
                     $("#combo").stop().animate({height: "auto", width: "100%" }, 150);
                     state = false;
                     }else{
                     $("#preview3").stop().animate({height: "550px", width: "40%", opacity: 1}, 150);
                     $("#combo").stop().animate({height: "auto", width: "60%" }, 150);


                     state = true;
                     }
                     $(this).data('state', state);
                      }), 
    
    
    
 /*
    ================================================================================
                                        
                
    ================================================================================
  */   
     $(".viva, #preview4").hover(function() {
                      var state = $(this).data('state');
                     if ( state ) {
                     $("#preview4").stop().animate({height: 0, width: 0, opacity: 0}, 150);
                     $("#combo").stop().animate({height: "auto", width: "100%" }, 150);
                     state = false;
                     }else{
                     $("#preview4").stop().animate({height: "550px", width: "40%", opacity: 1}, 150);
                     $("#combo").stop().animate({height: "auto", width: "60%" }, 150);


                     state = true;
                     }
                     $(this).data('state', state);
                      }), 
    
    
 $(document).ready(function() {
    $(".oculto").hide(), $(".inf").click(function() {
        var t = $(this).attr("href");
        return $(t).is(":visible") ? ($(t).hide(), !1) : ($(".oculto").hide("slow"), $(".nooculto").hide("slow"), $(t).fadeToggle("slow"), !1)
    })
});

/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);



 /*
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                          FUNCION IMPRIMIR MOTOR VENTAS
                            Imprimir Iframe con motor Ventas ETN en el documento 
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/


// Aplicacion general ETN página ETN
var appETN = angular.module('appETN', []);



/*
    ====================================================
            CONTROLADOR GENERAL DE LA APPLICACIÓN
                 Controla todo el documento
    ====================================================
*/
appETN.controller('ctrlMainETN', ['$scope', function($scope){

  // Variable que actualiza todos los documentos JS y CSS
    var random = Math.floor( (Math.random()*7)+77 );
    $scope.versionx = 'series='+random+(5*7);
}]);

/*
    ========================================
      Controllador de motor ventas ETN 
    ========================================
*/
  
appETN.controller('ctrIframe', ['$scope', function($scope){


// numeros aleatorios
    $scope.myNumRand = Math.floor((Math.random()*5)+1712)


// Url de imagenes
   $scope.paseAbordarPreview      = 'images/vista_previa/viewPaseAbordar.png';
   $scope.boletoAbiertoPreview    = 'images/vista_previa/viewBoletoAbierto.png';
   $scope.itinerarioPreview       = 'images/vista_previa/viewItinerario.png';
   $scope.factureViajePreview     = 'images/vista_previa/viewFactureViaje.png';
   $scope.atencionClientesPreview = 'images/vista_previa/viewAtencionClientes.v2.png';


// Inhabilitar objetos
   $scope.btnOrigen = false;
   $scope.viewPaseAbordar = 'element-display-none';
   $scope.viewBoletoAbierto = 'element-display-none';
   $scope.viewItinerario = 'element-display-none';
   $scope.viewFactureViaje = 'element-display-none';
   $scope.viewAtencionClientes = 'element-display-none';
   $scope.viewCorridaVentas = 'element-display-none';


// Previsualización
   $scope.previewPaseAbordarTrue  =  function(){ $scope.viewPaseAbordar = 'element-display-show';}
   $scope.previewPaseAbordarFalse =  function(){ $scope.viewPaseAbordar = 'element-display-none';}
   $scope.previewBoletoAbiertoTrue  = function(){  $scope.viewBoletoAbierto = 'element-display-show';}
   $scope.previewBoletoAbiertoFalse = function(){  $scope.viewBoletoAbierto = 'element-display-none';   }
   $scope.previewItinerarioTrue  =  function(){ $scope.viewItinerario = 'element-display-show'; }
   $scope.previewItinerarioFalse =  function(){ $scope.viewItinerario = 'element-display-none';}
   $scope.previewFactureViajeTrue  =  function(){ $scope.viewFactureViaje = 'element-display-show';}
   $scope.previewFactureViajeFalse =  function()
   { $scope.viewFactureViaje 
      = 'element-display-none';
   }
   $scope.previewAtencionClientesTrue  =  function(){ $scope.viewAtencionClientes = 'element-display-show';}
   $scope.previewAtencionClientesFalse =  function(){ $scope.viewAtencionClientes = 'element-display-none';}
  }]);



/*
    ================================================================================
                    CONTROLADOR DE BUSQUEDA DE HORARIOS  
                Buscar horarios segun seleccion de usuario      
    ================================================================================
  */
 appETN.controller('ctrSearch', ['$scope', function($scope){

      // Cambio de clase para buscador en tiempo real
      $scope.searchingClass = 'element-display-none';
      $('#search_origen').keypress(function(){
              $scope.searchingClass = 'element-display-show';
      });
        $('#search_origen').keyup(function()
        {
              if($('#search_origen').val().length < 1)
              {
                // quitar la clase
                $scope.searchingClass = 'element-display-none';
              }
        });
  }]);


/* 
 ============================================================================================================
                                PREVISUALIZADOR DE SERVICIOS
     Muestra o Oculta los servicios de index.html(imprimir boleto, atención a clientes...etc)
 ============================================================================================================
*/
      $('#previewServiciosEtn').removeClass('element-display-none');
      // Agregar clase
      $('#previewServiciosEtn').addClass('element-display-show');
/*
============================================================================================
                    jquery.snow - jQuery Snow Effect Plugin
                Libreria efecto de nieve activar en invierno
============================================================================================
*/

(function($){
	
	$.fn.snow = function(options){
	
			var $flake 			= $('<div id="flake" />').css({'position': 'absolute', 'top': '-50px'}).html('&#10052;'),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 10,
									maxSize		: 20,
									newOn		: 200,
									flakeColor	: "#FFFFFF"
								},
				options			= $.extend({}, defaults, options);
				
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 100 + Math.random() * 200,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$flake
					.clone()
					.appendTo('body')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);
			}, options.newOn);
	
	};
	
})(jQuery);

/*
 ===================================================================
                          EFECTO DE NIEVE 
                  Colocar nieve a todo el sitio ETN
                  Conciensia, compasion, sabiduria y virtud
 ===================================================================
*/    

$(document).ready( function()
{ 
        // instancia Date
        var f = new Date();

        // Calcular fecha actual
        var fechaActual = parseInt(f.getDate() +''+ (f.getMonth() +1)); //197

        // Temporada de invierno
        var inviernoStart  = parseInt('198');  // 21/diciembre 198
        var inviernoEnd    = '0'; // 20/Marzo

       
        /*if( fechaActual >= inviernoStart)
        {
            alert('FechaActual es mayor igual que inicioInvierno');
        }*/

        /*else if(inviernoEnd > fechaActual)
        {
            alert('inviernoEnd es mayor que FechaActual');
        }
        */
       /// Activar nieve
        ///$.fn.snow(); 

});








