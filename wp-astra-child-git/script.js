


document.addEventListener("DOMContentLoaded", function () {

  if(document.querySelector("#scrollTop")){
    initScrollToTop();
  }
  
    if(document.querySelector(".typed")){
      initTypedJs1();
    }

    if(document.querySelector(".typed2")){
        initTypedJs2();
      }

      if(document.querySelector("#header")){
        imageHover();
      } 
   
  });

//----------scroll to top--------------//


function initScrollToTop() {
  
    
window.onscroll = function(){
    scrollFunction();
};

}

//-----Hvis det er scrollet min 500 px skal scrollTop vises på siden--//
function scrollFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block"
    } else {
        document.getElementById("scrollTop").style.display = "none"
    }
}

//----ved klik på scollTop føres brugeren på i toppen af sitet (top:0)----//
function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'

    });
}


//----------Typed header--------------//


function initTypedJs1() {
   
  //---refererer til typed.js ved at skrive new Typed---//
      new Typed(".type_header", {
        strings: ["MANGLER DU EN HYBRID WEBDESIGNER?"], //---display denne tekst---//
        typeSpeed: 120,
        loop: false, //---ikke loop--//
      });

  };

  function initTypedJs2() {
   
    new Typed(".typed2", {
      strings: ["AMBITIØS", "POSITIV", "TEAMPLAYER"],
      typeSpeed: 120,
      loop: true,
    });

};


    
//---------- skill_img hover event--------------//

function imageHover() {

  let skillHover = document.getElementById("header"); //---refererer til billedet---//
  
//---når brugeren fører musen ind over billedet bliver coder_text + designer_text vist---//

 skillHover.addEventListener("mouseover", function(){
      document.getElementById("coder_text").style.display = "block";
      document.getElementById("designer_text").style.display = "block";
  
  });
 
  }