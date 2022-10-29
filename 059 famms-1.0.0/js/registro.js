const botonRegistro = document.getElementById('botonRegistro')
const form = document.getElementById('form')

let registro = []

const formDeRegistro = () => {

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    let usuario = document.getElementById('form3Example1c').value;
    if(usuario.length < 5) {
      Toastify({
        text: "El nombre de usuario no es valido",
        duration: 3000,
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
      return;
    }

    let email = document.getElementById('form3Example3c').value;
    if (email.length < 6) {
        Toastify({
            text: "El mail no es valido",
            duration: 3000,
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
      return;
    }

    let clave = document.getElementById('form3Example4c').value;
    if (clave.length < 6) {
        Toastify({
            text: "La clave no es valida",
            duration: 3000,
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
      return;
    }

    let claveConfirm = document.getElementById('form3Example4cd').value;
    if (clave != claveConfirm) {
        Toastify({
            text: "Las claves no coinciden",
            duration: 3000,
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
        return;
      }



    this.submit();
    
    registro.push({usuario, email, clave, claveConfirm})


    console.log(...registro);
    saveForm (registro);

  }
}


formDeRegistro();

const saveForm = (registro) => {
  localStorage.setItem('registro', JSON.stringify(registro));
}

const getFormStorage = () => {
  const formStorage = JSON.parse(localStorage.getItem('registro'));
  return formStorage;
}

document.addEventListener('DOMContentLoaded', () =>{
  if (localStorage.getItem('registro')){
    registro = getFormStorage();
    formDeRegistro();
  }
})







