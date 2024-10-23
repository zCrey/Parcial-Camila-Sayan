document.addEventListener('DOMContentLoaded', function () {
    const filasSucursales = document.querySelectorAll('#tablaSucursales tbody tr');

    filasSucursales.forEach(fila => {
        fila.addEventListener('click', function () {
            const direccion = this.getAttribute('data-direccion');
            redirigirAMapa(direccion);
        });
    });
});

function redirigirAMapa(direccion) {
    // Aquí puedes redirigir a la página de contactos y hacer que el mapa se centre en la dirección
    // Por ejemplo, si tu mapa está en la misma página, puedes hacer scroll a la sección de contactos
    const contactosSection = document.getElementById('contactos');
    contactosSection.scrollIntoView({ behavior: 'smooth' });

    // Aquí podrías agregar código adicional para centrar el mapa en la dirección
    // Si usas una API de mapas, puedes integrar esa lógica aquí.
    alert(`Redirigiendo al mapa en la dirección: ${direccion}`);
    // Puedes incluir la lógica para centrar el mapa en la dirección
}
