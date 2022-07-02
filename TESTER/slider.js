
var Sliders = document.querySelector('.sliders')
let slides = document.querySelectorAll('.slide')
var widthSlide = slides[0].offsetWidth;
const firstSlide = slides[0].cloneNode(true)
const secondSlide = slides[1].cloneNode(true)
const thirdSlide = slides[2].cloneNode(true)
const lastSlide = slides[slides.length-1].cloneNode(true)
firstSlide.id = 'firstSlide'
lastSlide.id = 'lastSlide'
const nxt = document.querySelector('.btnnxt')
const pre = document.querySelector('.btnpre')
var index = 1;
Sliders.append(firstSlide)
Sliders.append(secondSlide)
Sliders.append(thirdSlide)
Sliders.prepend(lastSlide)
Sliders.style.transform = `translateX(${ -412 - 12 }px)`;
let co = 0 ;
const timmer = setInterval(()=>{
    co=0;
},500)

console.log(slides)
nxt.addEventListener('click', () => {
    co++;
    if (co == 1){
       console.log(co)
        slides = document.querySelectorAll('.slide')
        if(index > slides.length-4){    
            //return;
        }
        else{
            index++;
             moving = -widthSlide * index - 12 * index;
            Sliders.style.transform = `translateX(${moving}px)`;
            Sliders.style.transition = '0.5s'
        }
            
    }

    switch(index){
        case 1 :
            slides[index].style.backgroundColor = "#FBE2D4";
            break;
            default:
                break;
    }  
})



pre.addEventListener('click', () => {
    co++;
    slides = document.querySelectorAll('.slide')
    if (co == 1){
        console.log(co)
        console.log(index)
        if(index <= 0){
            return;
        }else{
            index--;
            var moving = -widthSlide * index - 12 * index;
             Sliders.style.transform = `translateX(${moving}px)`;
            Sliders.style.transition = '0.5s'
        }
        
            
    }
    
})


Sliders.addEventListener("transitionend",() =>{
 slides = document.querySelectorAll('.slide')
 console.log(slides,"id"+ index)
    if(index > 0 ){
        if(slides[index].id === firstSlide.id){
            index= 1;
         moving = -widthSlide * index - 12 * index;
        Sliders.style.transform = `translateX(${moving}px)`;
            Sliders.style.transition = 'none';
        }
    }
    console.log(index)
    if(index <= 0 || slides[index].id == lastSlide.id  ){
        index= slides.length - 4 ;
         moving = -widthSlide * index - 12 * index;
        Sliders.style.transform = `translateX(${moving}px)`;
        Sliders.style.transition = 'none';
    }

})


