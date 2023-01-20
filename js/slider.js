(function(){

    //propiedades
var prop_slider = {

    slider: document.getElementById('slider'),
    primer_slide: null


}

//metodos

var met_slider = {

    inicio: function () {
        setInterval(met_slider.mover_slide, 3000);
    },

    mover_slide: function () {
      prop_slider.slider.style.transition = 'all 1s ease'
      prop_slider.slider.style.marginLeft = '-100%'

      setTimeout(
          function(){
              prop_slider.primer_slide = prop_slider.slider.firstElementChild;

              prop_slider.slider.appendChild(prop_slider.primer_slide);

              prop_slider.slider.style.transition = 'unset'

              prop_slider.slider.style.marginLeft = 0;
          },1000 
      )

    }

}


met_slider.inicio();

}())

