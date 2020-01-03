
$(function(){

// Variables ----------------------------------------------------------
    var $carouselList = $("#carousel ul");
    $slides = $carouselList.find("li")
    var $dots = $('.dots span');

    var animationSpeed = 1000;
    var pause = 4000;
    
    var currentSlide = 1;

// Adding 'active' class for dot nr 1 after loading page ---------------
    $dots.eq(currentSlide).addClass('active');

    
// Moving to first slide after last -----------------------------------
    moveFirstSlide = function(){
        var firstItem = $carouselList.find("li:first");
        var lastItem = $carouselList.find("li:last");

        lastItem.after(firstItem);
        $carouselList.css({marginLeft: 0});
        
        currentSlide++;
        if(currentSlide === $slides.length){
            currentSlide = 0;}

        changeDot();              
    }

// Moving to last slide after click previus on first slide ------------
    previousSlide = function(){
        var firstItem = $carouselList.find("li:first");
        var lastItem = $carouselList.find("li:last");

        firstItem.before(lastItem);
        $carouselList.css({marginLeft: 0});
        
        currentSlide--;
        if(currentSlide < 0){
            currentSlide = $slides.length - 1;}

        changeDot();
    }

// Changing dots -------------------------------------------------
    changeDot = function() {       
        $dots.removeClass('active');
        $dots.eq(currentSlide).addClass('active');
    }

// Arrows variables -----------------------------------------------------------
    var rightArrow = $("#right");
    var leftArrow = $("#left");

// Changing slides after right arrow click ------------------------------------------
    rightArrow.click(function(){   
        clearInterval(slideInterval); 
        $carouselList.animate({'marginLeft': -600}, animationSpeed, moveFirstSlide); 
        slideInterval = setInterval(changeSlide, pause);
    })

// Changing slides after left arrow click ------------------------------------------
    leftArrow.click(function(){
        clearInterval(slideInterval);
        $carouselList.animate({'marginLeft': 600}, animationSpeed, previousSlide);  
        slideInterval = setInterval(changeSlide, pause);
    })
    
// Changing slides without action ---------------------------------------------------
    changeSlide = function(){ 
        $carouselList.animate({'marginLeft':-600}, animationSpeed, moveFirstSlide); 
        }


// Variable for changing slide interval --------------------------------------------        
    var slideInterval = setInterval(changeSlide, pause);
    
})