

$(document).ready(function(){
    $(window).scroll(function(){
        //  navbar  script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // função mostrar e esconder botão de sobe 
        if(this.scrollY > 500){
            $('.botao-de-topo').addClass("show");
        }else{
            $('.botao-de-topo').removeClass("show");
        }
    });

    //  script do botão faz ao topo
    $('.botao-de-topo').click(function(){
        $('html').animate({scrollTop: 0});
        // removendo smooth scroll no botão de subir 
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applicando  smooth scroll nos itens do menu 
        $('html').css("scrollBehavior", "smooth");
    });

    //   menu de nav script
    $('.botao-de-menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.botao-de-menu i').toggleClass("active");
    });

    // tipo de animação de texto corrente script
    var typed = new Typed(".typing", {
        strings: ["Desenvolver Web", "Gestor Informático", "Digital Influeencer", "Escritor", "Tecnico de HelpDesk"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Desenvolver Web", "Gestor Informático", "Digital Influeencer", "Escritor", "Tecnico de HelpDesk"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // O  carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});