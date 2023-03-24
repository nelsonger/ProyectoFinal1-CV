var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}
let copc = document.getElementById("copc");
crearBarra(copc);
let iso9001 = document.getElementById("iso9001");
crearBarra(iso9001);
let cx = document.getElementById("cx");
crearBarra(cx);
let nps = document.getElementById("nps");
crearBarra(nps);
let sat = document.getElementById("sat");
crearBarra(sat);
let voc = document.getElementById("voc");
crearBarra(voc);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalcopc = setInterval(function(){
            pintarBarra(copc, 16, 0, intervalcopc);
        },100);
        const intervaliso9001 = setInterval(function(){
            pintarBarra(iso9001, 11, 1, intervaliso9001);
        },100);
        const intervalcx = setInterval(function(){
            pintarBarra(cx, 11, 2, intervalcx);
        },100);
        const intervalnps = setInterval(function(){
            pintarBarra(nps, 15, 3, intervalnps);
        },100);
        const intervalsat = setInterval(function(){
            pintarBarra(sat, 16, 4, intervalsat);
        },100);
        const intervalvoc = setInterval(function(){
            pintarBarra(voc, 11, 5, intervalvoc);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}
window.onscroll = function(){
    efectoHabilidades();
}