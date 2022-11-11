function moverPosicionRandom(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.random() 
        * (window.innerHeight - elm.offsetHeight)
        + "px";
    elm.style.left = Math.random() 
        * (window.innerHeight - elm.offsetHeight)
        + "px";
};

let btnSi = document.getElementById("btnSi") ;
let btnNo = document.getElementById("btnNo");
let modoSexo = document.getElementsByClassName("modoSexo")[0];

btnNo.addEventListener("mouseenter", function(e) {
    moverPosicionRandom(e.target);
});

btnSi.addEventListener("click", function(e) {
    alert("Sabía que dirías que si. Casemonos ya y tengamos hijos. TE AMO!!! ❤");
    modoSexo.style.display = "block";
    const cancion = new Audio("./img/img_modo_hot.mp3");
    cancion.play();
});
