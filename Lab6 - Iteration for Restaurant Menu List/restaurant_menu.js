const breakfastMenu = ['Pancakes', 'Oarmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map( (item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenu').innerHTML = breakfastMenuItemsHTML;
