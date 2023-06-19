var ans=[];
var input=[];
var game="flase"
var colors=['green', 'red', 'yellow', 'blue']
var level=0;
var wrong=new Audio("./sounds/wrong.mp3");
var green=new Audio("./sounds/green.mp3");
var blue=new Audio("./sounds/blue.mp3");
var red=new Audio("./sounds/red.mp3");
var yellow=new Audio("./sounds/yellow.mp3");
$(document).on("keydown", function(){
    $("h1").text("Press any key to start");
    ans=[];
    input=[];
    part1();
});

function refresh(){
    $("h1").text("Press any key to start");
    ans=[];
    input=[];
    part1();
}

function part1(){
    var x=colors[Math.floor(Math.random()*4)];
    ans.push(x);
    console.log("question: "+ans);

    setTimeout(function(){
        $("#"+x).addClass("pressed");
        setTimeout(function(){
            $("#"+x).removeClass("pressed");
        }, 100);
    }, 1000);
    
}



$(".box").on("click", function(){

    waiter($(this));
    playAudio($(this).attr("id"));

    var n=ans.length;
    // console.log(n);
    input.push($(this).attr("id"));
    for(let i=0; i<input.length; i++){
        if(input[i]===ans[i]){
            if(i==n-1){
                level+=1;
                console.log("input: "+input);
                // $("h1").text("Level "+level);
                // input=[];
                waiter2();
            }
        }else{
            $("h1").text("Level failed");
            wrong.play();

            break;
        }
    }

});

function playAudio(key){

    switch (key) {
        case "green":
            green.play();
            break;
        case "red":
            red.play();
            break;
        case "yellow":
            yellow.play();
            break;
        case "blue":
            blue.play();
            break;
        case "wrong":
            wrong.play();
            break;
    
        default:
            break;
    }

}

function waiter(key){
    $(key).addClass("pressed");
    setTimeout(function(){
        $(key).removeClass("pressed");
    }, 100);

}

function waiter2(){
    setTimeout(function(){
        $("h1").text("Level "+level);
        input=[];
    }, 1000);
    // setTimeout(function(){
    //     part1();
    // }, 1000);
    part1();
    
}



