const nav_bar = document.getElementById('nav-bar');
function handleMenu() {
    nav_bar.classList.toggle('hidden')
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;
function setupInterSectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries) =>{
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler)
        }else{
            document.removeEventListener('scroll', scrollHandler)
        }
    }
    
     const intersection = new IntersectionObserver(intersectionCallback)
     intersection.observe(element)

     function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed
        let totaltranlate = 0;
        if(isLTR){
            totaltranlate =translateX + initialTranslateLTR;
        }else{
            totaltranlate =-(translateX + initialTranslateRTL);

        }
        element.style.transform = `translateX(${totaltranlate}px)`;
     }
}
const line_1 =  document.getElementById('line-1')
const line_2 =  document.getElementById('line-2')
const line_3 =  document.getElementById('line-3')
const line_4 =  document.getElementById('line-4')


setupInterSectionObserver(line_1,true,0.15);
setupInterSectionObserver(line_2,false,0.15);
setupInterSectionObserver(line_3,true,0.15);


setupInterSectionObserver(line_4,true,0.8);

const dtElements = document.querySelectorAll("dt")
dtElements.forEach(element=>{
    element.addEventListener('click',()=>{

        const ddid = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddid)
        const Arrow = element.querySelectorAll('i')[0]

        ddElement.classList.toggle('hidden')
        Arrow.classList.toggle('-rotate-180')
    })

})
