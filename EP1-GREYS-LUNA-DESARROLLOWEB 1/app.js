document.addEventListener('DOMContentLoaded', () => {
    fetch('productos.json')
        .then(response => response.json())
        .then(data => mostrarProductos(data))
        .catch(error => console.error('Error al cargar los productos:', error));
});

function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('col-md-4', 'col-sm-6', 'mb-4');
        productoDiv.innerHTML = `
            <div class="card product-card">
                <img src="${producto.Imagen}" class="card-img-top" alt="${producto.Nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.Nombre}</h5>
                    <p class="card-text">${producto.Descripción}</p>
                    <p class="card-text"><strong>Id:</strong> ${producto.Id}</p>
                    <p class="card-text"><strong>Precio:</strong> $${producto.Precio}</p>
                    <p class="card-text"><strong>Stock:</strong> ${producto.Stock}</p>
                    <p class="card-text"><strong>Marca:</strong> ${producto.Marca}</p>
                    <p class="card-text"><strong>Categoría:</strong> ${producto.Categoría}</p>
                    <p class="card-text"><strong>Cilindrada:</strong> ${producto.Cilindrada}</p>
                    <p class="card-text"><strong>Rendimiento:</strong> ${producto.Rendimiento}</p>
                    <p class="card-text"><strong>Disponibilidad:</strong> ${producto.Disponibilidad}</p>
                    <button class="btn-comprar">Comprar</button>
                </div>
            </div>
        `;
        contenedor.appendChild(productoDiv);
    });
}
