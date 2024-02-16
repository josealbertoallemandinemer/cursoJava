'use strict';

const URL = 'http://localhost:3000/productos/';

let form, id, nombre, precio, tbody, menu;

window.addEventListener('DOMContentLoaded', async function() {
    menu = document.querySelector('body>nav');

    form = document.querySelector('form');

    id = document.querySelector('#id');
    nombre = document.querySelector('#nombre');
    precio = document.querySelector('#precio');

    form.style.display = 'none';

    tbody = document.querySelector('tbody');

    await listado();

    form.addEventListener('submit', async function(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        
        form.classList.add('was-validated');
        
        if (!form.checkValidity()) {
            menu.insertAdjacentHTML('afterend', '<jl-alerta mensaje="Rellena todos los campos" tipo="danger"></jl-alerta>');
            return;
        }

        const producto = {
            nombre: nombre.value,
            precio: precio.value
        };

        if(id.value) {
            producto.id = id.value;
            
            const respuesta = await fetch(URL + id.value, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
        } else {
            const respuesta = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });
        }

        await listado();

        form.style.display = 'none';

    });

    
});

async function listado() {
    const respuesta = await fetch(URL);
    const productos = await respuesta.json();

    console.log(productos);

    tbody.innerHTML = '';

    for (const producto of productos) {
        console.log(producto);

        const tr = document.createElement('tr');

        tr.dataset.id = producto.id;

        tr.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>
                <a class="btn btn-sm btn-primary" href="javascript:formulario('${producto.id}')">Editar</a>
                <a class="btn btn-sm btn-danger" href="javascript:borrar('${producto.id}')">Borrar</a>
            </td>
        `;

        tbody.appendChild(tr);
    }
}

async function formulario(idRecibido) {
    form.style.display = 'block';

    if(idRecibido) {
        id.value = idRecibido;

        const respuesta = await fetch(URL + idRecibido);
        const producto = await respuesta.json();

        nombre.value = producto.nombre;
        precio.value = producto.precio;
    } else {
        form.reset();
    }
}

async function borrar(id) {
    const respuesta = await fetch(URL + id, {
        method: 'DELETE'
    });

    if(respuesta.ok) {
        document.querySelector(`tr[data-id="${id}"]`).remove();
    }
}





// 'use strict';

// const URL = 'http://localhost:3000/productos/';

// // json-server a tienda

// let form, id, nombre, precio, tbody;

// window.addEventListener('DOMContentLoaded', async function() {
   
//     form = document.querySelector('form');
//     id = document.querySelector('#id');
//     nombre = document.querySelector('#nombre');
//     precio = document.querySelector('#precio');

//     form.style.display = 'none';
//     // desaparece

//     tbody = document.querySelector('tbody');

//     await listado();

//     form.addEventListener('submit', async function(evento) {
//         evento.preventDefault();

//         const producto = {
//             nombre: nombre.value,
//             precio: precio.value
//         };

//         if(id.value) {
//             producto.id = id.value;
            
//             const respuesta = await fetch(URL + id.value, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(producto)
//             });
//         } else {
//             const respuesta = await fetch(URL, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(producto)
//             });
//         }

//         // hay que avisar que se envia en javascript aunque lo convirtamos luego 

//         await listado();

//         form.style.display = 'none';

//     });

    
// });

// async function listado() {
//     const respuesta = await fetch(URL);
//     const productos = await respuesta.json();
//     // await con promesas

//     console.log(productos);

//     tbody.innerHTML = '';
//     // si hay algo lo borro

//     for (const producto of productos) {
//         console.log(producto);

//         const tr = document.createElement('tr');

//         tr.dataset.id = producto.id;
//         // crea <tr data-id="">


//         tr.innerHTML = `
//             <td>${producto.id}</td>
//             <td>${producto.nombre}</td>
//             <td>${producto.precio}</td>
//             <td>
//                 <a href="javascript:formulario('${producto.id}')">Editar</a>
//                 <a href="javascript:borrar('${producto.id}')">Borrar</a>
//             </td>
            

//         `;
//         // cuando le hagas click, ejecutará la función formulario
//             //  y como variable le pasará la id del producto que está siendo 
//             //  recorrido en ese momento

//         tbody.appendChild(tr);
//         // aqui se ensena
//     }
// }

// async function formulario(idRecibido) {
//     form.style.display = 'block';

//     if(idRecibido) {
//         id.value = idRecibido;

//         const respuesta = await fetch(URL + idRecibido);
//         const producto = await respuesta.json();

//         nombre.value = producto.nombre;
//         precio.value = producto.precio;
//     } else {
//         form.reset();
//     }
// }

// async function borrar(id) {
//     const respuesta = await fetch(URL + id, {
//         method: 'DELETE'
//     });

//     if(respuesta.ok) {
//         document.querySelector(`tr[data-id="${id}"]`).remove();
//     }
// }











///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 'use strict';

// const URL='../json/listado.json';




// window.addEventListener('DOMContentLoaded', async function() {
    
//     const respuesta=await fetch(URL);
//     const productos=await respuesta.json();

//     console.log(productos);

//     for (const producto of productos) {
//         console.log(producto);

//         const tr=document.createElement('tr');

//         tr.innerHTML=`
//             <td>${producto.id}</td>
//             <td>${producto.nombre}</td>
//             <td>${producto.precio}</td>

                     
//             `;


//         tbody.appendChild(tr);
//     }
// })