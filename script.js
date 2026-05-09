/* =========================
      SECTION ANIMATION
========================= */

var sections =
document.querySelectorAll(".section");

var observer =
new IntersectionObserver(function(entries){

  entries.forEach(function(entry){

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

},{
  threshold:0.15
});

sections.forEach(function(section){

  observer.observe(section);

});


/* =========================
      CARD HOVER EFFECT
========================= */

var cards =
document.querySelectorAll(".card");

cards.forEach(function(card){

  card.addEventListener(
    "mouseenter",
    function(){

      card.style.transform =
      "translateY(-8px)";

    }
  );

  card.addEventListener(
    "mouseleave",
    function(){

      card.style.transform =
      "translateY(0px)";

    }
  );

});


/* =========================
      TYPING EFFECT
========================= */

var role =
document.querySelector(".role");

if(role){

  var text =
  "Computer Science Undergraduate";

  var index = 0;

  role.innerHTML = "";

  function typeEffect(){

    if(index < text.length){

      role.innerHTML +=
      text.charAt(index);

      index++;

      setTimeout(typeEffect,70);

    }

  }

  typeEffect();

}