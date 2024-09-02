// var slideIndex=1;
// showSlides(slideIndex);

// function plusSlides(n){
//     showSlides(slideIndex+=n);
// }

// function currentSlide(n){
//     showSlides(slideIndex=n);
// }

// function showSlides(n){
//     var i;
//     var slides= document.getElementsByClassName('mySlides');
//     var dots= document.getElementsByClassName('dot');
//     if(n > slides.length){slideIndex= 1 }
//     if(n < 1){slideIndex=slides.length}
//     for( i=0;i<slides.length;i++){
//         slides[i].style.display="none";
//     }
//     for(i=0;i<dots.length;i++){
//         dots[i].className=dots[i].className.replace("active","");
//     }
//     slides[slideIndex-1].style.display="block";
//     dots[slideIndex-1].className +="active";

// }


    $(document).ready(function(){
      $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 5,    // Number of images to show at once
        slidesToScroll: 1,  // Number of images to scroll per transition
        autoplay: true,     // Enables auto play
        autoplaySpeed: 2000, // Speed of autoplay
        arrows: false,       // Shows navigation arrows
        dots: false         // Shows navigation dots
      });
    });
    