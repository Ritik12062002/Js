const randomColor = function(){
    const hex ="0123456789ABCDEF"
    let color ="#"

    for(let i=0;i<6;i++){
 
         color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalID;

const startChangingColor =function(){
    if(!intervalID){
        intervalID=setInterval(changeBgColor,1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor=randomColor()
    }
}


const stopChangingColor = function(){
    clearInterval(intervalID)
    intervalID =null;
}

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);



