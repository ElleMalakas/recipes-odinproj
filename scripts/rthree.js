function openRthree() {
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    document.body.classList.add("modal-open");
  
    var rthreeMain = document.createElement("section");
    rthreeMain.id = "rthreeRecipe";
    var rthreeHeader = document.createElement("div");
    rthreeHeader.className = "rthreeHeader";
    var rthreeHeaderH1 = document.createElement("h1");
    rthreeHeaderH1.textContent = "北京ダッククレッシェンドラップ";
    var rthreeHeaderClose = document.createElement("span");
    rthreeHeaderClose.innerHTML = "&times";
    rthreeHeaderClose.onclick = closeRthree;
  
    rthreeHeader.appendChild(rthreeHeaderH1);
    rthreeHeader.appendChild(rthreeHeaderClose);
  
    var rthreeDesc = document.createElement("div");
    rthreeDesc.className = "rthreeDesc";
    var rthreeDescImg = document.createElement("img");
    rthreeDescImg.setAttribute(
      "src",
      "https://i.pinimg.com/originals/2f/37/f4/2f37f4feee9f8f400676778236306244.jpg"
    );
    var rthreeDescP = document.createElement("p");
    rthreeDescP.innerHTML = `Embark on a sensory odyssey with 北京ダッククレッシェンドラップ, a culinary opus that pays homage to the revered Peking duck of Chinese tradition. Taking center stage is the crispy-skinned duck, meticulously seasoned with an exquisite blend of aromatic spices and air-dried to perfection. Each slice of succulent duck unfolds as a distinct note within the delicate confines of a Mandarin pancake, orchestrating a symphony of textures — from the initial crunch of the crispy exterior to the tender richness of the meat and the soft embrace of the wrapper. Complementing this culinary composition is a medley of fresh cucumbers, green onions, and cilantro, adding vibrancy to every bite. The crowning touch, a drizzle of hoisin sauce, transforms each mouthful into a crescendo of flavors, elevating the entire dining experience to a sublime culinary symphony.

As you partake in this symphonic feast, 北京ダッククレッシェンドラップ unravels a profound narrative of Chinese gastronomy that transcends mere taste. The meticulous preparation of the duck, encompassing seasoning and air-drying, showcases a culinary finesse passed down through generations. The artful assembly of the wraps further enhances the visual spectacle, with a palette of vibrant colors on the plate creating a captivating tableau. Each wrap, a masterstroke in this culinary masterpiece, presents a unique blend of flavors and textures, inviting you to savor the deep richness of Chinese culinary heritage. The dining experience becomes a journey through time, celebrating the intricate nuances that have made Peking duck a cherished masterpiece in the vast tapestry of Chinese cuisine.
    
In every aspect, 北京ダッククレッシェンドラップ is a three-dimensional encounter — a feast for the senses, a visual delight, and a tribute to the cultural legacy that Chinese culinary artistry embodies. Allow each bite to transport you to the heart of Chinese gastronomy, where the symphony of flavors harmonizes with a visual spectacle, creating a culinary masterpiece that stands testament to the enduring allure of Peking duck.`;
  
    rthreeDesc.appendChild(rthreeDescImg);
    rthreeDesc.appendChild(rthreeDescP);
  
    var rthreeInfo = document.createElement("div");
    rthreeInfo.className = "rthreeInfo";
  
    var rthreeIngredients = document.createElement("div");
    var rthreeIngredientsH1 = document.createElement("h1");
    rthreeIngredientsH1.textContent = "Ingredients :";
  
    var rthreeIngredientsList = document.createElement("ul");
  
    var ingredients = [
        "1 Peking duck, sliced",
        "Mandarin pancakes or thin flour tortillas",
        "Hoisin sauce",
        "Sliced cucumbers, green onions, and cilantro for garnish",
    ];
  
    ingredients.forEach(function (ingredientText) {
      var ingredientTextList = document.createElement("li");
      ingredientTextList.textContent = ingredientText;
      rthreeIngredientsList.appendChild(ingredientTextList);
    });
    rthreeIngredients.appendChild(rthreeIngredientsH1);
    rthreeIngredients.appendChild(rthreeIngredientsList);
  
    var rthreeProcedure = document.createElement("div");
    var rthreeProcedureH1 = document.createElement("h1");
    rthreeProcedureH1.textContent = "Procedure :";
    var rthreeProcedureList = document.createElement("ol");
  
    var ProcedureList = [
        "Heat the Mandarin pancakes or flour tortillas according to package instructions.",
        "Spread hoisin sauce on each pancake or tortilla.",
       "Place a slice of Peking duck on the sauce and top with sliced cucumbers, green onions, and cilantro.",
       "Roll up the pancake or tortilla and secure with a toothpick.",
        "Serve immediately and enjoy the symphony of flavors.",
    ];
  
    ProcedureList.forEach(function (procedureText) {
      var procedureTextList = document.createElement("li");
      procedureTextList.textContent = procedureText;
      rthreeProcedureList.appendChild(procedureTextList);
    });
  
    rthreeProcedure.appendChild(rthreeProcedureH1);
    rthreeProcedure.appendChild(rthreeProcedureList);
  
    rthreeInfo.appendChild(rthreeIngredients);
    rthreeInfo.appendChild(rthreeProcedure);
  
    rthreeMain.appendChild(rthreeHeader);
    rthreeMain.appendChild(rthreeDesc);
    rthreeMain.appendChild(rthreeInfo);
    document.body.appendChild(rthreeMain);
  
    document.body.classList.add("modal-open");
  }
  
  function closeRthree() {
    var rthree = document.getElementById("rthreeRecipe");
    var overlay = document.querySelector(".overlay");
  
    // Remove both modal and overlay
    rthree.parentNode.removeChild(rthree);
    overlay.parentNode.removeChild(overlay);
  
    document.body.classList.remove("modal-open");
  }
  