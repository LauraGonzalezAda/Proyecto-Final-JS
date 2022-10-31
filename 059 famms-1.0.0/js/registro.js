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
        text: "El nombre debe ser mayor a 5 caracteres",
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

    let email = document.getElementById('form3Example3c').value.toLowerCase();
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
    const validarEmail = registro.map(usuario => usuario.email);
    const emailExistente = validarEmail.includes(email)
    if (emailExistente) {
      Toastify({
          text: "El mail ya esta en uso",
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
            text: "La clave es demasiado corta",
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







