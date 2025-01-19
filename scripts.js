
function welcomeMessage() {
    alert('Welcome to the BMW website!');
}


function changeSectionColor(sectionId, color) {
    document.getElementById(sectionId).style.backgroundColor = color;
}


window.onload = function () {
   
    welcomeMessage();

    
    changeSectionColor('models', '#add8e6');
};

.model {
    transition: transform 0.3s ease-in-out;
}


.model:hover {
    transform: scale(1.05);
}

#contact-info {
    font-size: 16px; 
    margin-top: 10px; 
    color: #888; 
}