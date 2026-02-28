const searchInput = document.getElementById('search-input')
const searchResult = document.getElementById('search-result')

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const categories = data.categories
    searchInput.addEventListener("input", (e) => {
      const searchQuery = e.target.value.trim().toLowerCase()
      searchResult.innerHTML = ""
      
      if (searchQuery === "") return
      
      categories.forEach(category => {
        category.menus.forEach(menu => {
          if (menu.name.toLowerCase().includes(searchQuery)) {
            const li = document.createElement('li')
            const ingredients = menu.ingredients || []
            li.innerHTML = `
              <span class="menu-name">${menu.name}</span>
              ${ingredients.length > 0 ? `
                <ul class="menu-ingredients">
                  ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
              ` : ''}
            `
            searchResult.appendChild(li)
          }
        })
      })
    })
  })
  .catch(error => console.error('Error loading data:', error))