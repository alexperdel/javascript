        /*Detectar dispositivo movil o desktop*/
        let navegador = navigator.userAgent;
     if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
         document.getElementById('movil').innerHTML = ("estas utilizando tu ordenador");
     } else {
         document.getElementById('movil').innerHTML = ("estas navegando desde tu móvil Android");
     }

        /*Detectar IP local*/

         function get_ip(obj){
             document.getElementById('ipId').innerHTML = obj.ip;
         }
     