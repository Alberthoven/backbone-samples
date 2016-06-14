var fiatUno = {
        marca: "Fiat"
    },
    seatToledo = {
        marca: "Seat"
    };

_.extend(fiatUno, Backbone.Events);

const mostrarMarca = function mostrarMarca() {
    alert("La marca del objeto: " + this.marca)
};

fiatUno.on("mi:evento:fiat", mostrarMarca);

fiatUno.on("mi:evento:Seat", mostrarMarca, seatToledo);

fiatUno.trigger("mi:evento:fiat");
fiatUno.trigger("mi:evento:Seat");
fiatUno.off();