
let amigos = [];

function agregarAmigos() {
    let input = document.getElementById('amigo');
    let nombreAmigo = input.value.trim();
    // Actualizar el array de amigos
    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        actualizarLista();
    // Validar la entrada
    } else {
        alert ("Por favor, ingrese un nombre");
    }
    // Limpiar el campo de entrada
    input.value = '';
}

function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    lista.innerHTML = '';
    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) { // i comienza en 0. asegura que el bucle se ejecute mientras i sea menor que la cantidad de elementos del array
        let li = document.createElement('li'); // Crea un elemento <li>
        li.textContent = amigos[i]; // Establece el texto con el nombre
        lista.appendChild(li); // Agrega el <li> al elemento de lista en el HTML
    }
}

function sortearAmigos() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear")
        return;
    }
    // Generar un índice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indice];
    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
    // Limpiar todo
    amigos = [];
    actualizarLista();
    document.getElementById('amigo').value = '';
}


