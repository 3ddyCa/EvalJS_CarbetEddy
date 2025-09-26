

//Le fichier JS pour la partie Météo
//Sert à activer/desactiver les logs
let LOGS =true;
//Objet conditions météos
let bulletin;

async function askMeteo(){
   return await fetch("https://prevision-meteo.ch/services/json/toulouse").then(response => {
    if(response.status == 200){
        return response.json();
    }else{
        throw new Error("Problème lors du fetch")
    }
})
}

const cardMeteo = document.querySelector(".cardMeteo");
const cardMeteo_btt = cardMeteo.children[cardMeteo.children.length-1];
const info = document.createElement("div");

info.setAttribute("style" , "height:300px; width:200px;margin:16px 0 16px 0;border:3px solid grey; padding:16px 12px 24px 12px");
cardMeteo.insertBefore(info, cardMeteo.children[cardMeteo.children.length-1]);
// cardMeteo.insertBefore(info, cardMeteo_btt);

function addInfo(input){
    info.innerText = `${input}`;
}

function bouton(){
    cardMeteo.children[cardMeteo.children.length-1].classList.add("button__cardMeteo");
}

cardMeteo_btt.addEventListener("mousedown",()=>{
    cardMeteo_btt.setAttribute("style" , "background-color:orangered");
    if(LOGS == true){
        console.log("down");
    }
})
cardMeteo_btt.addEventListener("mouseup",()=>{
    cardMeteo_btt.removeAttribute("style");
    if(LOGS == true){
        console.log("up");
    }
})
cardMeteo_btt.addEventListener("click",()=>{
    askMeteo().then((response) =>{
        if(LOGS == true){
            console.log("Bulletin météo brut : " , bulletin);
            console.log("Bulletin météo json : " , response);
        }
        return bulletin = response;
    });
    setTimeout(() =>{
    const info_1 = document.createElement("h4");
    const info_2 = document.createElement("h4");
    const info_3 = document.createElement("h4");
    const info_4 = document.createElement("h4");
    info_1.innerText = `Condition actuelle : ${bulletin.current_condition.condition}`;
    info_2.innerText = `Température actuelle : ${bulletin.current_condition.tmp}`;
    info_3.innerText = `Température maximum jour 0 : ${bulletin.fcst_day_0.tmax}`;
    info_4.innerText = `Température minimum jour 0 : ${bulletin.fcst_day_0.tmin}`;
    cardMeteo.children[2].appendChild(info_1);
    cardMeteo.children[2].appendChild(info_2);
    cardMeteo.children[2].appendChild(info_3);
    cardMeteo.children[2].appendChild(info_4);
    bouton();
    if(LOGS == true){
        console.log("askMeteo");
    }
    },200);
})