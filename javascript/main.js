//Funciones para colocar las cartas en el tablero

function allowDrop(ev) {
    ev.preventDefault();
};

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

//Sonidos para cada accion del juego
let sound = new Audio("drop.wav");

//Funcion principal del juego
function main() {
    let baraja = new Baraja();
    let mesa = new Mesa(baraja);
    let manolo = new Jugador("manolo",baraja,mesa);
    let ia = new Ia("ia",baraja,mesa);
    ia.mostrarReverso(baraja);
    mesa.cambiarFondo();

    let borraCarta = document.querySelectorAll('.manolo');

    for (var i = 0; i < borraCarta.length; i++) {
        borraCarta[i].addEventListener('drop', function (ev) {

            //TODO meter todo esto en otro sitio (MESA?)
            ev.preventDefault();
            let data = ev.dataTransfer.getData("text");
            sound.play();

            data = data.replace(/^.*[\\\/]/, "");
            data = data.replace(/\.[^/.]+$/, "");
            var dasta = 0;
            manolo.mostrarCartas(mesa);
            for (var i = 0; i < manolo.listaCartas.length; i++) {
                if (manolo.listaCartas[i].carta === data) {
                    dasta = i;
                    mesa.ultima(manolo.listaCartas[i]);
                }
            }

            manolo.listaCartas.splice(dasta, 1);

            /*${} y comillas invertidas = concatenacion*/
            //jugarCarta
            document.getElementById(data).style.transform = `translate(-50%, -50%) rotate(${mesa.randRotate()}deg)`;
            document.getElementById(data).setAttribute('draggable', false);
            document.getElementById(data).classList.remove("jugable");
            document.getElementById("mesa").appendChild(document.getElementById(data));
            document.getElementById(data).classList.remove(manolo.nombre);
            document.getElementById(data).removeAttribute("id");


            manolo.robar(baraja,mesa);
            ia.turnoIa(mesa,baraja);
            manolo.mostrarCartas(mesa);
        })
    }
}