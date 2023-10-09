const btn=document.getElementById("submit");
const box=document.getElementById("imgBox");
const image=document.getElementById("qrImage")
const text=document.querySelector("#val");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(text.value.length>0){
       box.classList="showImg";
       image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
    }else{
        box.classList.remove("showImg");
        text.classList="error";
        setTimeout(()=>{
           text.classList.remove("error");
        },1000)
    }
})