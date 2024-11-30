// var myImages=document.querySelectorAll(".item")
// var mainimg=document.querySelector(".main")
// for(var i=0;i<myImages.length;i++){
//     myImages[i].addEventListener("click",function(e){
//         var imgpath=e.target.getAttribute('src');
//         mainimg.setAttribute('src', imgpath)
//         var activimg=document.querySelector(".active")
//         activimg.classList.remove("active")
//         e.target.classList.add("active")
//     })
// }

var myImages=Array.from(document.querySelectorAll(".item"))
var lightboxContainer=document.querySelector(".lightbox-container")
var lightboxItem=document.querySelector(".lightbox-item")
var prevBtn=document.querySelector("#prev")
var nextBtn=document.querySelector("#next")
var closeBtn=document.querySelector("#close")
var currentIndex;

for(var i=0; i<myImages.length ; i++){
    myImages[i].addEventListener("click" , function(e){
        console.log(e.target);
        lightboxContainer.classList.replace('d-none' , 'd-flex')
        var imgSrc=e.target.getAttribute('src');
        lightboxItem.style.backgroundImage=`url(${imgSrc})`
        currentIndex= myImages.indexOf(e.target); //--> للبحث عن العنصر في المصفوفة
        
    })
}

function nextSlide() {
    currentIndex++
    if(currentIndex == myImages.length ) {
        currentIndex=0
    }
    var imgSrc=myImages[currentIndex].getAttribute('src');
    lightboxItem.style.backgroundImage=`url(${imgSrc})`
}

nextBtn.addEventListener("click" , function(){
    nextSlide()
})

function prevSlide() {
    currentIndex--;
    if (currentIndex<0) {
        currentIndex = myImages.length-1
    }
    var imgSrc=myImages[currentIndex].getAttribute('src');
    lightboxItem.style.backgroundImage=`url(${imgSrc})`
}

prevBtn.addEventListener("click" , function(){
    prevSlide()
})

function closeSlide(){
    lightboxContainer.classList.replace("d-flex" , "d-none")
}

closeBtn.addEventListener("click" , function(){
    closeSlide()
})
lightboxContainer.addEventListener("click" , function(){
    closeSlide()
})
lightboxItem.addEventListener("click" , function(e){
    e.stopPropagation()
})