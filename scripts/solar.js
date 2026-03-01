const main = document.getElementById("container");
const search = document.getElementById("search");
const btn = document.getElementById("btn-Input")

function planets(){
    const inputSearch = search.value;
    const BASE_URL = `https://images-api.nasa.gov/search?q=${inputSearch}&media_type=image`;

    fetch(BASE_URL)
        .then(response => response.json())
        .then(data => {
            main.innerHTML = "";
            data.collection.items.forEach(item => {
                const imgUrl = item.links[0].href;
                const title = item.data[0].title;
                const content = document.createElement("div");
                content.classList.add("content")
                content.innerHTML = `
                    <img src="${imgUrl}">
                    <h3>${title}</h3>       
                `;
                main.appendChild(content);
            });
        })
}

btn.addEventListener("click", () =>{
    let inputSearch = search.value 
    if(inputSearch != ""){
        planets();
    }     
});

