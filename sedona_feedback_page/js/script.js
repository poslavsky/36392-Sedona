(function() {

  var plus = document.querySelector(".plus");
  var minus = document.querySelector(".minus");
  var counter = document.querySelector(".counter-input").value;


  plus.addEventListener("click", function () {
    event.preventDefault();

    var i = 0;
    var counter = i;

    return function () {
      i++;
      return i;
    };



  });

/*var xhr = new XMLHttpRequest();
xhr.open("get", "hello.txt");
xhr.addEventListener("readystatechange", function() {
if (xhr.readyState == 4) {
console.log(xhr.responseText);
}
});

xhr.send();*/

})();