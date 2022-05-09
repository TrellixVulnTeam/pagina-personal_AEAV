(async () => {
    const {value: alertz} = await Swal.fire({
        title: "Bienvenido!",
        html: "<b>Nuestro formulario de contacto se encuentra en mantenimiento. Porfavor contactarse via e-mail o Whatsapp.</b>",
        confirmButtonText: "Aceptar",
        footer: "Gracias por confiar en nosotros.",
        /* width: "50%", */
        padding: "1rem",
        /* grow: "column", */
        backdrop: true,
        /* timer: 5000, */
        timerProgressBar: true,
        toast: true,
        position: "top-end",
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        allowEnterKey: false,
        imageUrl:"Multimedia/Images/mantenimiento.jpg",
        imageWidth:"200px",
        imageAlt: "Error",
        customClass:{
            popup:"popup-class"
        }
    });

    if (alertz){
        Swal.fire({
            text: "No te olvides de recomendarnos!",
            timer: 2000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            stopKeydownPropagation: false,
            allowEnterKey: false,
            showConfirmButton: false,
            customClass:{
                popup: "popup-class2"
            }
        })
    };
})();
