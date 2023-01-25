

var audio1 = new Audio('sounds/crash.mp3');
var audio2 = new Audio('sounds/kick-bass.mp3');
var audio3 = new Audio('sounds/snare.mp3');
var audio4 = new Audio('sounds/tom-1.mp3');
var audio5 = new Audio('sounds/tom-2.mp3');
var audio6 = new Audio('sounds/tom-3.mp3');
var audio7 = new Audio('sounds/tom-4.mp3');


for (var i = 0; i < document.querySelectorAll("button.drum").length; i++){
    document.querySelectorAll("button.drum")[i].addEventListener("click", function(){
        var buttonPress = this.innerHTML;
        makeSound(buttonPress);
        addAnimation(buttonPress);
        
    })
}


document.addEventListener("keydown", function(){
    makeSound(event.key);
    addAnimation(event.key);
}
)

function makeSound(keyValue){
    switch(keyValue){
        case 'w': audio1.play(); break;
        case 'a': audio2.play(); break;
        case 's': audio3.play(); break;
        case 'd': audio4.play(); break;
        case 'j': audio5.play(); break;
        case 'k': audio6.play(); break;
        case 'l': audio7.play(); break;
        default: break;
    }
}

function addAnimation(currentKey){
    var curentElement = document.querySelector("." + currentKey);
    curentElement.classList.add("pressed");
    setTimeout(function() {
        curentElement.classList.remove("pressed")}, 200
    );
}
/*
function handleClick(){

    var nameDrum= this.getAttribute("class");
    
    
    if(nameDrum == "w drum"){
        audio1.play();
    }
    else if(nameDrum == "a drum"){
        audio2.play();
    }
    else if(nameDrum == "s drum"){
        audio3.play();
    }
    else if(nameDrum == "d drum"){
        audio4.play();
    }
    else if(nameDrum == "j drum"){
        audio5.play();
    }
    else if(nameDrum == "k drum"){
        audio6.play();
    }
    else if(nameDrum == "l drum"){
        audio7.play();
    } 
}
*/