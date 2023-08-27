        var x=0
        var y=0
        function inc(){
            x+=1
            document.getElementById('count-display').innerText=x;
        }
        function dec(){
            x-=1;
            var t= document.getElementById('count-display').innerText=x;

        }
        function zero(){
            y=0;
            x=0;
            z=0;
            document.getElementById('count-display').innerText=y;
        }