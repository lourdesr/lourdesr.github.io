$.when( $.ready ).then(function() {
    console.log("Loaded!");
    
    $( "#initShow" ).fadeIn( 1000, function() {
        
        $(window).scroll( function(){
    
            /* Check the location of each desired element */
            $('.hideme').each( function(i){
                
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( 1.25 * bottom_of_window >= bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},1000);
                        
                //https://economictimes.indiatimes.com/jobs/sap-labs-india-believes-in-fostering-a-diverse-culture/articleshow/64823593.cms

                //http://www.greatplacetowork.in/best-work-places/asia-best-workplaces-2018/

                //https://www.sap.com/canada/products/cloud-customer-engagement.html

                }
                
            }); 
        
        });
        



    });

});


