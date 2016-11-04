/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */








$(document).ready(function() {
    
    
    
$('.btn').click(function(e) {
    e.preventDefault();  //stop the browser from following
    window.location.href = 'ui/ResumeSreeragK.pdf';
});


    

    
$("#projects").click(function() {
    $('html, body').animate({scrollTop: $(".gallery-set").offset().top }, 1700);
});

$("#aboutme").click(function() {
    $('html, body').animate({scrollTop: $(".cover-banner").offset().top }, 1700);
});

$("#logo-header").click(function() {
    $('html, body').animate({scrollTop: $(".cover-banner").offset().top }, 1700);
});

$("#contact").click(function() {
    $('html, body').animate({scrollTop: $("..resume-part").offset().top }, 2100);
});

$("#resume").click(function() {
    $('html, body').animate({scrollTop: $(".resume-part").offset().top }, 2200);
});


$("#skills").click(function() {
    $('html, body').animate({scrollTop: $(".image-banner").offset().top }, 2100);
});




var submitt = document.getElementById('check');
submitt.onclick=function(){
    alert("helloo");
      var request = new XMLHttpRequest();		
	  request.onreadystatechange = function () {
				if(request.readyState === XMLHttpRequest.DONE){
					if(request.status ===200) {
					    var names = request.responseText;
					    names = JSON.parse(names);
                     
                        var list = '';
                          for(var i = 0; i < names.length; i++) {
                                  list+='<li>'+names[i]+'</li>';
        
                        }
                         var ul =  document.getElementById('nameList');
                         ul.innerHTML = list; 
					} 
				}
};
var nameInput = document.getElementById('name');
var name = nameInput.value;
		request.open('GET','http://sreeragkiyyath.imad.hasura-app.io/submit-name?name='+name,true);
		request.send(null);
};

    //
    //$(".gallery-set").click(function() {
    //    $('html, body').animate({scrollTop: $(".gallery-set").offset().top }, 2700);
    //});

});

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




