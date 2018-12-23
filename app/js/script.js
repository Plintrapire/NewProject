$(document).ready(function(){

      $(".span1").click(function(event){ 
          $('html').animate({scrollTop: 880}, 1500);
      });

      $(".span2").click(function(event){ 
          $('html').animate({scrollTop: 1620}, 1500);

      });

      $(".span3").click(function(event){ 
          $('html').animate({scrollTop: 2545}, 1500);

      });

      $(".span4").click(function(event){ 
          $('html').animate({scrollTop: 3565}, 1500);

      });

      $(".span5").click(function(event){ 
          $('html').animate({scrollTop: 3921}, 1500);

      });

      $(".span6").click(function(event){ 
          $('html').animate({scrollTop: 4771}, 1500);

      });



$('.scroll').click(function(){ 
    if($(window).scrollTop()<880){ 
      $('html').animate({scrollTop: 880}, 1500);
      $(".scroll").css("border","1px solid white");
      $(".scroll2").css("border","1px solid white");
      $(".scroll-obc p").css("color","white");
      $(".scroll").css("backgroundImage", "url(./img/scroll.png)");
      $(".scroll2").css("backgroundImage", "url(./img/scroll2.png)");
    }
    else { 
      if($(window).scrollTop()<1620){ 
        $('html').animate({scrollTop: 1620}, 1500);
        $(".scroll").css("border","1px solid white");
        $(".scroll2").css("border","1px solid white");
        $(".scroll-obc p").css("color","white");
        $(".scroll").css("backgroundImage", "url(./img/scroll.png)");
        $(".scroll2").css("backgroundImage", "url(./img/scroll2.png)");
      }
      else {
        if($(window).scrollTop()< 2545){ 
          $('html').animate({scrollTop: 2545}, 1500);
          $(".scroll").css("border","1px solid black");
          $(".scroll2").css("border","1px solid black");
          $(".scroll-obc p").css("color","black");
          $(".scroll").css("backgroundImage", "url(./img/scrollb.png)");
          $(".scroll2").css("backgroundImage", "url(./img/scroll2b.png)");
        }
        else {
          if($(window).scrollTop()< 3565){ 
            $('html').animate({scrollTop:  3565}, 1500);
            $(".scroll").css("border","1px solid white");
            $(".scroll2").css("border","1px solid white");
            $(".scroll-obc p").css("color","white");
            $(".scroll").css("backgroundImage", "url(./img/scroll.png)");
            $(".scroll2").css("backgroundImage", "url(./img/scroll2.png)");
          }
          else{
            if($(window).scrollTop()< 3921){ 
              $('html').animate({scrollTop:  3921}, 1500);
              $(".scroll").css("border","1px solid white");
              $(".scroll2").css("border","1px solid white");
              $(".scroll-obc p").css("color","white");
              $(".scroll").css("backgroundImage", "url(./img/scroll.png)");
              $(".scroll2").css("backgroundImage", "url(./img/scroll2.png)");
            }
            else{
              if($(window).scrollTop()< 4771){ 
                $('html').animate({scrollTop:  4771}, 1500);
                $(".scroll").css("border","1px solid black");
                $(".scroll2").css("border","1px solid black");
                $(".scroll-obc p").css("color","black");
                $(".scroll").css("backgroundImage", "url(./img/scrollb.png)");
                $(".scroll2").css("backgroundImage", "url(./img/scroll2b.png)");
              }
            }
          }
        } 
      }
    } 
}); 
// 

$('.scroll2').click(function(){ 
    if($(window).scrollTop()>4771){ 
      $('html').animate({scrollTop: 4771}, 1500);
      $(".scroll").css("border","1px solid white");
      $(".scroll2").css("border","1px solid white");
      $(".scroll-obc p").css("color","white");
      $(".scroll").css("backgroundImage", "url(./img/scroll.png)");
      $(".scroll2").css("backgroundImage", "url(./img/scroll2.png)");
    }
    else { 
      if($(window).scrollTop()>3921){ 
        $('html').animate({scrollTop: 3921}, 1500);
        $(".scroll").css("border","1px solid white");
        $(".scroll2").css("border","1px solid white");
        $(".scroll-obc p").css("color","white");
        $(".scroll").css("backgroundImage", "url(./img/scroll.png)");
        $(".scroll2").css("backgroundImage", "url(./img/scroll2.png)");
      }
      else {
        if($(window).scrollTop()>3565){ 
          $('html').animate({scrollTop: 3565}, 1500);
          $(".scroll").css("border","1px solid white");
          $(".scroll2").css("border","1px solid white");
          $(".scroll-obc p").css("color","white");
          $(".scroll").css("backgroundImage", "url(./img/scroll.png)");
          $(".scroll2").css("backgroundImage", "url(./img/scroll2.png)");
        }
        else {
          if($(window).scrollTop()>2545){ 
          $('html').animate({scrollTop: 2545}, 1500);
          $(".scroll").css("border","1px solid black");
          $(".scroll2").css("border","1px solid black");
          $(".scroll-obc p").css("color","black");
          $(".scroll").css("backgroundImage", "url(./img/scrollb.png)");
          $(".scroll2").css("backgroundImage", "url(./img/scroll2b.png)");
          }
          else{
            if($(window).scrollTop()>1620){ 
              $('html').animate({scrollTop: 1620}, 1500);
              $(".scroll").css("border","1px solid white");
              $(".scroll2").css("border","1px solid white");
              $(".scroll-obc p").css("color","white");
              $(".scroll").css("backgroundImage", "url(./img/scroll.png)");
              $(".scroll2").css("backgroundImage", "url(./img/scroll2.png)");
            }
            else{
              if($(window).scrollTop()>880){ 
                $('html').animate({scrollTop: 880}, 1500);
                $(".scroll").css("border","1px solid white");
                $(".scroll2").css("border","1px solid white");
                $(".scroll-obc p").css("color","white");
                $(".scroll").css("backgroundImage", "url(./img/scroll.png)");
                $(".scroll2").css("backgroundImage", "url(./img/scroll2.png)");
              }
              else{
              if($(window).scrollTop()>0){ 
                $('html').animate({scrollTop: 0}, 1500);
                $(".scroll").css("border","1px solid white");
                $(".scroll2").css("border","1px solid white");
                $(".scroll-obc p").css("color","white");
                $(".scroll").css("backgroundImage", "url(./img/scroll.png)");
                $(".scroll2").css("backgroundImage", "url(./img/scroll2.png)");
                }
              }
            }
          }
        } 
      }
    } 
}); 

  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() !=0) {
        $('.scroll-obc').fadeIn();
      }
      else {
        $('.scroll-obc').fadeOut();
      }
    });
  });



});


  function prepare_xml() { // функция отправки и приема данных (ajax)
    var formData = new FormData(document.forms.name_form);
    console.dir(formData); // что там отправляем то?
    var xhr = new XMLHttpRequest(); //создаем объект
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { //проверяем ответ на ошибки
        // если норм то выводим
        document.getElementById("result_output").innerHTML = this.responseText;
      }
      else
      { 
        // если нет сообщаем об ошибке
        document.getElementById("result_output").innerHTML = "Error";
      }
    };
    xhr.open("POST", "controller.php"); // post запрос на конкретный контроллер
    xhr.send(formData); //отпраляем данные

}
