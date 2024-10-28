const root = {
  scrollToTopBtn: document.querySelector(".btn-up"),
  BtnTopProgressLine: document.querySelector(".btn-up__line"),
};

window.onscroll = checkBtn;
root.scrollToTopBtn.addEventListener("click", scrollUp);

function checkBtn() {
  if (isEnoughBottom()) {
    activeBtn();
    updateProgressBar();
    return;
  }
  hiddenBtn();
}

export function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function updateProgressBar() {
  const progress = getScrollProgress();
  root.BtnTopProgressLine.style.strokeDasharray = `${progress}, 100`;
}

function isEnoughBottom() {
  return (
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
  );
}

function activeBtn() {
  root.scrollToTopBtn.style.display = "flex";
}

function hiddenBtn() {
  root.scrollToTopBtn.style.display = "none";
}

function getScrollProgress() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollDistanceFromTop = scrollTop || document.body.scrollTop;
  const allDistance = scrollHeight - clientHeight;
  return (scrollDistanceFromTop / allDistance) * 100;
}
