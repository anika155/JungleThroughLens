const torch=document.getElementsByClassName("torch")[0];
const body=document.getElementsByClassName("body")[0];
const switch1=document.getElementsByClassName("switch")[0];
console.log(switch1);


//! Mouse Logic
body.addEventListener("mousemove",(event)=>{
    console.log(event)
    let x=event.clientX;
    let y=event.clientY;
    torch.style.left=x-100+"px";    
    torch.style.top=y-100+"px";    
});

//! Switch logic
switch1.addEventListener("click",(event)=>{
    if(event.type==="click"){
        torch.style.boxShadow="none";
torch.style.border="none";
        torch.style.transitionDuration="3s";
    }
})


