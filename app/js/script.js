
// $(document).ready(function(){

//  $(".menu").click(function(){ 
//     $(".podpunkt").slideToggle(1000);
//   });

//   $(".reg").click(function(){ 
//     $(".register").slideToggle(1000);
//   });

//   $(".sign").click(function(){ 
//     $(".sign-obc").slideToggle(1000);
//   });

//   $(".car1-obc").click(function(){
//    $(".car1-obc-xar").slideToggle(1000);
//   $(".car1-obc-info").css("height","717");
//   }); 


//   $(".car2-obc").click(function(){ 
//    $(".car2-obc-xar").slideToggle(1000);
//   $(".car2-obc-info").css("height","717");
//   });
// });

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
    }
    else { 
      if($(window).scrollTop()<1620){ 
        $('html').animate({scrollTop: 1620}, 1500);
      }
      else {
        if($(window).scrollTop()< 2545){ 
          $('html').animate({scrollTop: 2545}, 1500);
          $(".scroll").css("border","1px solid black");
        }
        else {
          if($(window).scrollTop()< 3565){ 
          $('html').animate({scrollTop:  3565}, 1500);
          }
          else{
            if($(window).scrollTop()< 3921){ 
              $('html').animate({scrollTop:  3921}, 1500);
            }
            else{
              if($(window).scrollTop()< 4771){ 
               $('html').animate({scrollTop:  4771}, 1500);
              }
            }
          }
        } 
      }
    } 
}); 




  });


      
