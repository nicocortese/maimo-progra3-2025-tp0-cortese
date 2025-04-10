const main = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.get (`id`)); // price_descending
    const id = searchParams.get(`id`)

    const content = document.querySelector(".content")
    const navBar = document.querySelector("nav")
    const backBtn = document.getElementById("backHome");


    navBar.innerHTML = 
    `
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Categorías</a></li>
         <li><a href="/">Tips</a></li>
        <li><a href="/">About us</a></li>
    </ul>
    `;
    
    const response = await fetch(`https://dummyjson.com/recipe/${id}`);
    const responseData = await response.json(); // convierte el response en nuestra data

    console.log(responseData)

    content.innerHTML = 
    `   
        <h1>
            ${responseData.name}
        </h1>
        <img src="${responseData.image}" alt="${responseData.name}" />

        <h2>Ingredientes</h2>
        <ul>
        ${responseData.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
        <h2>Instrucciones</h2>
        <p>
        ${responseData.instructions.join(" ")}
        </p>
        
        <div class="food_info">
        <p class="info"><span class="info_label">Cocina: </span>${responseData.cuisine}</p>
        <p class="info"><span class="info_label">Dificultad: </span>${responseData.difficulty}</p>
        <p class="info"><span class="info_label">Tiempo de preparación: </span>${responseData.prepTimeMinutes} minutos</p>
        <p class="info"><span class="info_label">Tiempo de cocción: </span>${responseData.cookTimeMinutes} minutos</p>
        <p class="info"><span class="info_label">Cantidad de porciones: </span>${responseData.servings}</p>
        <p class="info"><span class="info_label">Calorías por porción: </span>${responseData.caloriesPerServing} kcal</p>
        <p class="info"><span class="info_label">Tipo de comida: </span>${responseData.mealType.join(", ")}</p>
        <p class="info"><span class="info_label">Valoración: </span>${responseData.rating}⭐</p>
        <p class="info"><span class="info_label">En esta receta: </span>${responseData.tags.join(", ")} </p>
        </div>
        `

    const footer = document.querySelector("footer")

    footer.innerHTML = 
    `
    <div class="redes">
    <p>Nuestras redes sociales</p>
        <div class="logos">
        <a href="#">
            <img src="assets/imgs/facebook-svgrepo.svg" alt="Logo Facebook" />
        </a>
        <a href="#">
            <img src="assets/imgs/instagram-svgrepo.svg" alt="Logo Instagram" />
        </a>
        <a href="#">
            <img src="assets/imgs/gmail-svgrepo.svg" alt="Logo Gmail" />
        </a>
        <a href="#">
            <img src="assets/imgs/youtube-svgrepo.svg" alt="Logo Youtube" />
        </a>
        <a href="#">
            <img src="assets/imgs/whatsapp-svgrepo.svg" alt="Logo WhatsApp" />
        </a>
        </div>
    </div>
        <div class="copyright">© Copyright 2025 | Todos los estudiantes reservados</div>    
    `

    backBtn.addEventListener("click", () => {
    window.location.href = "/"; 
});

}
// obtiene en el browser el id de la página


main();