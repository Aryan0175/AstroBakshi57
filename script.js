const topbtn = document.querySelector('.top-bttn')
topbtn.style.display = 'none'
window.addEventListener('scroll', () => {
    if(window.scrollY < 200){
        topbtn.style.display = 'none';
    }
    else{
        topbtn.style.display = 'flex';
    }
})