

// to get card c
const cards = document.getElementsByClassName('card');
console.log(cards);


let count = 1;

for(const card of cards){
    card.addEventListener('click', function(){
        const title = card.querySelector('h3').innerText;

        const price = card.querySelector('span').innerText;
        const display =  count +'.' + title + ' ' + parseFloat(price);

        // display the title and price
        const displayContent = document.getElementById('display-container');
        const p = document.createElement('p');
        p.innerText = display;
        displayContent.appendChild(p);


        count++;

        
    })
}


function setInnerTextValue(id,value){
    document.getElementById(id).innerText = value;
}

function getElementById(id){
    const element = document.getElementById(id);
    return element;
}




