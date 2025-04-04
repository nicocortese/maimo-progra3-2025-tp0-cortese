const main = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.get (`id`)); // price_descending
    const id = searchParams.get(`id`)

    const content = document.querySelector(".content")

    const response = await fetch(`https://dummyjson.com/recipe/${id}`);
    const responseData = await response.json(); // convierte el response en nuestra data

    console.log(responseData)

    content.innerHTML = 
    `
        <h1>
            ${responseData.name}
        </h1>
        <img src="${responseData.image}" alt="${responseData.name}" />
        <ul>
        ${responseData.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        
        
        `

}
// obtiene en el browser el id de la página


main();