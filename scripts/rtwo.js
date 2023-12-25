function openRtwo() {
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);
  document.body.classList.add("modal-open");

  var rtwoMain = document.createElement("section");
  rtwoMain.id = "rtwoRecipe";
  var rtwoHeader = document.createElement("div");
  rtwoHeader.className = "rtwoHeader";
  var rtwoHeaderH1 = document.createElement("h1");
  rtwoHeaderH1.textContent = "ブルゴギクレッシェンド炒め物";
  var rtwoHeaderClose = document.createElement("span");
  rtwoHeaderClose.innerHTML = "&times";
  rtwoHeaderClose.onclick = closeRtwo;

  rtwoHeader.appendChild(rtwoHeaderH1);
  rtwoHeader.appendChild(rtwoHeaderClose);

  var rtwoDesc = document.createElement("div");
  rtwoDesc.className = "rtwoDesc";
  var rtwoDescImg = document.createElement("img");
  rtwoDescImg.setAttribute(
    "src",
    "https://bing.com/th?id=OSK.4c86e58ebb3186bb6c6ca77ee2dcfd8d"
  );
  var rtwoDescP = document.createElement("p");
  rtwoDescP.innerHTML = `Embark on a mesmerizing culinary journey with ブルゴギクレッシェンド炒め物, a captivating stir-fry that encapsulates the lively spirit of Korean comfort cuisine. At the heart of this culinary symphony is the thinly sliced beef, a culinary protagonist meticulously marinated in a melodic blend of soy sauce, brown sugar, sesame oil, and minced garlic. As the beef gracefully sizzles in the hot embrace of the pan, it orchestrates a sizzling performance, filling the air with the irresistible fragrance of savory sweetness. This aromatic dance of flavors is the prelude to a harmonious union, where the beef converges with a vibrant ensemble of bell peppers, onions, and mushrooms, creating a crescendo of textures that delivers a culinary experience both invigorating and comforting.

Presented artfully atop a bed of steamed rice, each mouthful becomes a melodious journey through the spirited notes of Korean gastronomy. The tender beef, having absorbed the robust bulgogi marinade, offers a symphony of flavors that resonates on the palate. Each bite invites you to savor the dynamic and nuanced layers of Korean culinary artistry, where every element, from the succulent beef to the crisp vegetables, plays a vital role in creating a harmonious dance of taste and texture.
    
ブルゴギクレッシェンド炒め物 transcends the realm of a mere meal; it is a sensory celebration, an ode to the rich and spirited essence of Korean comfort cuisine that leaves an indelible mark on your gastronomic experience. Allow each bite to transport you to the bustling streets of Seoul, where the aroma of sizzling bulgogi beckons and the vibrant flavors of Korean comfort food come to life in a symphony that dances on your taste buds.`;

  rtwoDesc.appendChild(rtwoDescImg);
  rtwoDesc.appendChild(rtwoDescP);

  var rtwoInfo = document.createElement("div");
  rtwoInfo.className = "rtwoInfo";

  var rtwoIngredients = document.createElement("div");
  var rtwoIngredientsH1 = document.createElement("h1");
  rtwoIngredientsH1.textContent = "Ingredients :";

  var rtwoIngredientsList = document.createElement("ul");

  var ingredients = [
    "1 lb thinly sliced beef (ribeye or sirloin)",
    "1/2 cup soy sauce",
    "1/4 cup brown sugar",
    "2 tablespoons sesame oil",
    "3 cloves garlic, minced",
    "Assorted bell peppers, onions, and mushrooms for stir-frying",
    "Steamed rice for serving",
  ];

  ingredients.forEach(function (ingredientText) {
    var ingredientTextList = document.createElement("li");
    ingredientTextList.textContent = ingredientText;
    rtwoIngredientsList.appendChild(ingredientTextList);
  });
  rtwoIngredients.appendChild(rtwoIngredientsH1);
  rtwoIngredients.appendChild(rtwoIngredientsList);

  var rtwoProcedure = document.createElement("div");
  var rtwoProcedureH1 = document.createElement("h1");
  rtwoProcedureH1.textContent = "Procedure :";
  var rtwoProcedureList = document.createElement("ol");

  var ProcedureList = [
    "Combine soy sauce, brown sugar, sesame oil, and minced garlic to create the bulgogi marinade.",
    "Marinate thinly sliced beef in the mixture for at least 1 hour.",
    "Stir-fry marinated beef in a hot pan until cooked.",
    "Add assorted vegetables and stir-fry until they reach your desired tenderness.",
    "Serve over steamed rice.",
  ];

  ProcedureList.forEach(function (procedureText) {
    var procedureTextList = document.createElement("li");
    procedureTextList.textContent = procedureText;
    rtwoProcedureList.appendChild(procedureTextList);
  });

  rtwoProcedure.appendChild(rtwoProcedureH1);
  rtwoProcedure.appendChild(rtwoProcedureList);

  rtwoInfo.appendChild(rtwoIngredients);
  rtwoInfo.appendChild(rtwoProcedure);

  rtwoMain.appendChild(rtwoHeader);
  rtwoMain.appendChild(rtwoDesc);
  rtwoMain.appendChild(rtwoInfo);
  document.body.appendChild(rtwoMain);

  document.body.classList.add("modal-open");
}

function closeRtwo() {
  var rtwo = document.getElementById("rtwoRecipe");
  var overlay = document.querySelector(".overlay");

  // Remove both modal and overlay
  rtwo.parentNode.removeChild(rtwo);
  overlay.parentNode.removeChild(overlay);

  document.body.classList.remove("modal-open");
}
