let para=document.querySelector("p");
let stop=document.querySelector(".red");
let start=document.querySelector(".green");
let reset=document.querySelector(".blue");
// console.dir(para);
let msec=0;
let minit=0;
let hour=0;
let tinmmer=null;

start.addEventListener("click",()=>{
    if(tinmmer!=null)
    {
        clearInterval(tinmmer);
    }
    tinmmer=setInterval(starttimmer,1000);

  });
stop.addEventListener("click",()=>{
    
        clearInterval(tinmmer);
    
  

  });
reset.addEventListener("click",()=>{
    clearInterval(tinmmer);
    para.innerText=`00 : 00 : 00`;
    msec=0;
    minit=0;
    hour=0;
    
  });
  

function starttimmer(){
    msec++;
    if(msec==59)
    {
        msec=0;
        minit++
        if(minit==59)
        {
            minit=0;
            hour++;

        }
    }
    let mescstring;
    let minitstring;
    let hourstring;
if(msec<10)
{
    mescstring=`0${msec}`;

}
  else{
    mescstring=msec;

  }

  if(minit<10)
{
    minitstring=`0${minit}`;

}
  else{
    minitstring=minit;
    
  }

  if(hour<10)
{
    hourstring=`0${hour}`;

}
  else{
    hourstring=hour;
    
  }
 para.innerText=` ${hourstring} : ${minitstring} : ${mescstring}`;

}