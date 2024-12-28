var cats = [];
const url = 'https://cataas.com/api/cats?limit=10&skip=0';
fetch(url)
    .then(response => response.json()) 
    .then(data => {
        cats = data; 
    })
    .catch(err => console.error(err));  
    
    const bodyElement = document.getElementById('body');

setTimeout(() => {


    cats.map((cat) => {

        const pElement = document.createElement("img");
        pElement.src = 'https://cataas.com/cat/' + cat._id;

        pElement.style.width = '50vh';
        pElement.style.height = '50vh';
        pElement.style.margin = '20px auto';
        pElement.style.borderRadius = '10%';
        
        bodyElement.appendChild(pElement);
        
    })
}, 1000);