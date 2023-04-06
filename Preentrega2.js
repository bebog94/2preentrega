//En este simulador vamos a permitirle al usuario armar su combo de actualizacion con los productos y asi sumar en el carrito el saldo a pagar


//En esta clase vamos a guardar los componentes que elija el usuario
class Computadora{
    constructor(procesador,mother,memoria,){
        this.procesador= procesador;
        this.mother= mother;
        this.memoria= memoria;
    }
}

//creamos las clases para los articulos

class procesador{
    constructor(modelo, precio){
        this.modelo= modelo;
        this.precio= precio;
    }
}
class mother{
    constructor(modelo, precio){
        this.modelo= modelo;
        this.precio= precio;
    }
}
class memoria{
    constructor(modelo, precio){
        this.modelo= modelo;
        this.precio= precio;
    }
}
class disco{
    constructor(modelo, precio){
        this.modelo= modelo;
        this.precio= precio;
    }
}

//cargamos en un array los articulos y sus precios

const procesadores=[
    new procesador("Intel i7 12700k",169000),
    new procesador("Intel i5 12600k",121000),
    new procesador("AMD Ryzen 7 7700x",208000),
    new procesador("AMD Ryzen 5 7600x",124000),
];
const mothers=[
    new mother("Gigabyte B660M A PRO AX DDR4 S1700",155000),
    new mother("Msi Pro B760m-g DDR4 S1700",112000),
    new mother("Gigabyte B650m Aorus Elite Ax Ddr5 Am5 Ryzen",208000),
    new mother("Msi Pro B650-p Wifi Sam5 DDR5",125000),
];
const memorias=[
    new memoria("DDR4 Corsair 16GB (2X8GB) 2666 MHZ Vengance Rgb Pro Black",36000),
    new memoria("DDR4 Corsair 16GB (2X8GB) 2666 MHZ Vengance Rgb Pro White",36000),
    new memoria("DDR5 Corsair Vengeance Rgb 32gb (2x16gb) 6000mhz Black",90000),
    new memoria("DDR5 Corsair Vengeance Rgb 32gb (2x16gb) 6000mhz White",90000),
];


//Damos al usuario la opcion de elegir su combo


const componentesElegidos = [];

// Pedimos al usuario que seleccione un procesador
const procesadorElegido = prompt("Seleccione un procesador:\n1. Intel i7 12700k $169000\n2. Intel i5 12600k $121000\n3. AMD Ryzen 7 7700x $208000\n4. AMD Ryzen 5 7600x $124000");

// Agregamos el procesador elegido al array de componentes
switch (procesadorElegido) {
  case "1":
    componentesElegidos.push(procesadores[0]);
    break;
  case "2":
    componentesElegidos.push(procesadores[1]);
    break;
  case "3":
    componentesElegidos.push(procesadores[2]);
    break;
  case "4":
    componentesElegidos.push(procesadores[3]);
    break;
  default:
    alert("Opción inválida");
    break;
}

// Pedimos al usuario que seleccione una mother
const motherElegido = prompt("Seleccione una mother:\n1. Gigabyte B660M A PRO AX DDR4 S1700 $155000\n2. Msi Pro B760m-g DDR4 S1700 $112000\n3. Gigabyte B650m Aorus Elite Ax Ddr5 Am5 Ryzen $208000\n4. Msi Pro B650-p Wifi Sam5 DDR5 $125000");

// Agregamos la mother elegida al array de componentes
switch (motherElegido) {
  case "1":
    componentesElegidos.push(mothers[0]);
    break;
  case "2":
    componentesElegidos.push(mothers[1]);
    break;
  case "3":
    componentesElegidos.push(mothers[2]);
    break;
  case "4":
    componentesElegidos.push(mothers[3]);
    break;
  default:
    alert("Opción inválida");
    break;
}

// Pedimos al usuario que seleccione una memoria
const memoriaElegida = prompt("Seleccione una memoria:\n1. DDR4 Corsair 16GB (2X8GB) 2666 MHZ Vengance Rgb Pro Black $36000\n2. DDR4 Corsair 16GB (2X8GB) 2666 MHZ Vengance Rgb Pro White $36000\n3. DDR5 Corsair Vengeance Rgb 32gb (2x16gb) 6000mhz Black $90000\n4. DDR5 Corsair Vengeance Rgb 32gb (2x16gb) 6000mhz White $90000");

// Agregamos la memoria elegida al array de componentes
switch (memoriaElegida) {
  case "1":
    componentesElegidos.push(memorias[0]);
    break;
  case "2":
    componentesElegidos.push(memorias[1]);
    break;
  case "3":
    componentesElegidos.push(memorias[2]);
    break;
  case "4":
    componentesElegidos.push(memorias[3]);
    break;
  default:
    alert("Opción inválida");
    break;
}

 // Creamos un nuevo combo con los componentes elegidos
const nuevoCombo = new Computadora(componentesElegidos);

function sumarPrecioComponentes(componentes) {
    let precioTotal = 0;
    for (let i = 0; i < componentes.length; i++) {
      precioTotal += componentes[i].precio;
    }
    return precioTotal;
  }
  function mostrarComponentes(componentes, precioTotal) {
    let cadena = "Componentes elegidos:\n";
    for (let i = 0; i < componentes.length; i++) {
      cadena += `${componentes[i].constructor.name}: ${componentes[i].modelo} - $${componentes[i].precio}\n`;
    }
    cadena += `Precio total: $${precioTotal}`;
    alert(cadena);
  }
  const precioTotal = sumarPrecioComponentes(componentesElegidos);
mostrarComponentes(componentesElegidos, precioTotal);