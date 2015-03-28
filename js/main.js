(function() {

  var open = document.querySelector(".btn--open");
  var close = document.querySelector(".btn--cancel");
  var nav = document.querySelector(".nav");

  open.addEventListener("click", function (event) {
      event.preventDefault();

      nav.classList.add("active-nav");

  });

  close.addEventListener("click", function (event) {
      event.preventDefault();

      nav.classList.remove("active-nav");

  });

  

  var plus = document.querySelectorAll(".hotel-form__icon--plus");
  var minus = document.querySelectorAll(".hotel-form__icon--minus");

  for(var i = 0; i < plus.length; i++) {

    plus[i].addEventListener("click", function (event) {
      event.preventDefault();

      var count = this.parentNode.querySelector(".hotel-form__input--sum");

      count.value =  (parseInt(count.value) + 1);

    })
  };

  for(var i = 0; i < minus.length; i++) {

    minus[i].addEventListener("click", function (event) {
      event.preventDefault();

      var count = this.parentNode.querySelector(".hotel-form__input--sum");
      var val = (parseInt(count.value) - 1);

      if (val < 0) val = 0;

      count.value =  val;

    })
  };


})();