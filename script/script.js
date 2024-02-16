

// to get card c
const cards = document.getElementsByClassName('card');



let count = 1;
let totalPrice = 0;

for (const card of cards) {
    card.addEventListener('click', function () {
        const title = card.querySelector('h3').innerText;
        const price = card.querySelector('span').innerText;
        const display = count + '.' + title + ':' + parseFloat(price);

        // display the title and price
        const displayContent = document.getElementById('display-container');
        const p = document.createElement('p');
        p.innerText = display;
        displayContent.appendChild(p);

        // total price
        totalPrice = totalPrice + parseFloat(price);
        console.log(totalPrice);
        setInnerTextValue('total-price', totalPrice);


        count++;


    })
}


// cupon code and apply button
const applyButton = getAnyElementById('apply-btn');
applyButton.addEventListener('click', function () {
    // get input field value and convert value
    const inputField = getAnyElementById('input-field').value;
    const inputConvert = inputField.split(' ').join('').toUpperCase();

    if (totalPrice >= 200) {
        if (inputConvert === 'SELL200') {
            const discountPrice = totalPrice * 0.2;
            setInnerTextValue('discount-price', discountPrice);
            const finalTotal = totalPrice - discountPrice;
            setInnerTextValue('final-total', finalTotal);
            getAnyElementById('input-field').value = '';

        }
        else {
            alert('incorrect cupon code');
            getAnyElementById('input-field').value = '';
        }
    }
    else {
        alert('Get cupon offer you should buy at least 200 $');
        getAnyElementById('input-field').value = '';
    }
})


// reset all option
const reset = getAnyElementById('reset');
reset.addEventListener('click', function () {
    resetAllItem();
})


// go home button
const homeButton = getAnyElementById('home-btn');
homeButton.addEventListener('click', function () {
    resetAllItem();
})


// reset all item function
function resetAllItem() {
    const Price = getAnyElementById('total-price');
    Price.innerText = '';
    const displayContent = document.getElementById('display-container');
    displayContent.innerText = '';
    setInnerTextValue('discount-price', '');
    setInnerTextValue('final-total', '');
    getAnyElementById('input-field').value = '';

}


// set inner text function
function setInnerTextValue(id, value) {
    document.getElementById(id).innerText = value;
}

// get any element by use id function
function getAnyElementById(id) {
    const element = document.getElementById(id);
    return element;
}




