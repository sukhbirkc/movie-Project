$(".one").hide();
$(".two").hide();
$(".three").hide();
$(".four").hide();


$(".english-button").click(function(){
    let mInput = $(".english").val();
        
    // display this text if the answer is correct
    if(mInput <=100 ) {
    $(".english-message").text("Nice, I like that number too!");
       
    }
   
});





$(".mbutton").click(function(){
    let mInput = $(".minput").val();
        
    // display this text if the answer is correct
    if(mInput === "action") {
    $(".m-message").text("watch venom!");
        $(".m-message").css("color", "yellow");
         $(".m-message").css("background-color", "black");
       $(".one").show();
        $(".two").hide();
        $(".three").hide();
        $(".four").hide();
    } else if(mInput === "horror") {
    $(".m-message").text("watch conjuring!"); 
        $(".m-message").css("color", "yellow");
         $(".m-message").css("background-color", "black");
         $(".two").show();
        $(".one").hide();
        $(".three").hide();
        $(".four").hide();
     } else if(mInput === "funny") {
    $(".m-message").text("watch red notice!");
         $(".m-message").css("color", "yellow");
          $(".m-message").css("background-color", "black");
          $(".three").show();
         $(".two").hide();
        $(".one").hide();
        $(".four").hide();
      } else if(mInput === "cartoon") {
    $(".m-message").text("watch clifford the big red dog!"); 
          $(".m-message").css("color", "yellow");
           $(".m-message").css("background-color", "black");
           $(".four").show();
          $(".two").hide();
        $(".three").hide();
        $(".one").hide();
    }
   
});

