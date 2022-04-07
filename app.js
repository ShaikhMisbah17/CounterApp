// jshint esversion:6
const count=document.getElementById('count');
const dec = document.getElementById('sub');
const reset = document.getElementById('reset');
const add = document.getElementById('add');

dec.addEventListener("click", () => {
  count.innerHTML--;
});

reset.addEventListener("click", () => {
  count.innerHTML = 0;
});

add.addEventListener("click", () => {
  count.innerHTML++;
});
