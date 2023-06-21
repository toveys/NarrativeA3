

//onload function
window.onload = function() {
    let path = document.getElementById("path");
    let face = document.getElementById("face");
    let banner = document.getElementById("banner");

    path.style.top = banner.height + "px";
    //face.style.top = path.height+"px";
};

//onload function
window.onresize = function() {
    let path = document.getElementById("path");
    let face = document.getElementById("face");
    let banner = document.getElementById("banner");

    path.style.top = banner.height+"px";
    //face.style.top = path.height+"px";
};

middle = document.getElementById("middle");
middle.addEventListener('scroll', Scroll);

function Scroll(){ 
    face = document.getElementById("face");

    if (isInViewport(face, path) !== false){
        let black = document.getElementById("black");
        rect = face.getBoundingClientRect();

        b = (rect.y)/100;
        black.style.backgroundColor = 'rgba(0,0,0,'+b+')';
    }
    
}

function isInViewport(element, element2) {
    const rect = element.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    if(rect.top + rect2.top <= 0){
        return(
            rect.top + rect2.top
        );
    }
    else{
        return(false);
    }
}