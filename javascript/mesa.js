//TODO Crear una mesa con los metodos necesarios para que todo lo que se ponga en ella este en orden
class Mesa{
    constructor(baraja){
        this.ultimaCarta = this.abrirMesa(baraja);
        this.robar = 0;
    }

    //Metodo para poner la primera carta en la mesa
    abrirMesa(baraja) {
        let primera = baraja.robar(1);
        let carta = document.createElement("img");
        carta.src = `img/${primera[0].carta}.svg`;
        carta.draggable = false;
        document.getElementById("mesa").appendChild(carta);
        return primera[0];
    }

    //Metodo para cambiar el color del fondo dependiendo de la ultima carta jugada
    cambiarFondo(){
        var fondo = "radial-gradient(ellipse at center, {colorCarta} 0%,#000000 100%)";
        fondo = fondo.replace(/\{colorCarta\}/g, this.ultimaCarta.color);
        document.body.style.background = `${fondo}`;
    }

    //Cambia el atributo ultimaCarta para que coincida con la ultima carta posicionada en el tablero
    ultima(carta) {
        this.ultimaCarta = (carta);
    }

    //Establece los grados de rotacion de la carta al ser posicionada en la mesa
    randRotate() {
        return Math.floor((Math.random() * 30) - 15);
    };
}