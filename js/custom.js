// CAMBIAR COLOR BG
$(function() {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#navup').addClass('changeColor')
			$('#fbico').addClass('fbIcon')
			$('#twico').addClass('twIcon')
			$('#igico').addClass('igIcon')
			$('#navup').removeClass('primerColor')
			$('#fbico').removeClass('primerIcon')
		 }
		if ($(this).scrollTop() < 500) {
			$('#navup').removeClass('changeColor')
			$('#fbico').removeClass('fbIcon')
			$('#twico').removeClass('twIcon')
			$('#igico').removeClass('igIcon')
			$('#navup').addClass('primerColor')
			$('#fbico').addClass('primerIcon')
			}
	});
});

// SCROLL REVEAL
window.sr = ScrollReveal();
sr.reveal('#logo-1',{
	duration: 1800,
	origin: 'bottom',
	distance: '300px'
});
sr.reveal('#logo-2',{
	duration: 1800,
	origin: 'bottom',
	distance: '300px',
	delay: 200
});
sr.reveal('#logo-3',{
	duration: 1800,
	origin: 'bottom',
	distance: '300px',
	delay: 400
});
sr.reveal('.logo-switch',{
	duration: 1000,
	origin: 'bottom',
	distance: '100px'
});
sr.reveal('#us',{
	duration: 1000,
	origin: 'left',
	distance: '100px'
});
sr.reveal('#corte-1',{
	duration: 1000,
	origin: 'top',
	distance: '200px'
});
sr.reveal('#conteo',{
	duration: 1000,
	origin: 'bottom',
	distance: '200px'
});
sr.reveal('#mac-frente',{
	duration: 1500,
	origin: 'left',
	distance: '100px'
});
sr.reveal('#futuro',{
	duration: 1500,
	origin: 'bottom',
	distance: '100px'
});
sr.reveal('#boton-futuro',{
	duration: 2000,
	origin: 'bottom',
	distance: '100px'
});
sr.reveal('#barra-tiempo',{
	duration: 2000,
	delay: 200
});
sr.reveal('#soporte',{
	duration: 2000,
	origin: 'left',
	distance: '100px',
	delay: 100
});
sr.reveal('#desarrollo',{
	duration: 2000,
	origin: 'left',
	distance: '100px',
	delay: 300
});
sr.reveal('#corte-2',{
	duration: 2000,
	delay: 200
});
sr.reveal('#diseno',{
	duration: 2000,
	origin: 'left',
	distance: '100px'
});
sr.reveal('#lista-1',{
	duration: 2000,
	origin: 'left',
	distance: '100px',
	delay: 100
});
sr.reveal('#lista-2',{
	duration: 2000,
	origin: 'left',
	distance: '100px',
	delay: 300
});
sr.reveal('#ipad',{
	duration: 2000,
	origin: 'left',
	distance: '100px'
});
sr.reveal('#car',{
	duration: 2000,
	origin: 'bottom',
	distance: '200px'
});
sr.reveal('#clientes',{
	duration: 2000,
	origin: 'bottom',
	distance: '200px',
});
sr.reveal('#corte-3',{
	duration: 2000,
});
sr.reveal('#contacto',{
	duration: 2000,
	origin: 'top',
	distance: '100px',
	delay: 200
});
sr.reveal('#mapa',{
	duration: 2000,
	origin: 'bottom',
	distance: '100px',
	delay: 200
});
sr.reveal('#footer',{
	duration: 1000,
	origin: 'bottom',
	distance: '50px',
	delay: 100
});
// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//++++++++++++++++++++++++++++++++++++++++

// SLICK settings

//++++++++++++++++++++++++++++++++++++++++


$('.clientcar').slick({
	centerMode: true,
  centerPadding: '60px',
  slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3
      }
    }
  ]
});
