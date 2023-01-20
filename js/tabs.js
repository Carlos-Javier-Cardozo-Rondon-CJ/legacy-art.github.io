
// Objeto con propiedades de Tab
var propTabs = {

	primer_encabezado: document.getElementById('encabezado_galeria').firstElementChild,
	primer_contenido: document.getElementById('contenido_galeria').firstElementChild,
	enlaces_encabezado: document.querySelectorAll('#encabezado_galeria li a'),
	li_encabezado: document.querySelectorAll('#encabezado_galeria li'),
	divs_contenido: document.querySelectorAll('#contenido_galeria > div')

}

// Objeto con métodos de Tab
var metTabs = {
	
	inicio: function(){
		propTabs.primer_encabezado.className = 'active';
		propTabs.primer_contenido.className = 'active';

		for (var i = 0; i < propTabs.enlaces_encabezado.length; i++) {
			propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
		}
	},

	evento: function(e){
		e.preventDefault();

		for (var i = 0; i < propTabs.li_encabezado.length; i++) {
			propTabs.li_encabezado[i].className = '';
            propTabs.li_encabezado[i].firstElementChild.style.color = 'gray';
		}
		for (var i = 0; i < propTabs.divs_contenido.length; i++) {
			propTabs.divs_contenido[i].className = '';
		}

        this.parentElement.className = 'active';
        this.parentElement.firstElementChild.style.color = 'rgb(61, 5, 75)';
        propTabs.contenido_activo = this.getAttribute('href');
		document.querySelector(propTabs.contenido_activo).className = 'active';
		document.querySelector(propTabs.contenido_activo).style.opacity = 0;
		setTimeout(function(){
			document.querySelector(propTabs.contenido_activo).style.opacity = 1;
		}, 100);
        
	}

}

metTabs.inicio();