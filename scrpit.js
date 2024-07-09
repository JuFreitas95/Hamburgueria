
const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const sumAll = document.querySelector(".sum-all")
const filterAll = document.querySelector(".filter-all")




function showAll(productsArray) {

  let Myli = ''


  productsArray.forEach((product) => {


    Myli += `
      <li>
      <img src="${product.src}">
      <p>${product.name}</p>
      <p class="item-price">R$ ${product.price}</p>
    </li>
      
      `

  })

  list.innerHTML = Myli


}





function mapAllItems() {

  const newPrices = menuOptions.map((product) => ({

    ...product,
    price: product.price * 0.9,



  }))

  showAll(newPrices)


}


function sumAllItems() {

  const valorTotal = menuOptions.reduce((acumulador, valorAtual) => acumulador + valorAtual.price, 0)


  list.innerHTML = `
      <li>
   
        <p> O valor total dos itens é R$ ${valorTotal}</p>
    </li>
      
      `



}

function filterAllItems() {

const filtrar = menuOptions.filter((product) => product.vegan)

showAll(filtrar)
}




buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)










