var menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse: function(courseName, dishName, dishPrice) {
        var dish = {
            dName: dishName,
            dPrice: dishPrice
        }
        if(courseName === "appetizers"){
            menu.courses.appetizers.push(dish);
        }
        else if(courseName === "mains"){
            menu.courses.mains.push(dish);
        }
        else if(courseName === "desserts"){
            menu.courses.desserts.push(dish);
        }
    },

    getRandomDishFromCourse: function(courseName) {
        var dishes = menu.courses[courseName];
        var randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal: function() {
        var app = menu.getRandomDishFromCourse("appetizers");
        var main = menu.getRandomDishFromCourse("mains");
        var des = menu.getRandomDishFromCourse("desserts");

        var totalPrice = (app.dPrice + main.dPrice + des.dPrice);
        return `Here is your 3 course meal, enjoy!

        Starter:    ${app.dName}   
        Entree:     ${main.dName}   
        Dessert:    ${des.dName}
        
            Total Price: $${totalPrice}.00`; 

    }
};

//apps
menu.addDishToCourse("appetizers", "Jalepeno poppers", 5);
menu.addDishToCourse("appetizers", "Bread", 3);
menu.addDishToCourse("appetizers", "Mozzarella sticks", 6);

//mains
menu.addDishToCourse("mains", "Spaghetti & meatballs", 16);
menu.addDishToCourse("mains", "Salmon & veggies", 21);
menu.addDishToCourse("mains", "Pizza", 18);

//desserts
menu.addDishToCourse("desserts", "Chocolate cake", 10);
menu.addDishToCourse("desserts", "Red velvet cake", 10);
menu.addDishToCourse("desserts", "Cinnamon buns", 8);

var finalMenu = menu.generateRandomMeal();

console.log(finalMenu);
