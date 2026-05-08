let gamePattern = [];

userClickedPattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence (){

    userClickedPattern = [];

    level++;
    $("h1").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

};

    $(".btn").on("click", function(){
    userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    checkAnswer(userClickedPattern.length-1)

function playSound (name){
name = userChosenColor;

var sound = new Audio (`./${name}.mp3`);
sound.play()
};
playSound();

function animatePress(currentColour){
    currentColour = userChosenColor;
    $(`#${currentColour}`).addClass("pressed")

setTimeout(function(){$(`#${currentColour}`).removeClass("pressed")},100);
};

animatePress()
});

let level = 0;

let wasCalled = false;

$("body").on("keydown", function(){

if(wasCalled == false){
    nextSequence();
    wasCalled = true;
}
})


function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
    console.log("Success")
if(userClickedPattern.length === gamePattern.length){

setTimeout(function(){
    nextSequence()
},1000);
}
}

else{
    console.log("Wrong");
    
    var sound = new Audio("./wrong.mp3");
    sound.play();

    $("body").addClass("game-over")

    setTimeout(function(){
        $("body").removeClass("game-over")
    },100)

    $("h1").text("Game Over Press Any Key To Restart")

    startOver()
}
}

function startOver(){
    gamePattern = [];
    userClickedPattern = [];
    wasCalled = false;
    level = 0;
}
