
const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('#button')


const removeAllAndAddBackground = () => {
    const wrapper = document.querySelector('.wrapper');
    
    
    wrapper.innerHTML = '';

    wrapper.style.background = 'url(signedup.gif) center/cover no-repeat'; 
};


document.addEventListener('DOMContentLoaded', () => {

    const removeAndAddButton = document.getElementById('removeAndAddBackground');

    
    if (removeAndAddButton) {
       
        removeAndAddButton.addEventListener('click', () => {
            console.log('Button clicked!');
            removeAllAndAddBackground();
        });
    } else {
        console.error('Button not found!');
    }
});


