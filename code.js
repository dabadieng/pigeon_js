let souris={x:0, y:0};
let timer2=setInterval(calculdistance,50);

let pigeon=document.createElement("img");
pigeon.src="pigeon.gif";
pigeon.style.width="50px";
pigeon.style.height="50px";
pigeon.style.position="absolute";
pigeon.style.top="0px";
pigeon.style.left="0px";
document.body.appendChild(pigeon);
pigeon.dataset.vx=mtrand(-10,10);
pigeon.dataset.vy=mtrand(-10,10);
pigeon.dataset.etat="vivant";
let timer=setInterval(deplacer,40);
pigeon.addEventListener("click",kill);

//gestion de la souris
window.addEventListener("mousemove",updateSouris);

function updateSouris() {
    souris.x=event.clientX;
    souris.y=event.clientY;
}

function calculdistance() {    
    let x=souris.x;
    let y=souris.y;
    let a=parseInt(pigeon.style.left);
    let b=parseInt(pigeon.style.top);
    let d=parseInt(Math.sqrt((x-a)*(x-a) + (y-b)*(y-b))); 
    let pan=(a-x)/window.innerWidth;

    let maxd=window.innerHeight + window.innerWidth;
    //fréquence entre 0 et 16000
    let frequence=(d/maxd)*16000;
    //triangle,square
    tones.type="square";
    tones.panValue=pan;
    tones.play(frequence);
}


function kill() {
    pigeon.src="pigeondead.jpg";
    pigeon.dataset.etat="mort";
    pigeon.dataset.vx=0;
    pigeon.dataset.vy=5;
}

function deplacer() {
    let x=parseInt(pigeon.style.left);
    let y=parseInt(pigeon.style.top);
    x += parseInt(pigeon.dataset.vx);
    y += parseInt(pigeon.dataset.vy);
    if (x>window.innerWidth)
        pigeon.dataset.vx=-pigeon.dataset.vx;
    else if (x<0)
        pigeon.dataset.vx=-pigeon.dataset.vx;
    
    if (y>window.innerHeight) {
        if (pigeon.dataset.etat=="mort")
            pigeon.dataset.vy=0;        
        pigeon.dataset.vy=-pigeon.dataset.vy;
    } else if (y<0)
        pigeon.dataset.vy=-pigeon.dataset.vy;

    pigeon.style.left=x + "px";
    pigeon.style.top=y + "px";
}

//Tire au hasard un nombre entre para1 et para2
function mtrand(para1,para2) {
    return (para2-para1)*Math.random() + para1;
}