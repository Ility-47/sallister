let animItems = document.querySelectorAll(`._anim-items`);

if(animItems.length > 0){
    window.addEventListener(`scroll`, animOnScroll);
    function animOnScroll() {
        for(let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint =  window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add(`_active`);
            } else {
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove(`_active`);
                }
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
}

//хз как назвать
let snow1 = document.getElementsByClassName('snow1').length;
let snow2 = document.getElementsByClassName('snow2').length;
let snow3 = document.getElementsByClassName('snow3').length;

function randomInteger(min, max) {
    
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

function spawn(){
    //first ball
    for (i = snow1; i < 300; i++) {
        const snowball1 = document.createElement('div');
        snowball1.classList.add('snow1');
        snowball1.style.left = randomInteger(5, window.innerWidth - 50) + 'px';
        snowball1.style.top = randomInteger(50, scrollHeight) + 'px';

        const snowball__animation1 = document.querySelector('.snow-anim');
        snowball__animation1.appendChild(snowball1);
    };
    //double ball
    for (i = snow2; i < 400; i++) {
        const snowball2 = document.createElement('div');
        snowball2.classList.add('snow2');
        snowball2.style.left = randomInteger(5, window.innerWidth - 50) + 'px';
        snowball2.style.top = randomInteger(50, scrollHeight) + 'px';

        const snowball__animation2 = document.querySelector('.snow-anim');
        snowball__animation2.appendChild(snowball2);
    };
    //thirst ball
    for (i = snow3; i < 450; i++) {
        const snowball3 = document.createElement('div');
        snowball3.classList.add('snow3');
        snowball3.style.left = randomInteger(5, window.innerWidth - 50) + 'px';
        snowball3.style.top = randomInteger(50, scrollHeight) + 'px';

        const snowball__animation3 = document.querySelector('.snow-anim');
        snowball__animation3.appendChild(snowball3);
    };
};
spawn();
alert("апчихба") ;
