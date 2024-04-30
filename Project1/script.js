$(document).ready(function(){
    $('.item1,.item2').hide();
    // Function to toggle items
    $('#toggleBtn1').click(function(){
      $('.item1').toggle(500);
       $('.arrow1').toggleClass('rotate')
    });
    $('#toggleBtn2').click(function(){
        $('.item2').toggle(500);
       $('.arrow2').toggleClass('rotate')

      });
  
    
    $('.fa-heart').click(function(){
        $(this).toggleClass('heart')});
       //======================date============================================
        var myVar = setInterval(myTimer, 1000);
        function myTimer() {
            var d = new Date();
            var t = d.toLocaleTimeString();
            $("#timeClock").html(t);
        }

        // =====================Scroll left or right on button====================
        $("#scrollLeft").click(function() {
            $(".products").animate({ scrollLeft: "-=500" },500);
        });
    
        $("#scrollRight").click(function() {
            $(".products").animate({ scrollLeft: "+=500" },500);
            console.log("called");
        });
        // =====================scroll left or right category===========================================
         $("#scrollLeftCategory").click(function() {
            $(".category").animate({ scrollLeft: "-=500" },500);
            });

            $("#scrollRightCategory").click(function() {
            $(".category").animate({ scrollLeft: "+=500" },500);
        console.log("called");
        });
        // =====================GO-UP===========================================
      
        $("#go-up").click(function() {
            $('html, body').animate({scrollTop : 0},800);
            // return false;
       console.log("called");
        });
        // ================================================================
  });
