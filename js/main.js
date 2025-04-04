const main = async () => {
    const API_URL = `https://dummyjson.com/recipes?limit=20&skip=0`
    const response = await fetch (API_URL);
    const recipesData = await response.json();
    console.log(recipesData) // con esto ya está la informacion en el js

    const recetasGrid = document.querySelector(`.recetas_grid`) // selecciono el div que quiero
    
    recipesData.recipes.forEach(recipe => { // le acumulo una receta al final en el html y el ? es para poner todos los parametros que quiera
        recetasGrid.innerHTML +=  ` 
        <div class="receta">
        <img src="${recipe.image}" alt="${recipe.name}" /> 
        <h3>
            ${recipe.name}
        </h3>
        <a href="/recipe.html?id=${recipe.id}">Ver receta</a> 
    </div>
        `;
    });
};

main();