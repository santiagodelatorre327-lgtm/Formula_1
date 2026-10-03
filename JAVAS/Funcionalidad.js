function guardarAutos() {
    var modelo = document.getElementById('modelo').value;
    alert("Modelo ingresado: " + modelo);

    var color = document.getElementById('color').value;
    alert("Color ingresado: " + color);

    var imagen = document.getElementById('imagen').value;
    alert("Foto ingresada: " + imagen);

    var activoSeleccionado = document.querySelector('input[name="activo"]:checked');
    var activo = activoSeleccionado ? activoSeleccionado.value : "No especificado";
    alert("Activo: " + activo);
}


function guardarEscuderia() {
    var nombre = document.getElementById('nombre').value;
    alert("Nombre ingresado: " + nombre);

    var descripcion = document.getElementById('Descripcion').value;
    alert("Descripción ingresada: " + descripcion);
}


function guardarCorredor() {
    var nombre = document.getElementById('nombre').value;
    alert("Nombre ingresado: " + nombre);

    var app = document.getElementById('app').value;
    alert("Apellido Paterno ingresado: " + app);

    var apm = document.getElementById('apm').value;
    alert("Apellido Materno ingresado: " + apm);

    var edad = document.getElementById('edad').value;
    alert("Edad ingresada: " + edad);


    var generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    var genero = generoSeleccionado ? generoSeleccionado.value : "No especificado";
    alert("Género seleccionado: " + genero);

    var foto = document.getElementById('foto').value;
    alert("Foto ingresada: " + foto);
}
function guardarRelaciones() {
    var autoCorredor = document.getElementById('auto_corredor').value;
    alert("Auto (Corredor) seleccionado: " + autoCorredor);

    var corredor = document.getElementById('corredor').value;
    alert("Corredor seleccionado: " + corredor);

    var autoEscuderia = document.getElementById('auto_escuderia').value;
    alert("Auto (Escudería) seleccionado: " + autoEscuderia);

    var escuderia = document.getElementById('escuderia').value;
    alert("Escudería seleccionada: " + escuderia);
}
