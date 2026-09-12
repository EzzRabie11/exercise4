function openPopup() {
  popupEle.classList.add("active");
  setTimeout(function () {
    popupEle.classList.add("show");
  }, 10);
}
function closePopup() {
  popupEle.classList.remove("show");
  setTimeout(function () {
    popupEle.classList.remove("active");
  }, 1000);
}
function updatePopupImg(imgSrc){
popupImgEle.setAttribute("src",imgSrc);
}
function updatedIndicators(){
        let newIndicator=popupIndicators[currentImgIndex],
        oldIndicator=popupEle.querySelector(".indicators li.active");
        oldIndicator.classList.remove("active");
        newIndicator.classList.add("active");
}