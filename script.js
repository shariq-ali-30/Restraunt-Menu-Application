const menu = [
    { title: "Pancakes", description: "Soft and fluffy pancakes served with golden honey. A perfect sweet breakfast to start your day with a warm and delicious taste.", category: "breakfast", image: "images/pancakes.jpg", price: 180, rating: 4.8, preparationTime: "10 mins" },
    { title: "French Toast", description: "Fresh bread dipped in a rich egg mixture, lightly toasted until golden, and finished with a touch of cinnamon and honey.", category: "breakfast", image: "images/french-toast.jpg", price: 150, rating: 4.7, preparationTime: "10 mins" },
    { title: "Club Sandwich", description: "Layers of fresh chicken, crispy lettuce, tomatoes, and creamy sauce stacked between toasted bread for a satisfying meal.", category: "breakfast", image: "images/club-sandwich.jpg", price: 200, rating: 4.8, preparationTime: "12 mins" },
    { title: "Halwa Puri", description: "Freshly fried crispy puri served with sweet halwa and flavorful chickpea curry, creating a traditional breakfast everyone enjoys.", category: "breakfast", image: "images/halwa-puri.jpg", price: 150, rating: 4.9, preparationTime: "15 mins" },
    { title: "Omelette", description: "Light and fluffy eggs cooked with herbs and mild spices. A simple breakfast that's fresh, filling, and full of flavor.", category: "breakfast", image: "images/omelette.jpg", price: 120, rating: 4.6, preparationTime: "8 mins" },
    { title: "Chicken Shawarma", description: "Soft pita bread filled with juicy chicken, fresh vegetables, creamy garlic sauce, and flavorful seasonings. A popular wrap that's both filling and delicious.", category: "breakfast", image: "images/chicken-shawarma.jpg", price: 200, rating: 4.8, preparationTime: "12 mins" },

    { title: "Chicken Biryani", description: "Fragrant basmati rice cooked with tender chicken and aromatic spices, served fresh for a rich and satisfying meal.", category: "lunch", image: "images/chicken-biryani.jpg", price: 250, rating: 4.8, preparationTime: "15 mins" },
    { title: "Chicken Karahi", description: "Fresh chicken cooked with tomatoes, ginger, garlic, and traditional spices, creating a bold and flavorful Pakistani favorite.", category: "lunch", image: "images/chicken-karahi.jpg", price: 280, rating: 4.9, preparationTime: "20 mins" },
    { title: "Beef Pulao", description: "Tender beef cooked with aromatic rice and mild spices, offering a balanced flavor that is both comforting and delicious.", category: "lunch", image: "images/beef-pulao.png", price: 230, rating: 4.7, preparationTime: "18 mins" },
    { title: "Chicken Qorma", description: "Juicy chicken simmered in a creamy yogurt-based gravy with rich spices, creating a smooth and flavorful curry.", category: "lunch", image: "images/chicken-qorma.jpg", price: 260, rating: 4.8, preparationTime: "18 mins" },
    { title: "Daal Chawal", description: "Soft steamed rice served with seasoned lentils, topped with a flavorful tempering for a simple yet comforting meal.", category: "lunch", image: "images/daal-chawal.jpg", price: 140, rating: 4.5, preparationTime: "12 mins" },
    { title: "Chicken White Karahi", description: "Tender chicken cooked in a rich creamy gravy with garlic, yogurt, and mild spices. A smooth and flavorful dish perfect for any meal.", category: "lunch", image: "images/chicken-white-karahi.jpg", price: 290, rating: 4.9, preparationTime: "20 mins" },

    { title: "Chicken Handi", description: "Tender chicken cooked in a rich creamy gravy with mild spices, delivering a smooth texture and delicious homemade flavor.", category: "dinner", image: "images/chicken-handi.jpg", price: 290, rating: 4.9, preparationTime: "20 mins" },
    { title: "Mutton Karahi", description: "Premium mutton slow-cooked with fresh tomatoes, ginger, and aromatic spices for a rich and unforgettable taste.", category: "dinner", image: "images/mutton-karahi.jpg", price: 420, rating: 4.9, preparationTime: "25 mins" },
    { title: "Chicken Tikka", description: "Marinated chicken grilled over high heat until smoky and juicy, served with fresh salad and mint sauce.", category: "dinner", image: "images/chicken-tikka.jpg", price: 350, rating: 4.8, preparationTime: "18 mins" },
    { title: "Seekh Kebab", description: "Juicy minced meat blended with herbs and spices, grilled on skewers until perfectly tender and flavorful.", category: "dinner", image: "images/seekh-kebab.jpg", price: 300, rating: 4.8, preparationTime: "15 mins" },
    { title: "Nihari", description: "Slow-cooked beef prepared with rich spices until incredibly tender, offering a deep and authentic traditional flavor.", category: "dinner", image: "images/nihari.jpg", price: 300, rating: 5.0, preparationTime: "20 mins" },
    { title: "Chapli Kebab", description: "Spiced minced meat patties cooked until crispy on the outside and juicy inside, served with fresh herbs.", category: "dinner", image: "images/chapli-kebab.jpg", price: 200, rating: 4.8, preparationTime: "15 mins" },

    { title: "Chocolate Cake", description: "Rich chocolate sponge layered with smooth chocolate cream, making every bite soft, moist, and irresistibly delicious.", category: "dessert", image: "images/chocolate-cake.jpg", price: 1000, rating: 4.9, preparationTime: "5 mins" },
    { title: "Cheesecake", description: "Creamy cheesecake with a buttery biscuit crust, offering a smooth texture and perfectly balanced sweetness.", category: "dessert", image: "images/cheesecake.jpg", price: 220, rating: 4.9, preparationTime: "5 mins" },
    { title: "Gulab Jamun", description: "Soft milk dumplings soaked in warm sugar syrup, creating a classic dessert loved for its rich sweetness.", category: "dessert", image: "images/gulab-jamun.jpg", price: 100, rating: 4.8, preparationTime: "5 mins" },
    { title: "Ras Malai", description: "Soft cheese patties served in chilled creamy milk flavored with cardamom and topped with crushed nuts.", category: "dessert", image: "images/ras-malai.jpg", price: 120, rating: 4.9, preparationTime: "5 mins" },
    { title: "Ice Cream", description: "Smooth and creamy vanilla ice cream served perfectly chilled, making it a refreshing treat for any time.", category: "dessert", image: "images/ice-cream.jpg", price: 130, rating: 4.8, preparationTime: "3 mins" },
    { title: "Kheer", description: "Creamy rice pudding slowly cooked with milk, sugar, and crunchy nuts for a traditional dessert with a rich taste.", category: "dessert", image: "images/kheer.jpeg", price: 110, rating: 4.7, preparationTime: "5 mins" },

    { title: "Zinger Burger", description: "Crispy fried chicken fillet with fresh lettuce, cheese, and creamy sauce inside a soft toasted bun.", category: "snack", image: "images/zinger-burger.jpg", price: 280, rating: 4.9, preparationTime: "15 mins" },
    { title: "Chicken Pizza", description: "Freshly baked pizza topped with tender chicken, melted cheese, and flavorful sauce on a crispy crust.", category: "snack", image: "images/chicken-pizza.jpg", price: 450, rating: 4.9, preparationTime: "20 mins" },
    { title: "French Fries", description: "Golden crispy potato fries lightly seasoned and served hot with your favorite dipping sauce.", category: "snack", image: "images/french-fries.jpg", price: 120, rating: 4.7, preparationTime: "8 mins" },
    { title: "Chicken Roll", description: "Soft flatbread wrapped around juicy chicken, fresh vegetables, and creamy sauce for a quick and tasty snack.", category: "snack", image: "images/chicken-roll.jpeg", price: 170, rating: 4.8, preparationTime: "10 mins" },
    { title: "Samosa", description: "Crispy pastry filled with flavorful potatoes and spices, fried until golden and served fresh with chutney.", category: "snack", image: "images/samosa.jpg", price: 50, rating: 4.7, preparationTime: "5 mins" },
    { title: "Chicken Nuggets", description: "Crispy golden chicken nuggets served hot with your favorite dipping sauce. A crunchy and satisfying snack loved by all ages.", category: "snack", image: "images/chicken-nuggets.jpg", price: 180, rating: 4.8, preparationTime: "10 mins" },

    { title: "Mango Shake", description: "Fresh ripe mangoes blended with chilled milk into a smooth, creamy drink that's naturally sweet and refreshing.", category: "drink", image: "images/mango-shake.jpg", price: 150, rating: 4.9, preparationTime: "5 mins" },
    { title: "Lassi", description: "Traditional yogurt drink blended until smooth with just the right amount of sweetness for a cool and refreshing taste.", category: "drink", image: "images/lassi.jpg", price: 100, rating: 4.8, preparationTime: "4 mins" },
    { title: "Cold Coffee", description: "Freshly brewed coffee blended with milk and ice, creating a creamy and refreshing chilled beverage.", category: "drink", image: "images/cold-coffee.jpg", price: 180, rating: 4.8, preparationTime: "5 mins" },
    { title: "Fresh Orange Juice", description: "Freshly squeezed oranges served chilled with no artificial flavors, delivering a naturally refreshing citrus taste.", category: "drink", image: "images/fresh-orange-juice.jpg", price: 140, rating: 4.7, preparationTime: "5 mins" },
    { title: "Mint Lemonade", description: "Fresh lemon juice blended with mint leaves and ice, creating a cool and refreshing drink for any season.", category: "drink", image: "images/mint-lemonade.jpg", price: 120, rating: 4.8, preparationTime: "4 mins" },
    { title: "Cold Drink", description: "A chilled and refreshing soft drink served ice cold to perfectly complement your favorite meal. A cool and fizzy choice for every occasion.", category: "drink", image: "images/cold-drink.jpg", price: 90, rating: 4.8, preparationTime: "2 mins" }
]

