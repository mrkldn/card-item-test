//getting all needed elements
const card = document.querySelector('.card-image')
const miniature = document.querySelector('.cards-miniature')
const info = document.querySelector('.info')

//fetching data from server
const fetchData = () => {
    fetch('https://store.tildacdn.com/api/tgetproduct/')
        .then(res => res.json())
        .then((data) => {
            const pictures = JSON.parse(data.images)

            //inserting data into html
            card.innerHTML =
                `
                <img id="max-image" src=${pictures[0].img} alt=${pictures[0].img}/>
                `

            miniature.innerHTML =
                pictures.map(pic =>
                    `
             <img id="min-image" src=${pic.img} alt=${pic.img}/>
            `
                )

            info.insertAdjacentHTML("beforeend",
                ` 
                <h2 class="title">${data.title}</h2>
                <p class="description">${data.descr}</p>
                <span class="price">$${data.price}</span>
                <span class="old-price">$${data.priceold}</span>
                <p class="quantity">${data.quantity} pcs available</p>
                `
            )
        })
        .catch(err => console.log(err))
}

//call function
fetchData();


