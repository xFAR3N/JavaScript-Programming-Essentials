const breakfastMenu = ['Pancakes - 12$', 'Oarmeal - 8$', 'Frittata - 4$'];
const mainCourseMenu = ['Steak - 45$', 'Pasta - 17$', 'Salmon - 25$'];
const dessertMenu = ['Cake - 7$', 'Ice Cream - 2$', 'Pudding - 5$', 'Fruit Salad - 11$'];

const breakfastMenuItemsHTML = breakfastMenu.map( (item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;


let mainCourseItem = '';

mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessrtItem = '';

for(let i = 0; i < dessertMenu.length; i++){
    dessrtItem += `<p> Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessrtItem;