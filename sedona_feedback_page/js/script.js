(function() {

  var plus = document.querySelector(".plus");
  var minus = document.querySelector(".minus");
  var elements = document.querySelector(".counter-input");
  var currentvalue;

  plus.addEventListener("click", function () {
    event.preventDefault();

    currentvalue = (parseInt(elements.value) + 1);
    elements.value = currentvalue;

  });

  minus.addEventListener("click", function () {
    event.preventDefault();

  if (elements.value >= 1) {
    currentvalue = (parseInt(elements.value) - 1);
    elements.value = currentvalue;
  }

  false

  });

})();







/*

(function() {

  var pluses = document.querySelectorAll(".plus");
  var minuses = document.querySelectorAll(".minus");
  var elements = document.querySelector(".counter-input");
  var currentvalue;


  for (var i = 0; i < elements.length; i++) {

  var plus = pluses[i];
  var minus = minuses[i];


  plus.addEventListener("click", function () {
    event.preventDefault();

    currentvalue = (parseInt(element.value) + 1);
    plus.parentNode.children(input).value = currentvalue;

  });

  minus.addEventListener("click", function () {
    event.preventDefault();

  if (elements.value >= 1) {
    currentvalue = (parseInt(element.value) - 1);
    element.parentNode.children(input)value = currentvalue;
  }

  false

  });
};

})();*/