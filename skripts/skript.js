jQuery(document).ready(function(){

    const burgerElement = jQuery('.header_burger');
    const searchInput = jQuery(".header_search input");
    const searchButton = jQuery(".header_search-img");
    const sliderConstruction = jQuery(".slider-block_cards");

    initBurgerMenu(burgerElement);
    hideSearch(searchInput);
    openSearch(searchButton, searchInput);
    initSlider(sliderConstruction);
    showElementOnScroll();


    jQuery('.slider-block_prev').on('click', function () {
        jQuery('.slider-block_cards .owl-nav .owl-prev').click();
    });
    jQuery('.slider-block_next').on('click', function () {
        jQuery('.slider-block_cards .owl-nav .owl-next').click();
    }); 
});

function initBurgerMenu(burgerElement) {
    burgerElement.click(function(){
        jQuery('body').toggleClass('burger--active')
    });
}


function hideSearch(searchInput) {
    searchInput.animate({width:'toggle'},0)
}


function openSearch(searchButton,searchInput ) {
    searchButton.click(function(){
        searchInput.animate({width:'toggle'},350)
    });
}


function initSlider(sliderConstruction) {
    sliderConstruction.owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout: 5000,
        loop:true,
        dotsEach: 1,
    });
}


function showElementOnScroll() {
    let show = true;
    $(window).on("scroll", function loadingNumber(){
        
        if(!show) return false;

        let w_top = $(window).scrollTop();
        let numb_top = $(".number").offset().top;

        if(w_top + 650 > numb_top){
            $(".number_run").spincrement({
                thousandSeparator: "",
                duration: 1200
            });
            show = false;
        }
    });

    $(window).on("scroll", function(){

        let w_top = $(window).scrollTop();
        let cardsTop = $(".cards").offset().top;


        if(w_top + 200 >= cardsTop){
            $(".cards").addClass("cards--active")
        }
    });
    $(window).on("scroll", function(){

        let w_top = $(window).scrollTop();
        let serviceTop = $(".service").offset().top;

        if(w_top + 200 >= serviceTop){
            $(".service").addClass("service--active")
        }
    });
}