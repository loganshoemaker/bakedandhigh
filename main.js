const half = "½";
const quarter = "¼";
const threeFourths = "¾";

var main = () => {
    var ingredients = Array.from(document.getElementsByClassName("ingredients-item-name"));
    ingredients.forEach(ingredient => {
        const text = ingredient.textContent.trim().toLowerCase();
        console.log(text);
        const wholeAmount = text.replace(/\D/g, "");

        if(
            Number.isInteger(parseInt(wholeAmount)) &&
            text.includes("cup") &&
            text.includes("flour")
        ){
            const update = `You may want to add up to ${parseInt(wholeAmount) * 2} tablespoons of flour!`;
            ingredient.innerHTML = `${text} : <span class="baked-and-high-wrapper">${update}</span>`;
        }

        if(
            Number.isInteger(parseInt(wholeAmount)) &&
            text.includes("cup") &&
            text.includes("sugar")
        ){
            const update = `You may want to remove up to ${parseInt(wholeAmount)} tablespoon${wholeAmount === "1" ? "" : "s"} of this sugar!`;
            ingredient.innerHTML = `${text} : <span class="baked-and-high-wrapper">${update}</span>`;
        }

        if(
            Number.isInteger(parseInt(wholeAmount)) &&
            text.includes("yeast")
        ){
            const update = `You may want to start with only 75% of the recommended amount of yeast!`;
            ingredient.innerHTML = `${text} : <span class="baked-and-high-wrapper">${update}</span>`;
        }

        if(
            text.includes("baking powder") ||
            text.includes("baking soda") &&
            (
                text.includes("teaspoon") ||
                text.includes("tablespoon") ||
                text.indcludes("teaspoons") ||
                text.includes("tablespoons") ||
                text.includes("tsp") ||
                text.includes("tbsp")
            )
        )
        {
            const update = `You may want to use half the amount of this chemical leavener!`;
            console.log(update)
            ingredient.innerHTML = `${text} : <span class="baked-and-high-wrapper">${update}</span>`;
        }
    });
}

setTimeout(function(){ main()}, 1000);
