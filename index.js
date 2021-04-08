//Detecting Button Press


var numofdrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numofdrum; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", btn);
        function btn () {
        
        var buttoninnerhtml = this.innerHTML;
        
            makesound(buttoninnerhtml);
            Btnanimation(buttoninnerhtml);
          
        }
        
        }


//Detecting Keyboard Press 

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    Btnanimation(event.key);

});
function makesound(key) {
    
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
            
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
            
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
            
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default: consol.log(buttoninnerhtml);
        


    }
}
function Btnanimation(btnkey) {

    var activebtn = document.querySelector("." + btnkey);
    activebtn.classList.add("pressed");

    setTimeout(function () {
        activebtn.classList.remove("pressed");
    }, 100)

}



/*

//____Rough Work_____//

function add(num1, num2){
    return num1+num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function Calculator(num1, num2, Operator){
    return Operator(num1, num2);
}

Calculator(5, 5, add);    //ans is 10
Calculator(5, 5, multiply);    //ans is 25

*/ 



