class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  get direccion() {
    return this._direccion;
  }

  set direccion(nuevaDireccion) {
    this._direccion = nuevaDireccion;
  }

  get telefono() {
    return this._telefono;
  }

  set telefono(nuevoTelefono) {
    this._telefono = nuevoTelefono;
  }

  datosPropietario() {
    return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y el número telefónico de contacto: ${this._telefono} `;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }

  get tipo() {
    return `El tipo de animal es un: ${this._tipo} `;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get nombreMascota() {
    return this._nombreMascota;
  }

  set nombreMascota(nuevoNombreMascota) {
    this._nombreMascota = nuevoNombreMascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}

let formulario = document.querySelector("form");

let consulta = (event) => {
  event.preventDefault();

  let propietario = document.getElementById('propietario').value;
  let telefono = document.getElementById('telefono').value;
  let direccion = document.getElementById('direccion').value;
  let nombreMascota = document.getElementById('nombreMascota').value;
  let tipo = document.getElementById('tipo').value;
  let enfermedad = document.getElementById('enfermedad').value;
  let resultado = document.querySelector('ul');

  if (
    !propietario ||
    !telefono ||
    !direccion ||
    !nombreMascota ||
    !enfermedad
  ) {
    alert('Por favor completa todos los campos.');
    return;
  }

  let mascota;
  switch (tipo) {
    case 'perro':
    case 'gato':
    case 'conejo':
      mascota = new Mascota(
        propietario,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad
      );
      break;
    default:
      alert('Tipo de mascota no válido.');
      return;
  }

  resultado.innerHTML = `<li>${mascota.datosPropietario()}</li>
                            <li>${
                              mascota.tipo
                            }, mientras que el nombre de la mascota es: ${
    mascota.nombreMascota
  } y la enfermedad es: ${mascota.enfermedad}</li>`;

  // Limpiar campos del formulario
  document.getElementById('propietario').value = '';
  document.getElementById('direccion').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('nombreMascota').value = '';
  document.getElementById('tipo').value = 'perro';
  document.getElementById('enfermedad').value = '';
};

formulario.addEventListener('submit', consulta);