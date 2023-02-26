var myImages=Array.from(document.querySelectorAll(".item img"));

var lightBoxContainer=document.querySelector("#lightBoxContainer");
var lightBox=document.querySelector("#lightBox");

var closeBtn=document.querySelector("#closeBtn");
var prevBtn=document.querySelector("#prevBtn");
var nextBtn=document.querySelector("#nextBtn");
var currentIndex=0;
// console.log(myImages);
for(var i=0;i<myImages.length;i++){
    myImages[i].addEventListener("click",function(e){
        // console.log("hiii");
        var currentImgSrc=e.target.getAttribute("src");
        currentIndex=myImages.indexOf(e.target)
        // console.log(currentImgSrc);
        // console.log(currentIndex);
        lightBoxContainer.classList.replace("d-none","d-flex");
        lightBox.style.backgroundImage=`url(${currentImgSrc})`;
    })
    closeBtn.addEventListener("click",closeSlider);
    nextBtn.addEventListener("click",nextSlider);
    prevBtn.addEventListener("click",prevSlider);
}

function closeSlider() {
    lightBoxContainer.classList.replace("d-flex","d-none");
}
function prevSlider() {
    currentIndex--;
    if(currentIndex <0)currentIndex= myImages.length-1;
    lightBox.style.backgroundImage=`url(${myImages[currentIndex].getAttribute("src")})`;
}
function nextSlider() {
    currentIndex++;
    if(currentIndex >=myImages.length)currentIndex=0;
    // console.log(myImages[currentIndex].getAttribute("src"));
    lightBox.style.backgroundImage=`url(${myImages[currentIndex].getAttribute("src")})`;   
}

document.addEventListener("keyup",function(e){
    if(lightBoxContainer.classList.contains("d-flex"))
    
    switch (e.key) {
        case "ArrowLeft":
            prevSlider()
            break;
        case "ArrowRight":
            nextSlider()
            break;            
        case "Escape":
            closeSlider()
            break;
    }
})


lightBox.addEventListener("click",function(e){
    e.stopPropagation();
})
lightBoxContainer.addEventListener("click",function(e){
    closeSlider();
})


