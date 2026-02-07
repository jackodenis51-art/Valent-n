const no=document.getElementById("no");
const yes=document.getElementById("yes");
const gifts=document.getElementById("gifts");
const giftItems=document.querySelectorAll(".gift");

let scale=1;

function moveNo(){
const maxX=window.innerWidth-no.offsetWidth;
const maxY=window.innerHeight-no.offsetHeight;

no.style.left=Math.random()*maxX+"px";
no.style.top=Math.random()*maxY+"px";

scale+=0.15;
yes.style.transform="scale("+scale+")";
}

no.addEventListener("mouseover",moveNo);
no.addEventListener("touchstart",moveNo);

yes.addEventListener("click",()=>{
gifts.style.display="flex";
});

giftItems.forEach(g=>{
g.addEventListener("click",()=>{
g.classList.toggle("open");
});
});
