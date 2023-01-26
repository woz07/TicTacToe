var p1turn = true;
var p2turn = false;

const b11 = document.getElementById("1-1");
b11.addEventListener("click", function (event) {
  if (p1turn) {
    b11.style.backgroundColor = "blue";
    p1turn = false;
    p2turn = true;
  } else {
    b11.style.backgroundColor = "red";
    p2turn = false;
    p1turn = true;
  }
});
const b12 = document.getElementById("1-2");
b12.addEventListener("click", function (event) {
  if (p1turn) {
    b12.style.backgroundColor = "blue";
    p1turn = false;
    p2turn = true;
  } else {
    b12.style.backgroundColor = "red";
    p2turn = false;
    p1turn = true;
  }
});
const b13 = document.getElementById("1-3");
b13.addEventListener("click", function (event) {
  if (p1turn) {
    b13.style.backgroundColor = "blue";
    p1turn = false;
    p2turn = true;
  } else {
    b13.style.backgroundColor = "red";
    p2turn = false;
    p1turn = true;
  }
});

const b21 = document.getElementById("2-1");
b21.addEventListener("click", function (event) {
  if (p1turn) {
    b21.style.backgroundColor = "blue";
    p1turn = false;
    p2turn = true;
  } else {
    b21.style.backgroundColor = "red";
    p2turn = false;
    p1turn = true;
  }
});
const b22 = document.getElementById("2-2");
b22.addEventListener("click", function (event) {
  if (p1turn) {
    b22.style.backgroundColor = "blue";
    p1turn = false;
    p2turn = true;
  } else {
    b22.style.backgroundColor = "red";
    p2turn = false;
    p1turn = true;
  }
});
const b23 = document.getElementById("2-3");
b23.addEventListener("click", function (event) {
  if (p1turn) {
    b23.style.backgroundColor = "blue";
    p1turn = false;
    p2turn = true;
  } else {
    b23.style.backgroundColor = "red";
    p2turn = false;
    p1turn = true;
  }
});

const b31 = document.getElementById("3-1");
b31.addEventListener("click", function (event) {
  if (p1turn) {
    b31.style.backgroundColor = "blue";
    p1turn = false;
    p2turn = true;
  } else {
    b31.style.backgroundColor = "red";
    p2turn = false;
    p1turn = true;
  }
});
const b32 = document.getElementById("3-2");
b32.addEventListener("click", function (event) {
  if (p1turn) {
    b32.style.backgroundColor = "blue";
    p1turn = false;
    p2turn = true;
  } else {
    b32.style.backgroundColor = "red";
    p2turn = false;
    p1turn = true;
  }
});
const b33 = document.getElementById("3-3");
b33.addEventListener("click", function (event) {
  if (p1turn) {
    b33.style.backgroundColor = "blue";
    p1turn = false;
    p2turn = true;
  } else {
    b33.style.backgroundColor = "red";
    p2turn = false;
    p1turn = true;
  }
});
