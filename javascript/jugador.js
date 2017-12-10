//Funciones para crear jugadores
class Jugador {

    constructor(nombre, baraja ,mesa) {
        //TODO ELiminar
        this.nombre = nombre;
        this.listaCartas = [];
        this.robar(baraja,mesa,7);
        this.miTurno = false;
    }
    
    mostrarCartas(mesa){
        let div;
        if (this.nombre === "ia") {
            div = "ia";
            console.log(div);
        } else {
            div = "mano";
            console.log(div);
        }

        document.getElementById(div).innerHTML = "";
        for (let i = 0; i < this.listaCartas.length; i++) {
            let carta = this.listaCartas[i];
            let imagen = document.createElement("img");

            imagen.src = `img/${this.listaCartas[i].carta}.svg`;
            imagen.id = `${this.listaCartas[i].carta}`;
            imagen.draggable = false;
            //TODO draw4
            if (this.isDraw(mesa.ultimaCarta) && this.isDraw(carta)){
                imagen.draggable = true;
                imagen.classList.add("jugable");
            }else if (this.mismoPalo(carta, mesa) || this.mismoNumero(carta, mesa)) {
                if (mesa.robar === 0) {
                    imagen.draggable = true;
                    imagen.classList.add("jugable");
                }
            }

            //TODO Eliminar
            imagen.classList.add(this.nombre);
            //

            document.getElementById(div).appendChild(imagen);
        }
    }

    robar(baraja,mesa,n=1){
        //TODO comprobar si todas las imagenes de la mano tienen el dragable a false

        //Guardamos lo robado en una variable
        let robado = baraja.robar(n);

        //Añadimos las cartas robadas a nuesta lista de cartas
        for (let i = 0; i < n; i++) {
            this.listaCartas.push(robado[i]);
        }
        this.mostrarCartas(mesa);
    }

    //Metodo no usado
    //TODO modificar el metodo para que sea utilizable segun el nombre del contrincante que llame el metodo, no solo la IA
    jugarCarta(carta){
        //cambia la ultima carta jugada
        mesa.ultima(this.listaCartas[i]);
        //elimina la carta jugada de la lista de cartas deljugador
        this.listaCartas.splice(i, 1);
        id_carta.style.transform = `translate(-50%, -50%) rotate(${mesa.randRotate()}deg)`;
        id_carta.setAttribute('draggable', false);
        id_carta.classList.remove("jugable");
        id_carta.removeAttribute("id");
        //utilizar el nombre del jugador en lugar de un string
        id_carta.classList.remove("ia");
        document.getElementById("mesa").appendChild(id_carta);
    }

    //metodo para mostrar el reverso de las cartas del contrincante(actualemente la IA)
    //TODO modificar el metodo para que sea utilizable segun el nombre del contrincante que llame el metodo, no solo la IA
    mostrarReverso(baraja){
        document.getElementById("reversoia").innerHTML = "";
        for (let j = 0; j < this.listaCartas.length; j++) {
            let clon = baraja.reverso.cloneNode();
            let move = 50 * j;
            clon.style.transform = `translate(-${move}%, 0)`;

            document.getElementById("reversoia").appendChild(clon);
        }
    }

/*    //TODO metodo que haga aparecer el div con la seleccion de color
    cambiarColor(){
        let borraCarta = document.querySelectorAll('.manolo');

        //Recojer los div .colores con un on touch o algo así
        for (var i = 0; i < borraCarta.length; i++) {
            borraCarta[i].addEventListener('touch', function (ev) {

                ev.preventDefault();
                let data = ev.dataTransfer.getData("text");

            })

        }
    }*/

    //Metodos para comprobar las cartas
    mismoPalo(carta, mesa) {
        if (carta.palo === mesa.ultimaCarta.palo) {
            return true;
        }
    }

    mismoNumero(carta, mesa) {
        if (carta.numero === mesa.ultimaCarta.numero) {
            return true;
        }
    }

    isDraw(carta){
        if (this.isDraw2(carta) || this.isDraw4(carta)) {
            return true;
        }
    }

    isDraw2(carta) {
        if (carta.numero === "draw2") {
            return true;
        }
    }

    isDraw4(carta) {
        if (carta.numero === "draw4") {
            return true;
        }
    }

    isWild(carta) {
        if (carta.numero === "wild") {
            return true;
        }
    }

    isStop(carta) {
        if (carta.numero === "stop") {
            return true;
        }
    }

    isReverse(carta) {
        if (carta.numero === "reverse") {
            return true;
        }
    }
}