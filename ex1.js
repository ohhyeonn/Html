window.addEventListener("load", function(){

    var section = window.document.querySelector('#ex10');
    var requestButton = section.querySelector(".btn-request");

    requestButton.onclick = function(e){
        var request = new window.XMLHttpRequest();
        request.open("GET", "http://localhost:8080/api/notice/list", false)
        request.send(null);
        console.log("d");
        console.log(request.responseText);
    };





});





























window.addEventListener("load", function(){

    var section = window.document.querySelector('#ex9');

    var selButton = section.querySelector(".btn-sel");
    var uploadBox = section.querySelector(".upload-box");
    var fileButton = section.querySelector(".btn-file");

    uploadBox.onclick = function(e){
        
        if(e.target.classList.contains("btn-sel")){
            var event = new MouseEvent("click", {

                'view' : window,
                'bubbles' : true,
                'cancelable': true

            });


            fileButton.dispatchEvent(event);
        }


        return;

    };


    fileButton.oninput = function(e) {

    };



    uploadBox.ondragover = function(e){
        e.preventDefault();

        var valid = e.dataTransfer.types.indexOf("Files");
        console.log(valid);
        if(valid < 0){
            uploadBox.style.backgroundColor = "red";
        }else{
            uploadBox.style.backgroundColor = "green";
        }

    };


    uploadBox.ondragleave = function(e){
        
        uploadBox.style.backgroundColor = "white";
    };

    uploadBox.ondrop = function(e){
        e.preventDefault();
        uploadBox.style.backgroundColor = "white";
        console.log(e.dataTransfer.files[0].size);



    };


});


















window.addEventListener('load', function(){

    var section = window.document.querySelector('#ex8');

    var product = section.querySelector(".product");

    product.onclick = function(e){
        
        if(e.target.classList.contains("up")){
    
    
          var temp =  parseInt(e.target.previousElementSibling.value);
          e.target.parentNode.querySelector(".text").value = ++temp;

        }else if (e.target.classList.contains("down")){
            var temp =  parseInt(e.target.previousElementSibling.previousElementSibling.value);
          e.target.parentNode.querySelector(".text").value = --temp;

        }else if (e.target.classList.contains("current")){
          e.target.parentNode.classList.toggle("selected");
        }


        return;

    };



});















window.addEventListener('load', function(){

    var section = window.document.querySelector('#ex7');

    var accordion = section.querySelector(".accordion");

    accordion.onclick = function(e){
        
        if(e.target.classList.contains("title")){

            e.target.nextElementSibling.classList.toggle("d-none");

        }


        return;

    };



});




window.addEventListener('load', function(){

    var section = window.document.querySelector('#ex6');

    var container = section.querySelector('.container');
    var button = section.querySelectorAll('.btn');
    

    var selected = null;

    container.onclick = function(e){
        if(!e.target.classList.contains("box"))
         return;
        if(selected != null && selected != e.target)
            selected.classList.remove("selected");



        selected = e.target;


        selected.classList.toggle("selected");
        
    };

    var boxes = container.querySelectorAll('.box');

  





    button[0].onclick = function() {
        if(selected != null)
            selected.remove();
    }
    button[1].onclick = function() {
        console.log('button 2');
    }
    button[2].onclick = function() {
        console.log('button 3');
    }

 





   






});



































window.addEventListener('load', function(){

    var section = window.document.querySelector('#ex5');
    var button = section.querySelectorAll('.btn');
    var container = section.querySelector('.container');
    var text1 = section.querySelector('.id-input');
    var text2 = section.querySelector('.color-input');



 





    button[0].addEventListener('click', function(){
        
        
  
        
        var div =  document.createElement('div');
        div.style = 'font-weight: bold; font-size: 20px; width: 100px; height:100px; border-radius: 50px; background-color: ' +text2.value+ '; text-Align: center; color:#ffffff; line-height: 100px;';
        div.style.width = '100px'; 
        
        div.append(text1.value);

        container.appendChild(div);

  
        
        

    });

    button[1].addEventListener('click', function(){
        var div = container.querySelector('div:first-child');
        container.removeChild(div);
        div.remove();

    });

    button[2].addEventListener('click', function(){
      
        
        var div = container.querySelector('div:first-child');
        var clone =  div.cloneNode(true);
        container.append(clone);
    });


    button[3].addEventListener('click', function(){
        var e1 = container.querySelector('div:nth-child(1)');
        var e2 = container.querySelector('div:nth-child(2)');
        var old = container.replaceChild(e1, e2);   
        e1.insertAdjacentElement('beforebegin', old);
    });







});




















window.addEventListener("load", function() {


    var section = window.document.querySelector('#ex4');
    var container = section.querySelector('.contaier');
    var boxes = section.querySelectorAll('.box');
    var button = section.querySelector("input[value='click']");
   
    button.addEventListener("click", function() {

        var box = boxes[0];
        let boxStyle = window.getComputedStyle(box);
    
        var left = parseInt(boxStyle.getPropertyValue('left'));
        
        

        var timer = window.setInterval(function(){


            box.style.left = (left+"px");
            
            left++;



            if(left >= 400){
                clearInterval(timer);
            }
            }
            

        , 17);
        
         


        });
    });








window.addEventListener("load", function() {


    var basket = window.document.querySelector('#ex3');
    var span = basket.querySelector('.span');
    var btn = basket.querySelector('.btn');
    
    btn.addEventListener("click", function() {




        window.setInterval(function(){
            var count = span.innerHTML;
            count = parseInt(count);
            count--;
            span.innerHTML = count;

        }, 1000);

    });






});






window.addEventListener("load", function() {


    window.document.getElementById('ex2').getElementsByClassName('button')[0].onclick = function (){
        console.log('yeop2');
        
        var x = parseInt(window.document.getElementById('ex2').getElementsByClassName('text')[0].value );
        var y = parseInt(window.document.getElementById('ex2').getElementsByClassName('text')[1].value);
    
        console.log(x+y);
    


    }
    




});

window.addEventListener("load", function() {
    
    
    window.document.getElementById('ex1').getElementsByClassName('button')[0].onclick = function() {
        
        console.log("yeop");
        
    }
    
    
    
    
});


