'use strict';
function allowDrop(ev){
	event.preventDefault();
}
function drag(ev){
	event.dataTransfer.setData("text", ev.target.id);
}
function drop(ev){
	event.preventDefault();
	var id = event.dataTransfer.getData("text");
	if (event.target.id == 'bookshelf1' || 
			event.target.id == 'bookshelf2' ||
			event.target.id == 'boiler') {
			event.target.appendChild(document.getElementById(id));	
		}
	
}
