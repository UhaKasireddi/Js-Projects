let setEl= document.getElementById("set");
let clearEl = document.getElementById("clear");

let uniqueId=null;
let count=0;
setEl.onclick=function(){
   
    uniqueId=setInterval(function(){
        console.log(count)
        count=count+10
        }, 500)
}


clearEl.onclick=function(){
        clearInterval(uniqueId)
        console.log("Interval cleared")
    }

let count2 = 0
let uniqueId2=setTimeout(function(){
            console.log(count2)
            console.log("bomb exploded")
            count2++
        
        
        },1000)
//clearTimeout(uniqueId2)
//clearInterval(uniqueId)
        
        
    