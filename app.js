// alert("hi")
let select=document.querySelectorAll("select");
let clock=document.getElementById("clock")
let box=document.getElementById("box")
let button=document.querySelector("button")
console.log(select);
let alramTime,isAlram=false;
let ringTone=new Audio("./nobody_believes_in_you,_you_lost_again_and_again_and_again(256k).mp3")

for(let i=12;i>0;i--){
    let hours=document.createElement('option');
    i<10? i= hours.innerText=`0${i}`: hours.innerText=i;
   
    hours.setAttribute("value",i);
    select[0].appendChild(hours);
}
for(let i=59;i>=0;i--){
    let mins=document.createElement('option');
    i<10? i=mins.innerText=`0${i}`: mins.innerText=i;
    mins.setAttribute("value",i);
    select[1].appendChild(mins);
}
for(let i=1;i>=0;i--){
    let m=document.createElement('option');
i%2!==0?m.innerText="AM":m.innerText="PM";
select[2].appendChild(m);
}

setInterval(()=>{
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let ampm="AM";
    
    h>=12?ampm="PM":ampm="AM";
  if(h==24)
  ampm="AM"

    h>12?h=h-12:h;
    
    h<10 ? h=`0${h}`:h
    m<10 ?m= `0${m}`:m
    s<10 ? s=`0${s}`:s
    clock.innerText=`${h}:${m}:${s} ${ampm}`
    if (alramTime== `${h}:${m} ${ampm}`){
        ringTone.play();
        // ringTone.loop=true;
        console.log("ringing....")
        console.log( `${h}:${m} ${ampm}`)
    } if (alramTime!== `${h}:${m} ${ampm}`){
       
ringTone.pause(); 
    }
    },1000);


function setAlram(){
    if(isAlram){
ringTone.pause()
alramTime=""
box.classList.remove("disable");
button.innerText="Set Alram"
return isAlram=false;
    }

isAlram=true;

    if(select[0].value!=="hour" && select[1].value!=="min"){
      
        let time=`${select[0].value}:${select[1].value} ${select[2].value}`;
        box.classList.add("disable");
        button.innerText="Clear Alram"
        console.log(time);
        alramTime=`${select[0].value}:${select[1].value} ${select[2].value}`;
    }
    
    else{
        console.log("enter time ")
        alert("enter time")
    }
}   