let cardsContainer = document.querySelector(".cards-section")
let filterBtnsParent = document.querySelector(".filter-btns")
let searchInput = document.querySelector(".search-bar input")
let crossIcon = document.querySelector(".fa-circle-xmark")
let emptyMessage = document.querySelector(".empty-message")

function displayItems(items) {
    cardsContainer.innerHTML = ""
    items.forEach(item => {

        let card = document.createElement("div")

        card.classList.add("card")
        card.innerHTML = `<div class="image">
                    <img src="${item.image}"
                        alt="image">
                    <div class="price">
                        Rs. ${item.price}
                    </div>
                </div>
                <div class="details">
                    <div class="top-details">
                        <span class="category">${item.category}</span>
                        <span class="rating">
                            <i class="fa-solid fa-star"></i>
                            <p>${item.rating}</p>
                        </span>
                    </div>
                    <h3 class="title">${item.title}</h3>
                    <p class="description">${item.description}</p>
                    <div class="bottom-details">
                        <div class="hr"></div>
                        <div class="bottom-content">
                            <span class="time">Prep time: ${item.preparationTime}</span>
                            <span class="order-btn">Order now <i class="fa-solid fa-arrow-right"></i></i></span>
                        </div>
                    </div>
                </div>`

        cardsContainer.appendChild(card)
    })
}

