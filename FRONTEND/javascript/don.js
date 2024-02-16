
'use strict';

window.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    console.log(h1.innerText);

    h1.innerText = 'Ya no hace falta mirar la consola';

    const form = document.querySelector('#form-saludo');
    const input = document.querySelector('#nombre');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        console.log(input.value);

        const span = document.createElement('span');

        span.innerText = `Hola ${input.value}`;

        form.appendChild(span);
    });
});


// 'use strict';

// window.addEventListener('DOMContentLoaded', function(event) {
    
//     const h1=this.document.querySelector('h1');
//     console.log(h1.innerText);


//        h1.innerText='Hola, ya no hay que mirar a la consola';

//         const form=this.document.querySelector('#form-saludo');
//         const input=this.document.querySelector('#nombre');
//         // const boton=this.document.querySelector('#btn-saludar');
//         // const spam=this.document.querySelector('#saludo');

//         form.addEventListener('submit', function(e){

//             e.preventDefault();

//             console.log(input.value);

//             const span=document.createElement('span');

//             // spam.innerText='Hola '+input.value;
//             span.innerText=`Hola ${input.value}`;


//             form.appendChild(span);
            
//         })


// });