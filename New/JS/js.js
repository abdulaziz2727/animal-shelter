let li1 = document.querySelector("#card1")
let heart = document.querySelector("#heart")
li1.addEventListener("click", ()=>{
    if (heart.style.color==="red"){
        heart.innerHTML = "";
        heart.style.color ="white";
    }
    else{
        heart.innerHTML = "<i class='bi bi-heart-fill'></i>";
        heart.style.color ="red";
    }
})
let li2 = document.querySelector("#card2")
let heart2 = document.querySelector("#heart2")
li2.addEventListener("click", ()=>{
    if (heart2.style.color==="red"){
        heart2.innerHTML = "";
        heart2.style.color ="white";
    }
    else{
        heart2.innerHTML = "<i class='bi bi-heart-fill'></i>";
        heart2.style.color ="red";
    }
})
let li3 = document.querySelector("#card3")
let heart3 = document.querySelector("#heart3")
li3.addEventListener("click", ()=>{
    if (heart3.style.color==="red"){
        heart3.innerHTML = "";
        heart3.style.color ="white";
    }
    else{
        heart3.innerHTML = "<i class='bi bi-heart-fill'></i>";
        heart3.style.color ="red";
    }
})
let star = document.querySelector("bi-star-fill");
start1.addEventListener("click", ()=>{
    e.stop
})
    
