var imgs = document.querySelectorAll(".container img"); //
var fixedBox = document.getElementById("fixed-box");
var closeBtn = document.getElementById("close-btn");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var innerImg = document.getElementById("innerImg");
var container = document.querySelector(".container");

index = ''
container.addEventListener("click", function(e){
    for(let i=0; i<imgs.length; i++){
        if(e.target.src == imgs[i].src){
            index = i;
        }
    }

    if(e.target.src != null){
        fixedBox.classList.replace("d-none", "d-flex");
        innerImg.setAttribute("src", e.target.src);
    }
});


// ================================ Get next function ============================================

function getNext(){
    index++;
    if(index>5){
        index=0;
    }
    innerImg.src = imgs[index].src;
}


nextBtn.addEventListener("click", function(e){
    e.stopPropagation();
    getNext();
});

document.addEventListener("keyup", function(e){
    e.stopPropagation();
    if(e.key == "ArrowRight"){
        getNext();
    }
})

// ============================= Get previous function ================================================

function getPrevious(){
    index--;
    if(index<0){
        index=5;
    }
    innerImg.src = imgs[index].src;
}

prevBtn.addEventListener("click", function(e){
    e.stopPropagation();
    getPrevious();
});

document.addEventListener("keyup", function(e){
    e.stopPropagation();
    if(e.key == "ArrowLeft"){
        getPrevious();
    }
});

// ============================== Close function =============================================

function close(){
    fixedBox.classList.replace("d-flex", "d-none");
}

closeBtn.addEventListener("click", close);

fixedBox.addEventListener("click", function(e){
    if(e.target.src != null){
        e.stopPropagation();
    } else {
        close();
    }    
});

document.addEventListener("keyup", function(e){
    if(e.key == "Escape"){
        close();
    }
})










