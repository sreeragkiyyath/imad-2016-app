/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
$("#product").click(function() {
    $('html, body').animate({scrollTop: $(".gallery-set").offset().top }, 1700);
});
$("#home").click(function() {
    $('html, body').animate({scrollTop: $(".cover-banner").offset().top }, 1700);
});

$("#logo-header").click(function() {
    $('html, body').animate({scrollTop: $(".cover-banner").offset().top }, 1700);
});

$("#contact").click(function() {
    $('html, body').animate({scrollTop: $(".contact-part").offset().top }, 1700);
});
    //
    //$(".gallery-set").click(function() {
    //    $('html, body').animate({scrollTop: $(".gallery-set").offset().top }, 2700);
    //});



$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

$(document).ready(function(){
    setTimeout($("span").animate({'font-size' : '24px','opacity': '1','margin-right':'20px'},2000) , 5000); 
});




});
