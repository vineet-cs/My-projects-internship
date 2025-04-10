document.addEventListener('DOMContentLoaded', function () {
    const recipeForm = document.getElementById('recipeForm');
    const recipesList = document.getElementById('recipesList');
    const searchInput = document.getElementById('search');

    function loadRecipes() {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        displayRecipes(recipes);
    }

    function saveRecipe(recipe) {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        loadRecipes();
    }

    function displayRecipes(recipes) {
        recipesList.innerHTML = '';
        recipes.forEach((recipe, index) => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
            `;
            recipeCard.addEventListener('click', () => viewRecipeDetails(recipe));
            recipesList.appendChild(recipeCard);
        });
    }

    function viewRecipeDetails(recipe) {
        alert(`Recipe: ${recipe.name}\n\nIngredients:\n${recipe.ingredients}\n\nSteps:\n${recipe.steps}`);
    }

    recipeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const ingredients = document.getElementById('ingredients').value.trim();
        const steps = document.getElementById('steps').value.trim();
        const imageFile = document.getElementById('image').files[0];

        if (!name || !ingredients || !steps || !imageFile) {
            alert('Please fill all fields and upload an image.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = function () {
            const recipe = {
                name,
                ingredients,
                steps,
                image: reader.result
            };
            saveRecipe(recipe);
            recipeForm.reset();
        };
        reader.readAsDataURL(imageFile);
    });

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.ingredients.toLowerCase().includes(query)
        );
        displayRecipes(filteredRecipes);
    });

    loadRecipes();
});
