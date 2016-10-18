'use strict';
var part = ["Chapter1","Chapter2","Chapter3"];
  function append (value) {
		part.push(value);
	}
var a = 0;

function renderItems () {
		var items = part;	
		a = 0;	
		document.getElementById('bookshelf1').innerHTML = '';
		document.getElementById('addItem').value = '';
		for (var i = 0; i < items.length; i++) {
			putItem(items[i]);	
		}
	}
	renderItems();	
function putItem (itemName) {
		var span = document.createElement('span');
		span.id = 'Chap' + a;
		span.className = 'Chapter';
		span.setAttribute('draggable', true);
		span.ondragstart = drag;
		span.innerHTML = itemName;
		document.getElementById('bookshelf1').appendChild(span);
		a++;
	}
	
	document.getElementById('addButton').addEventListener('click', addPart,true);
	
	function addPart () {
		var value = document.getElementById('addItem').value;
		if (value.length != 0) {			
			append(value);	
			renderItems();
			  alert('Новый элемент добавлен');
		} else {
			 alert('Введите название элемента');
		}
		
	}
	