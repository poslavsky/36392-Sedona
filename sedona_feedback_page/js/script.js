(function() {

  var plus = document.querySelectorAll(".plus");
  var minus = document.querySelectorAll(".minus");

  for(var i = 0; i < plus.length; i++) {

    plus[i].addEventListener("click", function (event) {
      event.preventDefault();

      var count = this.parentNode.querySelector(".counter-input");

      count.value =  (parseInt(count.value) + 1);

    })
  };

  for(var i = 0; i < minus.length; i++) {

    minus[i].addEventListener("click", function (event) {
      event.preventDefault();

      var count = this.parentNode.querySelector(".counter-input");
      var val = (parseInt(count.value) - 1);

      if (val < 0) val = 0;

      count.value =  val;

    })
  };

})();