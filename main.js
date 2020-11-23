const half = "½";
const quarter = "¼";
const threeFourths = "¾";

var main = () => {
    var ingredients = Array.from(document.getElementsByClassName("ingredients-item-name"));
    ingredients.forEach(ingredient => {
        const text = ingredient.textContent.trim();
        console.log(text);
        console.log("contains word cup: ", text.includes("cup"));
        console.log("contains 1/2: ", text.includes("½"));
        console.log(Array.from(text));
        
        Array.from(text).forEach(character => {
            console.log(character, character === half);
            console.log(character, character === quarter);
            console.log(character, character === threeFourths);
        });
    });
}

setTimeout(function(){ main()}, 1000);
