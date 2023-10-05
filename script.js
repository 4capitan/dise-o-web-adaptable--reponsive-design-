function scrollToElement(elementSelector, instance = 0) {
    //seleccione todos los elementos que coincidan con el selector dado
    const elements = document.querySelectorAll(elementSelector);
    //comprobar si hay elementos que coincidan con el selector y si la instancia de solicitud existe
    if (elements.length > instance) {
        //desplácese hasta la instancia especificada del elemento
        elements[instance] .scrollIntoView({ behavior: 'smooth' })
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Desplácese hasta el segundo elemento con la clase "encabezado"
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});