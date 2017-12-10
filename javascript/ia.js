//TODO crear una IA que se activara cuando manolo haya tirado una carta
class Ia extends Jugador{
    turnoIa(mesa,baraja){
        let nodos = document.getElementById("ia").childNodes;
        let ultimaCarta;
        this.mostrarCartas(mesa);
        do {
            ultimaCarta = document.getElementById("mesa").lastChild;
                for (let i = 0; i < nodos.length; i++) {
                    if (nodos[i].getAttribute('draggable') == "true") {
                        if (this.isDraw2(this.listaCartas[i])) {
                            
                            mesa.robar = mesa.robar + 2;
                        } else if (this.isDraw4(this.listaCartas[i])){
                            mesa.robar = mesa.robar + 4;
                        }
                        mesa.ultima(this.listaCartas[i]);
                        this.listaCartas.splice(i, 1);


                        //TODO jugarCarta
                        nodos[i].style.transform = `translate(-50%, -50%) rotate(${mesa.randRotate()}deg)`;
                        nodos[i].setAttribute('draggable', false);
                        nodos[i].classList.remove("jugable");
                        nodos[i].removeAttribute("id");
                        nodos[i].classList.remove(this.nombre);
                        document.getElementById("mesa").appendChild(nodos[i]);
                        mesa.cambiarFondo();
                        this.mostrarCartas(mesa);
                        break;
                    }
                }
            if (ultimaCarta.className !== this.nombre && this.isDraw(mesa.ultimaCarta)){
                this.robar(baraja, mesa, mesa.robar);
                mesa.robar = 0;
            }
            this.mostrarReverso(baraja);
        } while (this.miTurno);
    }

    comprobarTurno(mesa){
        if (this.isStop(mesa.ultimaCarta) || this.isReverse(mesa.ultimaCarta) || this.isWild(mesa.ultimaCarta)) {
            return true;
        }
    }
}