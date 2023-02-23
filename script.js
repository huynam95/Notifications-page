const notiNumEl = document.querySelector(".noti-header--left--num");
const markBtnEl = document.querySelector(".mark-btn");

const rowsEl = document.querySelectorAll(".noti-rows");

let notiNumb = notiNumEl.textContent;

const read = function (e) {
  e.preventDefault();

  // Number of Noti
  const clicked = e.target.closest(".row");

  if (clicked.classList.contains("unread")) {
    clicked.classList.remove("unread");
    notiNumb--;
    notiNumEl.textContent = notiNumb;
  }
};

const mark = function (e) {
  notiNumEl.textContent = 0;

  rowsEl.forEach((row) => {
    row.childNodes[1].classList.remove("unread");
  });
};

rowsEl.forEach((row) => row.addEventListener("click", read));

markBtnEl.addEventListener("click", mark);
