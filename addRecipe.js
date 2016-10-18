'use strict';
var recip = [{name:"Book1",parts:["Chapter1","Chapte2"]},{name:"Book2",parts:["Chapter2","Chapte3"]}];
 function append2 (value) {
		recip.push(value);
	}
var b = 0;

function renderItems2 () {
		 var ready= recip;	
		b = 0;	
		document.getElementById('recipe').innerHTML = '';
		document.getElementById('addbook').value = '';
		for (var i = 0; i < ready.length; i++) {
			putRecipe(ready[i].name);	
		}
	}
	renderItems2();	
	
function putRecipe (recipeName) {
		var div = document.createElement('div');
		div.id = 'book' + b;
		div.className = 'Book';
		div.innerHTML = recipeName;
		document.getElementById('recipe').appendChild(div);
		b++;
	}
document.getElementById('addButton0').addEventListener('click', addBooks,true);
	
	function addBooks () {
		var value = document.getElementById('addbook').value;
		if (value.length != 0) {			
			append2(value);	
			renderItems2();
			  alert('Новый элемент добавлен');
		} else {
			 alert('Введите название элемента');
		}
		
	}