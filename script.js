/***Menu Sliders****/

$(document).ready(function(){
    $("#store").click(function(){
        $("#nynj").slideToggle(300);
    });
});

$(document).ready(function(){
    $("#shop").click(function(){
        $("#prods").slideToggle(300);
    });
});

/***modal boxes**/

$(document).ready(function(){
   $("#modal").dialog({
       autoOpen: false,
   }); 
   $("#one").click(function(){
       $("#modal").dialog("open");
   });
});

$(document).ready(function(){
    $("#modal2").dialog({
        autoOpen: false,
    });
    $("#two").click(function(){
        $("#modal2").dialog("open");
    });
});

$(document).ready(function(){
   $("#modal").dialog({
       autoOpen: false,
   }); 
   $("#promo").click(function(){
       $("#modal").dialog("open");
   });
});

$(document).ready(function(){
    $("#modal3").dialog({
        autoOpen: false,
    });
    $("#link").click(function(){
        $("#modal3").dialog("open");
    });
});


