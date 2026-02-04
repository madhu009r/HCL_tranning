function searchMeal() {
    const mealName = document.getElementById("mealInput").value;
    const list = document.getElementById("mealList");
    list.innerHTML = "";

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(response => response.json())
        .then(data => {

            if (!data.meals) {
                list.innerHTML = "<li>No meals found</li>";
                return;
            }

            data.meals.forEach(meal => {

                // Meal name
                const mealItem = document.createElement("h2");
                mealItem.textContent = meal.strMeal;
                list.appendChild(mealItem);

                // Ingredients
                for (let i = 1; i <= 20; i++) {
                    const ingredient = meal[`strIngredient${i}`];

                    if (ingredient && ingredient.trim() !== "") {
                        const ingredientItem = document.createElement("li");
                        ingredientItem.textContent = " - " + ingredient;
                        list.appendChild(ingredientItem);
                    }
                }
            });
        })
        .catch(() => {
            list.innerHTML = "<li>Error loading meals</li>";
        });
}
