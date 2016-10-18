'use strict'
var craf = document.querySelector('#boiler');
var buttonObj = document.getElementsByTagName('button');
craf.addEventListener('click', remove);

function remove(event){
	if(event.target.id != 'boiler'){
		var i = document.getElementById(event.target.id);
		items.appendChild(i);
	}
}
document.getElementById('craft').addEventListener('click', craft,true);

function craft(){
 var getTagName = craf.getElementsByTagName('span');	
     if(getTagName.length == 2){
		for(var i=0; i<recip.length;i++){
			if((getTagName[0].id == recip[i].parts[0] || getTagName[0].id == recip[i].parts[1]) && 
				(getTagName[1].id == recip[i].parts[0] || getTagName[1].id == recip[i].parts[1])){
				document.getElementById(recip[i].name).;
			    document.getElementById(recip[i].name);
				craf.removeChild(document.getElementById(recip[i].parts[0]));
				craf.removeChild(document.getElementById(recip[i].parts[1]));
			}
		}
	}
}