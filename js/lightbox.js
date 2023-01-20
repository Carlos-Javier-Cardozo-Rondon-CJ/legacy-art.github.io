(function(){
    
//objeto con las propiedades del efecto lightbox

var propl_ightbox = {

    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null,
    imagenSrc: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container: null,
    modal: null,
    cerrar_modal: null,
    animacion: 'fade'

}

//objeto con los metodos del efecto lightbox

var met_lightbox = {

    inicio: function () {

        for (let i = 0; i < propl_ightbox.imgContainer.length; i++) {
            propl_ightbox.imgContainer[i].addEventListener('click', met_lightbox.capturaImagen)

        }

    },

    capturaImagen: function () {
        propl_ightbox.imagen = this;
        met_lightbox.lightbox(propl_ightbox.imagen);
    },

    lightbox: function (imagen) {

        propl_ightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
        propl_ightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');

        propl_ightbox.lightbox_container = document.getElementById('lightbox_container');

        propl_ightbox.lightbox_container.style.width = '100%';
        propl_ightbox.lightbox_container.style.height = '100%';
        propl_ightbox.lightbox_container.style.position = 'fixed';
        propl_ightbox.lightbox_container.style.zIndex = '10000000';
        propl_ightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        propl_ightbox.lightbox_container.style.top = '0';
        propl_ightbox.lightbox_container.style.left = '0';

        propl_ightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');

        propl_ightbox.modal = document.getElementById('modal');

        propl_ightbox.modal.style.height = '100%';


        propl_ightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propl_ightbox.imagenSrc);

        propl_ightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');


        if (propl_ightbox.animacion == 'fade') {
            document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;

            setTimeout(function () {
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
            }, 100)
        }


        propl_ightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>';

        propl_ightbox.cerrar_modal = document.getElementById('cerrar_modal');
        propl_ightbox.cerrar_modal.addEventListener('click', met_lightbox.cerrar_modal);
    },

    cerrar_modal: function () {

        propl_ightbox.cuerpoDom.removeChild(propl_ightbox.lightbox_container);
    }

}

met_lightbox.inicio(); 

}())

