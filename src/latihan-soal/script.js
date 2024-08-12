localStorage.setItem("nilai", 0);
let nilai = localStorage.getItem("nilai");
nilai = parseInt(nilai);

localStorage.setItem("page", 1);
let page = localStorage.getItem("page");
page = parseInt(page);

// jawban page
const jawaban1 = document.querySelector(".jawaban-1");
const jawaban2 = document.querySelector(".jawaban-2");
const jawaban3 = document.querySelector(".jawaban-3");
const jawaban4 = document.querySelector(".jawaban-4");

const soal1 = document.querySelector(".soal-1");
const soal2 = document.querySelector(".soal-2");
const soal3 = document.querySelector(".soal-3");
const soal4 = document.querySelector(".soal-4");

// Jawaban 1

const aa = document.querySelector(".jawaban-1-a");
const ab = document.querySelector(".jawaban-1-b");
const ac = document.querySelector(".jawaban-1-c");
const ad = document.querySelector(".jawaban-1-d");

// Jawaban 2

const ba = document.querySelector(".jawaban-2-a");
const bb = document.querySelector(".jawaban-2-b");
const bc = document.querySelector(".jawaban-2-c");
const bd = document.querySelector(".jawaban-2-d");

// Jawaban 3

const ca = document.querySelector(".jawaban-3-a");
const cb = document.querySelector(".jawaban-3-b");
const cc = document.querySelector(".jawaban-3-c");
const cd = document.querySelector(".jawaban-3-d");

// Jawaban 4

const da = document.querySelector(".jawaban-4-a");
const db = document.querySelector(".jawaban-4-b");
const dc = document.querySelector(".jawaban-4-c");
const dd = document.querySelector(".jawaban-4-d");

let active = false;

// Proses 1

aa.addEventListener("click", () => {
  if (active === false) {
    active = true;
    aa.style.color = "red";
    ac.style.color = "green";
  } else {
    return;
  }
});

ab.addEventListener("click", () => {
  if (active === false) {
    active = true;
    ab.style.color = "red";
    ac.style.color = "green";
  } else {
    return;
  }
});
ac.addEventListener("click", () => {
  if (active === false) {
    active = true;
    ac.style.color = "green";
    nilai += 25;
    localStorage.setItem("nilai", nilai);
  } else {
    return;
  }
});
ad.addEventListener("click", () => {
  if (active === false) {
    active = true;
    ad.style.color = "red";
    ac.style.color = "green";
  } else {
    return;
  }
});

// Proses 2

ba.addEventListener("click", () => {
  if (active === false) {
    active = true;
    ba.style.color = "green";
    nilai += 25;
  } else {
    return;
  }
  localStorage.setItem("nilai", nilai);
});

bb.addEventListener("click", () => {
  if (active === false) {
    active = true;
    bb.style.color = "red";
    ba.style.color = "green";
  } else {
    return;
  }
});
bc.addEventListener("click", () => {
  if (active === false) {
    active = true;
    bc.style.color = "red";
    ba.style.color = "green";
  } else {
    return;
  }
});
bd.addEventListener("click", () => {
  if (active === false) {
    active = true;
    bd.style.color = "red";
    ba.style.color = "green";
  } else {
    return;
  }
});

// proses 3

ca.addEventListener("click", () => {
  if (active === false) {
    active = true;
    ca.style.color = "red";
    cc.style.color = "green";
  } else {
    return;
  }
});

cb.addEventListener("click", () => {
  if (active === false) {
    active = true;
    cb.style.color = "red";
    cc.style.color = "green";
  } else {
    return;
  }
});
cc.addEventListener("click", () => {
  if (active === false) {
    active = true;
    cc.style.color = "green";
    nilai += 25;
    localStorage.setItem("nilai", nilai);
  } else {
    return;
  }
});
cd.addEventListener("click", () => {
  if (active === false) {
    active = true;
    cd.style.color = "red";
    cc.style.color = "green";
  } else {
    return;
  }
});

// Prosses 4

da.addEventListener("click", () => {
  if (active === false) {
    active = true;
    da.style.color = "red";
    dd.style.color = "green";
  } else {
    return;
  }
});

db.addEventListener("click", () => {
  if (active === false) {
    active = true;
    db.style.color = "red";
    dd.style.color = "green";
  } else {
    return;
  }
});
dc.addEventListener("click", () => {
  if (active === false) {
    active = true;
    dc.style.color = "red";
    dd.style.color = "green";
  } else {
    return;
  }
});
dd.addEventListener("click", () => {
  if (active === false) {
    active = true;
    dd.style.color = "green";
    nilai += 25;
    localStorage.setItem("nilai", nilai);
  } else {
    return;
  }
});

let angles = document.querySelector(".angle");
let next = document.querySelector(".next");

const angle = () => {
  active = false;
  if (active === false) {
    page += 1;
    localStorage.setItem("page", page);
    if (page === 2) {
      soal1.style.display = "none";
      jawaban1.style.display = "none";
      soal2.style.display = "flex";
      jawaban2.style.display = "grid";
    } else if (page === 3) {
      soal2.style.display = "none";
      jawaban2.style.display = "none";
      soal3.style.display = "flex";
      jawaban3.style.display = "grid";
    } else if (page === 4) {
      soal3.style.display = "none";
      jawaban3.style.display = "none";
      soal4.style.display = "flex";
      jawaban4.style.display = "grid";
    } else if (page >= 6) {
      angles.classList.add("close");
      next.style.display = "block";
    }
  }
};

// hasil
