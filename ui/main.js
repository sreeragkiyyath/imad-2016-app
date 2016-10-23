console.log('Loaded!');

var button = document.getElementById('button-counter');
button.onclick = function(){

var request = new XMLHttpRequest();		
			request.onreadystatechange = function () {
				if(request.readyState === XMLHttpRequest.DONE){
					if(request.status ===200) {
						var cnt = request.responseText;
						var spanq = document.getElementById('spanline');
						spanq.innerHTML = counter.toString();
					} 
				}
			};
			
			request.open('GET','http://localhost:8080/counter',true);
			request.send(null);
};


var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick=function(){
    
    
    
};
