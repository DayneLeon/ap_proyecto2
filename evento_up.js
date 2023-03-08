function mostrar_eventos(data) {
    let body = ``;

    const eventos = document.getElementById("tarjetas");
    for (let i = 0; i < data.events.length; i++) {
        if (data.currentDate < data.events[i].date) {
            body += `<div class="card" style="width: 15rem;">
    <img src="${data.events[i].image}" class="card-img-top" alt="foto">
    <div class="card-body">
        <h5 class="card-title">${data.events[i].name}</h5>
        <p class="card-text">${data.events[i].description}</p>
    </div>
    <div class="card-body">
        <a href="#" class="card-link">Price: ${data.events[i].price}</a>
        <a href="./details.html" class="card-link boton_ver">Ver mas</a>
    </div>
</div>`;
        }
    }
    eventos.innerHTML = body;
}
mostrar_eventos(data);