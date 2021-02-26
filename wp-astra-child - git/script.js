


document.addEventListener("DOMContentLoaded", function () {
    initScrollToTop();
  
    if(document.querySelector(".typed")){
      initTypedJs1();
    }

    if(document.querySelector(".typed2")){
        initTypedJs2();
      }

      if(document.querySelector("#header")){
        imageHover();
      }

      if(document.querySelector(".section")){
        currentSlide();
      }

      if(document.querySelector(".dot")){
        showSlides(slideIndex);
      }
      
   
  });

//----------scroll to top--------------//


function initScrollToTop() {
  
    
window.onscroll = function(){
    scrollFunction();
};

}

function scrollFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block"
    } else {
        document.getElementById("scrollTop").style.display = "none"
    }
}

function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'

    });
}


//----------Typed header--------------//


function initTypedJs1() {
   
      new Typed(".type_header", {
        strings: ["MANGLER DU EN HYBRID WEBDESIGNER?"],
        typeSpeed: 120,
        loop: false,
      });

  };

  function initTypedJs2() {
   
    new Typed(".typed2", {
      strings: ["MANGLER DU EN HYBRID WEBDESIGNER?"],
      typeSpeed: 75,
      loop: true,
    });

};


    
//---------- skill_img hover event--------------//

function imageHover() {

  let skillHover = document.getElementById("header");
  
 skillHover.addEventListener("mouseover", function(){
      document.getElementById("coder_text").style.display = "block";
      document.getElementById("designer_text").style.display = "block";
  
  });
 
  }

  //---------- teal skridt - onboarding--------------//
  
  

  var slideIndex = 0;
        showSlides(slideIndex);

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("section");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
