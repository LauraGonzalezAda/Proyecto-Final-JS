
  const funcionCarrito = () =>{
    seccionModalCarrito.innerHTML= '';
    seccionModalCarrito.style.display = 'flex';
    const carritoHeader = document.createElement('div')
    carritoHeader.className= 'carrito_header';
    carritoHeader.innerHTML= `
    <h1 class="carrito_header_titulo"> Carrito </h1>
    `;
    seccionModalCarrito.append(carritoHeader);

    const carritoBotonHeader = document.createElement('h1');
    carritoBotonHeader.innerText= 'X';
    carritoBotonHeader.className= 'carritoBotonHeader';
    
    carritoBotonHeader.addEventListener('click', () => {
      seccionModalCarrito.style.display = 'none';
    })

    carritoHeader.appendChild(carritoBotonHeader);

    carrito.forEach((producto)=> {
      let carritoBody = document.createElement('div')
      carritoBody.className= 'carrito_body';
      carritoBody.innerHTML= `
      <img src="${producto.img}">
      <h4>${producto.nombre}</h4>
      <p>${producto.precio} $</p>
      <p>Cantidad:${producto.cantidad} </p>
      `;

      seccionModalCarrito.appendChild(carritoBody);

      let botonEliminar = document.createElement('h1')
      botonEliminar.innerText = 'X';
      botonEliminar.className= 'boton_eliminar';

      carritoBody.appendChild(botonEliminar);
      botonEliminar.addEventListener('click', () =>{
        Swal.fire({
          title: 'Estas seguro?',
          text: "Deseas eliminar el producto del carrito?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Confirmado!',
              'El producto ah sido eliminado del carrito.',
              'success',
              eliminarDelCarrito(),
            )
          }
        })
      });

    });

    const montoTotal = carrito.reduce((acc, productos)=> acc + productos.precio * productos.cantidad, 0)

    const totalCarritoFooter = document.createElement('div');
    totalCarritoFooter.innerHTML= `Total de compra:$ ${montoTotal}`;
    totalCarritoFooter.className= 'totalCarritoFooter';
    seccionModalCarrito.appendChild(totalCarritoFooter)
  };


  emogiCarrito.addEventListener('click', funcionCarrito);

  const eliminarDelCarrito = () => {
    const findIdCarrito = carrito.find((element) => -- element.id);

    carrito = carrito.filter((Idcarrito) => {
        return Idcarrito !== findIdCarrito ;
    })
    funcionCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito))
  };