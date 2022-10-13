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

//adding events to cards-miniature div
miniature.onclick = function (event) {

    //big image changes on click to mini images
    document.getElementById('max-image').src = event.target.src

    // adding class active to mini images so that we can see what image we click
    let images = document.querySelectorAll('img');
    for (let i = 1; i < images.length; i++) {
        images[i].classList.remove('active')
    }
    event.target.setAttribute('class', 'active')
}
