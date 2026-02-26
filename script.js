const searchInput= document.getElementById('search-input')
const searchResult= document.getElementById('search-result')
const menuNames = document.querySelectorAll('.menu-name');
menuNames.forEach(menuName => {
  menuName.addEventListener('click', () => {
    const ingredients = menuName.nextElementSibling;
    ingredients.style.display = ingredients.style.display === 'block' ? 'none' : 'block';
  });
});

fetch('data.json')
 .then(response => response.json())
 .then(data =>{
   const categories = data.categories
   searchInput.addEventListener("input",(e)=> {
    const searchQuery =e.target.value.trim().toLowerCase()
    searchResult.innerHTML=""
    
     categories.forEach(category =>{
     category.menus.forEach(menu=>{
if (menu.name.toLowerCase().includes(searchQuery)) {
     const li= document.createElement('li')
     li.innerHTML = `
  <span class="menu-name">${menu.name}</span><br>
  <span class="menu-ingredients">${menu.ingredients.map(ingredient=> `<li>${ingredient}</li>`).join('')}</span><br>
`;
     searchResult.appendChild(li)
     }
   })
})
     })
 })
