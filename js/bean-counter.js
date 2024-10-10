document.addEventListener('DOMContentLoaded', function () {
    const countDisplay = document.getElementById('count');
    const flierfixe = document.getElementById('flierfixe'); 

    let beanCount = localStorage.getItem('beanCount') ? parseInt(localStorage.getItem('beanCount')) : 0;
    countDisplay.textContent = beanCount;

    flierfixe.addEventListener('click', function (e) {
        e.stopPropagation();
        beanCount += 3; 
        countDisplay.textContent = beanCount;
        localStorage.setItem('beanCount', beanCount); 
    });
    
    const flyingBean = document.querySelector('.flier > img');
    function animateBean() {
        flyingBean.style.animation = 'fly 15s linear infinite';
    }
    animateBean();
});
