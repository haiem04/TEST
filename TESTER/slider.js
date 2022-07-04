//max width 2480px
var Sliders = document.querySelector('.sliders')
let slides = document.querySelectorAll('.slide')
let boxImg = document.querySelectorAll('.box_img')
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
slides[1].style.backgroundColor = "#FBE2D4"
let co = 0 ;
const timmer = setInterval(()=>{
    co=0;
},500)
var colorB = 2;
console.log(slides)
nxt.addEventListener('click', () => {
    
    co++;
    boxImg = document.querySelectorAll('.box_img')
    slides = document.querySelectorAll('.slide')
    if (co == 1){
       console.log(co)
        if(index > slides.length-4){    
            //return;
        }
        else{
            index++;
             moving = -widthSlide * index - 12 * index;
            Sliders.style.transform = `translateX(${moving}px)`;
            Sliders.style.transition = '0.5s'
        }
            
        
        
        for(var i = 0 ;i < slides.length; i++){
            if(boxImg[i].className == "box_img active"){
                console.log(boxImg[i].className,i,index)
                boxImg[i].classList.remove('active');
                slides[i].style.backgroundColor = "#ECECEC"
            }
        }
        boxImg[index +1 ].classList.add('active')

        switch(index){
            case 1:
                slides[index+1].style.backgroundColor = "#FBE2D4"
                break;
            case 2:
                slides[index+1].style.backgroundColor = "#FBBEC9"
                break;
            case 3:
                slides[index+1].style.backgroundColor = "#BDE7D9"
                    break;
            case 4:
                slides[index+1].style.backgroundColor = "#C6DEFD"
                    break;   
            case 5:
                slides[index+1].style.backgroundColor = "#FDF5D0"
                    break;    
            case 6:
                slides[index+1].style.backgroundColor = "#CBC7ED"
                    break;     
            case 7:
                slides[index+1].style.backgroundColor = "#FBE2D4"
                    break;               
                default:
                    break;
        }

    }

})



pre.addEventListener('click', () => {
    co++;
    if (co == 1){
        slides = document.querySelectorAll('.slide')
         boxImg = document.querySelectorAll('.box_img')
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
        
        for(var i = 0 ;i < slides.length; i++){
            if(boxImg[i].className == "box_img active"){
                console.log(boxImg[i].className,i,index)
                boxImg[i].classList.remove('active');
                slides[i].style.backgroundColor = "#ECECEC"
            }
        }
        boxImg[index +1 ].classList.add('active')
 switch(index){
    case 0:
        slides[index+1].style.backgroundColor = "#CBC7ED"
        break;
            case 1:
                slides[index+1].style.backgroundColor = "#FBE2D4"
                break;
            case 2:
                slides[index+1].style.backgroundColor = "#FBBEC9"
                break;
            case 3:
                slides[index+1].style.backgroundColor = "#BDE7D9"
                    break;
            case 4:
                slides[index+1].style.backgroundColor = "#C6DEFD"
                    break;   
            case 5:
                slides[index+1].style.backgroundColor = "#FDF5D0"
                    break;    
            case 6:
                slides[index+1].style.backgroundColor = "#CBC7ED"
                    break;     
            case 7:
                slides[index+1].style.backgroundColor = "#FBE2D4"
                    break;               
                default:
                break;
        }
            
    }
    
})


Sliders.addEventListener("transitionend",() =>{
 slides = document.querySelectorAll('.slide')
 console.log(slides,"id"+ index)
 boxImg = document.querySelectorAll('.box_img')
    if(index > 0 ){
        if(slides[index].id === firstSlide.id){
            index= 1;
         moving = -widthSlide * index - 12 * index;
        Sliders.style.transform = `translateX(${moving}px)`;
            Sliders.style.transition = 'none';
        boxImg[index+1 ].classList.add('active')
        slides[index+1].style.backgroundColor = "#FBE2D4"
            
        }
        
    }
    console.log(index)
    if(index <= 0 || slides[index].id == lastSlide.id  ){
        index= slides.length - 4 ;
         moving = -widthSlide * index - 12 * index;
        Sliders.style.transform = `translateX(${moving}px)`;
        Sliders.style.transition = 'none';
    boxImg[index + 1].classList.add('active')
    slides[index+1].style.backgroundColor = "#CBC7ED"
    }

})


