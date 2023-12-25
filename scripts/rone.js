function openRone() {
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);
  document.body.classList.add("modal-open");

  var roneMain = document.createElement("section");
  roneMain.id = "roneRecipe";
  var roneHeader = document.createElement("div");
  roneHeader.className = "roneHeader";
  var roneHeaderH1 = document.createElement("h1");
  roneHeaderH1.textContent = "照り焼きグレーズドサーモンの交響曲";
  var roneHeaderClose = document.createElement("span");
  roneHeaderClose.innerHTML = "&times";
  roneHeaderClose.onclick = closeRone;

  roneHeader.appendChild(roneHeaderH1);
  roneHeader.appendChild(roneHeaderClose);

  var roneDesc = document.createElement("div");
  roneDesc.className = "roneDesc";
  var roneDescImg = document.createElement("img");
  roneDescImg.setAttribute(
    "src",
    "https://belleofthekitchen.com/wp-content/uploads/2017/03/teriyaki-glazed-salmon-square.jpg"
  );
  var roneDescP = document.createElement("p");
  roneDescP.innerHTML = `Embark on a tantalizing culinary journey with "照り焼きグレーズドサーモンの交響曲," a symphony of Japanese flavors that unfolds with each carefully orchestrated bite. The star of this culinary performance is the premium salmon, chosen for its luscious texture and ability to absorb the intricate medley of soy sauce, mirin, brown sugar, and grated ginger in the marinade. As the fillets gracefully meet the grill, a sonorous sizzle reverberates, setting the stage for the teriyaki glaze to work its magic—a glossy crescendo that bathes the salmon in a delightful harmony of sweetness and umami.

Presented on the plate, the glazed salmon is a visual masterpiece, adorned with sesame seeds and green onions as if they were the musical notes of a culinary composition. Each element contributes to the symphony—the texture, the colors, and, most importantly, the taste. The first bite is an overture, introducing you to the rich depth of Japanese culinary finesse. As you savor each subsequent morsel, you become part of the culinary audience, appreciating the nuanced layers of flavor that unfold, creating an experience that resonates long after the last note.
    
This dish, "照り焼きグレーズドサーモンの交響曲," is an invitation to indulge in the mastery of Japanese gastronomy—a gastronomic symphony that elevates the simple act of enjoying a meal to an art form. From the initial marinade to the final flourish of green onions, every element plays a role in crafting an unforgettable composition for the senses. It's not just a dish; it's a culinary opus that beckons you to savor the intricate notes and subtleties of Japanese culinary excellence.`;

  roneDesc.appendChild(roneDescImg);
  roneDesc.appendChild(roneDescP);

  var roneInfo = document.createElement("div");
  roneInfo.className = "roneInfo";

  var roneIngredients = document.createElement("div");
  var roneIngredientsH1 = document.createElement("h1");
  roneIngredientsH1.textContent = "Ingredients :";

  var roneIngredientsList = document.createElement("ul");

  var ingredients = [
    "4 salmon fillets",
    "1/2 cup soy sauce",
    "1/4 cup mirin",
    "2 tablespoons brown sugar",
    "1 tablespoon grated ginger",
    "Sesame seeds and chopped green onions for garnish",
  ];

  ingredients.forEach(function (ingredientText) {
    var ingredientTextList = document.createElement("li");
    ingredientTextList.textContent = ingredientText;
    roneIngredientsList.appendChild(ingredientTextList);
  });
  roneIngredients.appendChild(roneIngredientsH1);
  roneIngredients.appendChild(roneIngredientsList);

  var roneProcedure = document.createElement("div");
  var roneProcedureH1 = document.createElement("h1");
  roneProcedureH1.textContent = "Procedure :";
  var roneProcedureList = document.createElement("ol");

  var ProcedureList = [
    "In a bowl, mix soy sauce, mirin, brown sugar, and grated ginger to create the teriyaki marinade.",
    "Marinate salmon fillets in the mixture for at least 30 minutes.",
    "Grill the salmon until cooked to your liking, brushing with additional teriyaki glaze during grilling.",
    "Garnish with sesame seeds and chopped green onions before serving.",
  ];

  ProcedureList.forEach(function (procedureText) {
    var procedureTextList = document.createElement("li");
    procedureTextList.textContent = procedureText;
    roneProcedureList.appendChild(procedureTextList);
  });

  roneProcedure.appendChild(roneProcedureH1);
  roneProcedure.appendChild(roneProcedureList);

  roneInfo.appendChild(roneIngredients);
  roneInfo.appendChild(roneProcedure);

  roneMain.appendChild(roneHeader);
  roneMain.appendChild(roneDesc);
  roneMain.appendChild(roneInfo);
  document.body.appendChild(roneMain);

  document.body.classList.add("modal-open");
}

function closeRone() {
  var rone = document.getElementById("roneRecipe");
  var overlay = document.querySelector(".overlay");

  // Remove both modal and overlay
  rone.parentNode.removeChild(rone);
  overlay.parentNode.removeChild(overlay);

  document.body.classList.remove("modal-open");
}
