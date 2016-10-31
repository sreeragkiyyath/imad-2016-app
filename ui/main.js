console.log('Loaded!');
/*
var button = document.getElementById('button-counter');
button.onclick = function(){
            var request = new XMLHttpRequest();		
			request.onreadystatechange = function () {
				if(request.readyState === XMLHttpRequest.DONE){
					if(request.status ===200) {
				/*		var counter = request.responseText;
						var span = document.getElementById('count');
						span.innerHTML = counter.toString();*/

/*
						
						var names = ['name1','name2','name3','name4'];
                          var list = '';
                          for(var i = 0; i < names.length; i++) {
                                  list+='<li>'+names[i]+'</li>';
        
                             }
                               var ul =  document.getElementById('nameList');
                             ul.innerHtml = list; 
						
						
					} 
				}
			};
			
			request.open('GET','http://localhost:8080/counter',true);
			request.send(null);
};



/*******

CODE  SHOULD  BE EXECUTED UNDER READY OR ONLOAD FUNCTUION BCOZ THEN ONLY JAVA SCRIPT GET ALL RESOURCES


***********/






$(document).ready(function() {
alert('asdad');
var submit = document.getElementById('submit_btn');
submit.onClick=function(){
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
		request.open('GET','http://https://cloud.imad.hasura.io:8080/submit-name?name='+name,true);
		request.send(null);
};

});