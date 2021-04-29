
        window.onload = function (){
            window.document.getElementById('geosi-gi').innerHTML += "여기보세요여기!!!! 눌러이샊기야";
            window.document.getElementById('geosi-gi').onclick = function (){
                var x = prompt('x: ');
                var y = prompt('y: ');
                x = parseInt(x);
                y = parseInt(y);
                window['geosi-gi'].innerText = x+y;
                window.document.getElementById('geosi-gi').innerText = x+y;
            };
        };