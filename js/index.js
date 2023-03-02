// global
var myImages=Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer=document.querySelector("#lightBoxContainer");
var lightBox=document.querySelector("#lightBox");
var closeBtn=document.querySelector("#closeBtn");
var prevBtn=document.querySelector("#prevBtn");
var nextBtn=document.querySelector("#nextBtn");
// var to use it in next and prev Fun
var currentIndex=0;

// loop to all images to get current image
for(var i=0;i<myImages.length;i++){
    myImages[i].addEventListener("click",function(e){
        var currentImgSrc=e.target.getAttribute("src");
        currentIndex=myImages.indexOf(e.target)
        lightBoxContainer.classList.replace("d-none","d-flex");
        lightBox.style.backgroundImage=`url(${currentImgSrc})`;
    })
    closeBtn.addEventListener("click",closelightBoxr);
    nextBtn.addEventListener("click",nextlightBoxr);
    prevBtn.addEventListener("click",prevlightBoxr);
  }
// closelightBoxr
function closelightBoxr() {
    lightBoxContainer.classList.replace("d-flex","d-none");
}

// prevlightBoxr
function prevlightBoxr() {
    currentIndex--;
    if(currentIndex <0)currentIndex= myImages.length-1;
    lightBox.style.backgroundImage=`url(${myImages[currentIndex].getAttribute("src")})`;
}

// nextlightBoxr
function nextlightBoxr() {
    currentIndex++;
    if(currentIndex >=myImages.length)currentIndex=0;
    // console.log(myImages[currentIndex].getAttribute("src"));
    lightBox.style.backgroundImage=`url(${myImages[currentIndex].getAttribute("src")})`;   
}

// when use keyboard keyup Esc , ArrowLeft , ArrowRight
document.addEventListener("keyup",function(e){
    if(lightBoxContainer.classList.contains("d-flex"))
    switch (e.key) {
        case "ArrowLeft":
            prevlightBoxr()
            break;
        case "ArrowRight":
            nextlightBoxr()
            break;            
        case "Escape":
            closelightBoxr()
            break;
    }
})

// when click out of lightbox close lightBoxr
lightBox.addEventListener("click",function(e){
    e.stopPropagation();
})
lightBoxContainer.addEventListener("click",function(e){
    closelightBoxr();
})




// let isDragging = false,
//   startPos = 0,
//   currentTranslate = 0,
//   prevTranslate = 0,
//   animationID,
// myImages.forEach((img, index) => {
//   const lightBoxImage = lightBox.querySelector('img')
//   // disable default image drag
//   lightBoxImage.addEventListener('dragstart', (e) => e.preventDefault())
//   console.log(e);
//   // touch events
//   lightBox.addEventListener('touchstart', touchStart(index))
//   lightBox.addEventListener('touchend', touchEnd)
//   lightBox.addEventListener('touchmove', touchMove)
//   // mouse events
//   lightBox.addEventListener('mousedown', touchStart(index))
//   lightBox.addEventListener('mouseup', touchEnd)
//   lightBox.addEventListener('mousemove', touchMove)
//   lightBox.addEventListener('mouseleave', touchEnd)
// })
// make responsive to viewport changes
// window.addEventListener('resize', setPositionByIndex)
// // prevent menu popup on long press
// window.oncontextmenu = function (event) {
//   event.preventDefault()
//   event.stopPropagation()
//   return false
// }
// function getPositionX(event) {
//   return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
// }
// function touchStart(index) {
//   return function (event) {
//     currentIndex = index
//     startPos = getPositionX(event)
//     isDragging = true
//     animationID = requestAnimationFrame(animation)
//     lightBox.classList.add('grabbing')
//   }
// }
// function touchMove(event) {
//   if (isDragging) {
//     const currentPosition = getPositionX(event)
//     currentTranslate = prevTranslate + currentPosition - startPos
//   }
// }
// function touchEnd() {
//   cancelAnimationFrame(animationID)
//   isDragging = false
//   const movedBy = currentTranslate - prevTranslate
//   // if moved enough negative then snap to next lightBox if there is one
//   if (movedBy < -100 && currentIndex < my.length - 1) currentIndex += 1
//   // if moved enough positive then snap to previous lightBox if there is one
//   if (movedBy > 100 && currentIndex > 0) currentIndex -= 1
//   setPositionByIndex()
//   lightBox.classList.remove('grabbing')
// }
