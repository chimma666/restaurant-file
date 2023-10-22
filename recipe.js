function hoverRecipeCard(card) {
    card.style.transform = 'scale(1.05)';
}

function unhoverRecipeCard(card) {
    card.style.transform = 'scale(1)';
}

function showRecipe(recipeName) {
    const recipeText = document.getElementById('recipe-text');
    let description = '';

    switch (recipeName) {
        case 'Pizza':
            description = `
                1. Prepare pizza dough and spread it evenly.
                2. Add pizza sauce, cheese, vegetables, and meat as toppings.
                3. Bake the pizza in a preheated oven at 475°F (245°C) for 12-15 minutes.
                4. Remove from the oven when the crust is golden and the cheese is melted.
                5. Slice and enjoy your delicious homemade pizza!
            `;
            break;
        case 'Burger':
            description = `
                1. Grill or fry a beef or veggie patty until cooked to your preference.
                2. Toast the burger buns lightly on the grill or in a toaster.
                3. Assemble the burger with lettuce, tomato, cheese, pickles, and your favorite sauce.
                4. Serve the burger with a side of fries or a fresh side salad.
                5. Enjoy your tasty burger creation!
            `;
            break;
        case 'Pasta':
            description = `
                1. Boil water in a large pot and add salt.
                2. Cook pasta until al dente according to package instructions.
                3. In a pan, heat olive oil and add minced garlic. Sauté until golden.
                4. Add cooked pasta, cherry tomatoes, basil, and salt to the pan.
                5. Toss everything together and serve hot.
                6. Garnish with grated Parmesan cheese, if desired.
            `;
            break;
        case 'Cake':
            description = `
                1. Preheat your oven and prepare a cake pan by greasing and flouring it.
                2. In a bowl, mix flour, sugar, baking powder, and salt until well combined.
                3. In another bowl, whisk eggs, milk, and vanilla extract until smooth.
                4. Combine wet and dry ingredients, mixing until there are no lumps.
                5. Pour the batter into the prepared cake pan.
                6. Bake in the oven at the specified temperature until a toothpick inserted comes out clean.
                7. Let the cake cool completely before frosting with your favorite frosting.
            `;
            break;
        case 'Pudding':
            description = `
                1. In a saucepan, mix sugar, cornstarch, and salt.
                2. Gradually whisk in milk and cook over medium heat until the mixture thickens.
                3. Remove from heat and stir in butter and vanilla extract until smooth.
                4. Pour the pudding into serving dishes and chill in the fridge until set.
                5. Before serving, top with whipped cream and your favorite garnishes.
            `;
            break;
        default:
            description = "Recipe not found.";
    }
    

    // Display recipe description with fade-in effect
    recipeText.style.opacity = 0;
    recipeText.innerText = description;
    let opacity = 0;
    const interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.1;
            recipeText.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
}
