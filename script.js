document.addEventListener('DOMContentLoaded', function () {

  var typed = {
    strings: ['Paint Protection Film', 'Graphene Coating', 'Ceramic Coating', 'Interior-Exterior Detailing'],
    typeSpeed: 50,
    loop: true
  };


  var tl = gsap.timeline();

  tl.from(".logo,.nav-links,.btns", {
    y: -150,
    duration: 0.5,
    delay: 0.4,
    stagger: 0.2
  })

  tl.from(".title h1,.subtitle p", {
    y: -200,
    duration: 0.5,
    stagger: 0.5
  })
  
  // Your original animation
  tl.to(".video-container video", {
    y: -400,
    duration: 0.5,
    stagger: 0.5
    });
    
    tl.from(".foo footer", {
      y: 200,
      duration: 0.5,
      delay : 1
    })


  var typed = new Typed('#autowrite', typed);
  var typed = new Typed('#autowritetwo', typed);
  var typed = new Typed('#autowritethree', typed);

  var ham = document.querySelector(".hamburger")
  var onclic = document.querySelector(".onclicked")
  var clos = document.querySelector(".cancle")

  ham.addEventListener("click", function (e) {
    if (onclic.style.display === "none" || onclic.style.display === "") {
      onclic.classList.add("show");
    } else {
      onclic.classList.remove("show");
      setTimeout(function () {
        onclic.style.display = "none";
      }, 500); // Match the duration of the animation
    }
  });

  clos.addEventListener("click", function (e) {
    if (onclic.style.display === "inline-block") {
      onclic.classList.remove("show")
    } else {
      onclic.classList.add("show");
      setTimeout(function () {
        onclic.style.display = "none";
      }, 50);
    }
  });

})