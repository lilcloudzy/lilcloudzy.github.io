const txt = document.querySelector(".txt");
let item = 0;

let fun = setInterval(function () {
  item += 1;
  if (item === 10) {
    document.getElementById("au").play();
    item -= 9;
  }
  txt.innerHTML = item;
}, 1000);
