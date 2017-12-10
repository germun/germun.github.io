//Baraja

class Baraja {

    constructor(){
        this.listaCartas = this.nuevaLista();
        this.reverso = document.createElement("img");
        this.reverso.src = `img/dorso.svg`;
    }

    robar(n) {
        let robar = [];
        let robo;
        for (let i = 0; i < n; i++) {
            robo = Math.floor((Math.random() * this.listaCartas.length - 1) + 1);
            //TODO comprobar que la "CANTIDAD" de cartas que se roban es 1
            robar.push(this.listaCartas[robo]);
            this.listaCartas[robo].cantidad = this.listaCartas[robo].cantidad - 1;
            if (this.listaCartas[robo].cantidad == 0) {
                this.listaCartas.splice(robo, 1);
            }
        }
        return robar;
    }

    nuevaLista(n = 1) {
        let cont = 0;
        let listaCartas = [];
        let palos = ["red", "blue", "yellow", "green"];
        let colores = ["#ee0000", "#0173bc", "#fed900","#00aa00"]
        let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "reverse", "stop", "draw2"];
        for (let j = 0; j < 4; j++) {
            for (let h = 0; h <= 12; h++) {
                document.getElementById("mesa")
                listaCartas[cont] = { palo: palos[j], numero: numeros[h], carta: palos[j] + "_" + numeros[h],color: colores[j], cantidad: n };
                cont++;
            }
        }

        //listaCartas.push({ palo: "black", numero: "wild", carta: "black_wild", cantidad: 2 * n });
        //listaCartas.push({ palo: "black", numero: "drag4", carta: "black_draw4", cantidad: 2 * n });

        return listaCartas;
    }
}