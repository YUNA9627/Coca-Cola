let topNav = document.querySelector('.top_nav');
let nav_flex = document.querySelector('.top_nav div');
let logo = document.querySelector('.top_nav #logo');
let gnb = document.querySelector('.top_nav nav ul li a');
let largeLogo = 'img/Header_Top_LOGO_white.svg';
let smallLogo = 'img/LOGO_red.svg';

window.addEventListener('scroll',()=>{
  if(window.scrollY > 500){
    if(!nav_flex.classList.contains('shrink')){
      nav_flex.classList.add('shrink');
      changeLogo(smallLogo);
    }
    if(!logo.classList.contains('shrink')){
      logo.classList.add('shrink');
    }
    if(!topNav.classList.contains('shrink')){
      topNav.classList.add('shrink');
    }
    if(!gnb.classList.contains('shrink')){
      gnb.classList.add('shrink');
    }
    }else{
      nav_flex.classList.remove('shrink');
      logo.classList.remove('shrink');
      topNav.classList.remove('shrink');
      gnb.classList.remove('shrink');
      changeLogo(largeLogo);
  }
});

function changeLogo(url){
  logo.classList.add('hide');
  setTimeout(()=>{
    logo.setAttribute('src', url);
    logo.classList.remove('hide');
  }, 0);
}

const bgItem = document.querySelector('.main_banner .bg_item');
const cocaCola = document.querySelector('.main_banner .bg_item .coca-cola');
const coca = document.querySelector('.main_banner .bg_item #text-coca');
const cola = document.querySelector('.main_banner .bg_item #text-cola');

window.addEventListener('scroll',()=>{
  bgItem.style.top = `${window.scrollY}px`;
  if(0 > bgItem.getBoundingClientRect().top){
    bgItem.classList.add('fadeInOut');
  }else {
    bgItem.classList.remove('fadeInOut');
  }
});

// BRAND 슬라이드
let slideWrapper = document.querySelector('.slide_wrapper');
let slidesContainer = slideWrapper.querySelector('ul');
let slides = slidesContainer.querySelectorAll('li');
let slideCount = slides.length;
let currentIdx = 0;
let prevBtn = slideWrapper.querySelector('#prev');
let nextBtn = slideWrapper.querySelector('#next');
let timer;

function setLayout(){
  let slideWidth = slideWrapper.offsetWidth;
  slidesContainer.style.transform = `translateX(-${slideWidth*slideCount}px)`;
}
setLayout();

window.addEventListener('resize',()=>{
  setLayout();
})

for(let i =0; i<slideCount; i++){
  let cloneSlide = slides[i].cloneNode(true);
  cloneSlide.classList.add('clone');
  slidesContainer.appendChild(cloneSlide);
}
for(let i = slideCount -1; i >= 0; i--){
  let cloneSlide = slides[i].cloneNode(true);
  cloneSlide.classList.add('clone');
  slidesContainer.prepend(cloneSlide);
}

let allslides = slidesContainer.querySelectorAll('li');

allslides.forEach((slide,idx)=>{
  slide.style.left = `${idx * 100}%`;
});

function goToslide(num){
  slidesContainer.style.left = `${-num * 100}%`;
  currentIdx = num;

  for(let sl of allslides){
    sl.classList.remove('active');
  };
  allslides[slideCount + num].classList.add('active');

  if(currentIdx === -3){
    for(let sl of allslides){
      sl.classList.remove('active');
    };
    allslides[slideCount].classList.add('active');
    
    setTimeout(()=>{
      slidesContainer.classList.remove('animated');
      slidesContainer.style.left = 0;
      currentIdx = 0;
    }, 400);
    setTimeout(()=>{
      slidesContainer.classList.add('animated');
    }, 500);
  }
  if(currentIdx == slideCount*2-1){
    for(let sl of allslides){
      sl.classList.remove('active');
    };
    allslides[slideCount*2-1].classList.add('active');

    setTimeout(()=>{
      slidesContainer.classList.remove('animated');
      slidesContainer.style.left = `${(slideCount-1)*-100}%`;
      currentIdx = slideCount-1;
    }, 400);
    setTimeout(()=>{
      slidesContainer.classList.add('animated');
    }, 500);
  }
};

nextBtn.addEventListener('click', ()=>{
  goToslide(currentIdx + 1);
});
prevBtn.addEventListener('click', ()=>{
  goToslide(currentIdx - 1);
});

prevBtn.addEventListener('click',(e)=>{
  e.preventDefault();
})
nextBtn.addEventListener('click',(e)=>{
  e.preventDefault();
})

goToslide(0);

function AutoSlide(){
  timer = setInterval(()=>{
    let nextIdx = (currentIdx + 1)% slideCount;
    goToslide(nextIdx);
  }, 5000);
}

AutoSlide();

slideWrapper.addEventListener('mouseenter',()=>{
  clearInterval(timer);
})
slideWrapper.addEventListener('mouseleave',()=>{
  AutoSlide();
})


// ------ top 버튼 ------
const goToTop = document.querySelector('.go_to_top');

window.addEventListener('scroll',()=>{
  let scrollAmt = window.scrollY;
  if(scrollAmt > 700){
    goToTop.classList.add('on');
  }else{
    goToTop.classList.remove('on');
  }
  
  let fOffsetTop = document.querySelector('footer').offsetTop;
  
  if(window.scrollY >= fOffsetTop - window.innerHeight){
    let bottom = window.scrollY - fOffsetTop + window.innerHeight + 20
    goToTop.style.bottom = bottom+'px';
  }else{
    goToTop.style.bottom = 20+'px';
  }
  
  console.log(window.scrollY);
});

goToTop.addEventListener('click',(e)=>{
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  });
  
})


  
