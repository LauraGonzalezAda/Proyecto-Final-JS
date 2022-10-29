const contenedor = document.getElementById('mijs');
const emogiCarrito = document.getElementById('emogiCarrito');
const seccionModalCarrito = document.getElementById ('seccionModalCarrito');

let carrito = []

const pedirProductos = async () => {
  const response = await fetch('./stock.json');
  const productos = await response.json();


productos.forEach( (producto) => {

    let div = document.createElement('div');
    div.classList.add('col-sm-6');
    div.classList.add('col-md-4');
    div.classList.add('col-sm-6');

    div.innerHTML = `
          <div class="box">
            <div class="option_container">
              <div class="options">
                <button class="option1" id="option1${producto.id}"> Men's Shirt </button>
              </div>
            </div>
            <div class="img-box">
              <img src="${producto.img}">
            </div>
            <div class="detail-box">
              <h5>${producto.nombre}</h5>
              <h6>${producto.precio} $</h6>
            </div>
          </div>
    `;
    contenedor.appendChild(div);

    const boton = document.getElementById(`option1${producto.id}`)

    boton.addEventListener('click', () => {
      const repetidos = carrito.some((repeatproducto) => repeatproducto.id === producto.id);
      
      Toastify({
        text: "Felicidades, el producto se agrego al carrito!!",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "tight",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #f7444e, #f3999d)",
        },
        onClick: function(){}
      }).showToast();

      repetidos ? carrito.map((prod)=>{ if(prod.id === producto.id){prod.cantidad++}}) : carrito.push({id : producto.id, nombre : producto.nombre,img : producto.img,precio: producto.precio, cantidad : producto.cantidad,})
   
    
    console.log(...carrito);
    saveCarritoDeCompras (carrito);
  })
  });

};

pedirProductos();

  const saveCarritoDeCompras = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  
  const getCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
  }

  document.addEventListener('DOMContentLoaded', () =>{
    if (localStorage.getItem('carrito')){
      carrito = getCarritoStorage();
    }
  })


