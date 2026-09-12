let popupKeys=document.querySelectorAll("#Gallery .popupKeys"),
popupEle=document.querySelector(".popup"),
popupBoxEle=popupEle.querySelector(".box"),
popupExitKey=popupEle.querySelector(".close"),
popupImgEle=popupEle.querySelector("img"),
galleryImages=document.querySelectorAll("#Gallery img"),
currentImgIndex,
popupNextKey=popupEle.querySelector(".next"),
popupPrevKey=popupEle.querySelector(".prev"),
 popupIndicatorContainer=popupEle.querySelector(".indicators");

for (let i=0;i<galleryImages.length;i++){
    let newIndicator=document.createElement("li");
    newIndicator.textContent=i+1;
    if(i==0){
        newIndicator.classList.add("active");
    }
    popupIndicatorContainer.append(newIndicator);

};
let popupIndicators=popupEle.querySelectorAll(".indicators li");
popupKeys.forEach(function (popupKey){
    popupKey.addEventListener("click" , function(){
        let currentImgEle=popupKey.parentElement.previousElementSibling,
        galleryImagesArr=Array.from(galleryImages);
        currentImgSrc=currentImgEle.getAttribute("src");
        currentImgIndex=galleryImagesArr.indexOf(currentImgEle);
        updatePopupImg(currentImgSrc);
        updatedIndicators();
        openPopup();
    });
});
popupEle.addEventListener("click",closePopup)

popupBoxEle.addEventListener("click",function(e){
    e.stopPropagation();
});
popupExitKey.addEventListener("click",closePopup);

popupNextKey.addEventListener("click",function(){
 currentImgIndex=++currentImgIndex%galleryImages.length;
  let nextImgIndex=currentImgIndex,
  nextImgEle=galleryImages[nextImgIndex],
    nextImgSrc=nextImgEle.getAttribute("src");
    updatedIndicators();
    updatePopupImg(nextImgSrc);
});

popupPrevKey.addEventListener("click",function(){
    currentImgIndex=(--currentImgIndex+galleryImages.length)%galleryImages.length;
   let prevImgIndex=currentImgIndex,
    prevImgEle=galleryImages[prevImgIndex];
    prevImgSrc=prevImgEle.getAttribute("src");
    updatedIndicators();
    updatePopupImg(prevImgSrc);
});
popupIndicators.forEach(function(popupIndicator,CurrentIndicatorIndex){ //* the for each passes to you the index element in the cycle
popupIndicator.addEventListener("click",function(){
let newImgEle=galleryImages[CurrentIndicatorIndex],
newImgSrc=newImgEle.getAttribute("src");
currentImgIndex=CurrentIndicatorIndex;
updatePopupImg(newImgSrc);
updatedIndicators();
});
});