displayItems(menu)

function filterItems(selectedFilterBtn) {

    let filterBtns = filterBtnsParent.children
    for (let i = 0; i < filterBtns.length; i++) {
        if (filterBtns[i].classList.contains("active")) {
            filterBtns[i].classList.remove("active")
            break
        }
    }

    selectedFilterBtn.classList.add("active")

    let selectedCategory = selectedFilterBtn.innerText.toLowerCase()

    if (selectedCategory == "all items") {
        displayItems(menu)
        return
    }

    let filterdItems = menu.filter(item => selectedCategory.includes(item.category))
    displayItems(filterdItems)
    searchInput.value = ""
    crossIcon.classList.remove("active")
}

function searchHandler() {

    if (cardsContainer.children.length == 0) {
        emptyMessage.classList.add("active")
    } else {
        emptyMessage.classList.remove("active")
    }

    if (searchInput.value.length > 0) {
        crossIcon.classList.add("active")
    } else {
        crossIcon.classList.remove("active")
        for (let i = 0; i < filterBtnsParent.children.length; i++) {
            filterBtnsParent.children[i].classList.remove("active")
        }
        filterBtnsParent.children[0].classList.add("active")
    }

    filterdItems = menu.filter(item => item.title.toLocaleLowerCase().includes(searchInput.value.toLowerCase().trim()))
    displayItems(filterdItems)
}

searchInput.addEventListener("input", searchHandler);
crossIcon.addEventListener("click", () => {
    searchInput.value = ""
    crossIcon.classList.remove("active")
    for (let i = 0; i < filterBtnsParent.children.length; i++) {
        filterBtnsParent.children[i].classList.remove("active")
    }
    filterBtnsParent.children[0].classList.add("active")
    displayItems(menu)
});
filterBtnsParent.children[0].addEventListener("click", () => filterItems(filterBtnsParent.children[0]))
filterBtnsParent.children[1].addEventListener("click", () => filterItems(filterBtnsParent.children[1]))
filterBtnsParent.children[2].addEventListener("click", () => filterItems(filterBtnsParent.children[2]))
filterBtnsParent.children[3].addEventListener("click", () => filterItems(filterBtnsParent.children[3]))
filterBtnsParent.children[4].addEventListener("click", () => filterItems(filterBtnsParent.children[4]))
filterBtnsParent.children[5].addEventListener("click", () => filterItems(filterBtnsParent.children[5]))
filterBtnsParent.children[6].addEventListener("click", () => filterItems(filterBtnsParent.children[6]))