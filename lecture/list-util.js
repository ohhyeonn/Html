




function slideIn(selector){
    
    var header = document.querySelector("#header");

    var menuButton = header.querySelector(".icon-menu");

    var aside = document.querySelector("#aside");


    menuButton.addEventListener("click", function(e){





        e.preventDefault();
        var screen = document.createElement("div");
        screen.style.width = "100%";
        screen.style.height = "100%";
        screen.style.backgroundColor = "black";
        screen.style.position = "fixed";
        screen.style.top = "0px";
        screen.style.opacity = "0";
        screen.style.transition = "0.1s";

        setTimeout(function(){


            screen.style.opacity = "0.7";


        },1);
        document.body.append(screen);


    

        screen.ontransitionend = function(){
        
            aside.style.position = "fixed";
            aside.style.height = "100%";
            aside.style.top = "0px";
            aside.style.right = "-500px";
            aside.style.transition =  "0.5s";
            aside.backgroundolor = "white";


    


            setTimeout(function(){

                aside.style.right = "0px";
                aside.style.zIndex = "10";


            },0);
        };

        
        
        screen.addEventListener("click", function(){

            aside.style.right = "-500px";
            screen.style.opacity = "0";

            screen.remove();


        });















    });



}