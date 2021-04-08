const hum = document.querySelector('.hamburger img');
const yes = document.querySelector('ul.nav-links');
const times = document.querySelector('.times')
hum.addEventListener('click',()=>{
    
yes.setAttribute('style','display:flex');
})

times.addEventListener('click',()=>{
    yes.style.display="none";
})


// const hum = document.querySelector('.hamburger img');
// const yes = document.querySelector('ul.nav-links');
// const times = document.querySelector('.times');


// hum.addEventListener('click',open);
// times.addEventListener('click',close);

// function open(){
//     yes.style.display ='flex'
//     yes.style.top='0'
// }

// function close(){
//     yes.style.top = '-100px;'
// }


