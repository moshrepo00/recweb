
    function goToByScroll(id){
          // Reove "link" from the ID
        
        id = id.replace("link", "");
        console.log(id);
          // Scroll
        $('html, body').animate({
            scrollTop: $("."+id).offset().top},'slow');
    }

    $("nav .bar, .btn").click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
          console.log($(this).attr("class"));
          if($(this).attr("class") === "btn"){
             $('html, body').animate({
            scrollTop: $(".contact").offset().top},'slow'); 
          }else{
        console.log($(this));
        goToByScroll($(this).attr("id")); 
          
          }

                 
    });
