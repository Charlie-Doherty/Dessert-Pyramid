const basketOpen = document.querySelector('.basket-open');
const basketClose = document.querySelector('.basket-close');
const basket = document.querySelector('.basket');
const basketList = document.querySelector('.basket .list');
const addButtons = document.querySelectorAll('.add-button');
const overlay = document.querySelector('.overlay');
const priceText = document.querySelector('.price-text')
const total = document.querySelector('.total');

let totalItemCount = 0;

basketOpen.addEventListener('click', openBasket);
basketClose.addEventListener('click', closeBasket);
overlay.addEventListener('click', closeBasket);
addButtons.forEach(addButton => addButton.addEventListener('click', addToBasket));
basket.addEventListener('click', removeFromBasket);

function openBasket(){
    basket.classList.add('active');
    overlay.style.display = 'block';
}

function closeBasket(){
    basket.classList.remove('active');
    overlay.style.display = 'none';
}

function addToBasket(e){
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div');
    basketList.appendChild(itemDiv);

    const item = document.createElement('p');
    item.classList.add('item');
    itemDiv.appendChild(item);
    item.textContent = e.target.parentElement.children[1].textContent;

    const price = document.createElement('p');
    itemDiv.appendChild(price);
    price.textContent = e.target.parentElement.children[2].textContent;

    totalItemCount++;
    updateTotal();

    // const countDiv = document.createElement('div');
    // countDiv.classList.add('count-div');
    // itemDiv.appendChild(countDiv);

    // const increaseButton = document.createElement('button');
    // increaseButton.classList.add('increase-button');
    // countDiv.appendChild(increaseButton);
    // increaseButton.textContent = '+';

    // const count = document.createElement('input');
    // count.setAttribute('type', 'number');
    // count.classList.add('count');
    // countDiv.appendChild(count);
    // count.value = 1;

    // const decreaseButton = document.createElement('button');
    // decreaseButton.classList.add('decrease-button');
    // countDiv.appendChild(decreaseButton);
    // decreaseButton.textContent = '-';

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>'
    itemDiv.appendChild(removeButton);

    // count.addEventListener('change', changeValue);
    // function changeValue(e){
    //     if(e.target.value <= 0){
    //         e.target.value = 1;
    //     }
    //     if(e.target.value >= 100){
    //         e.target.value = 99;
    //     }
    // }

    // increaseButton.addEventListener('click', (e) =>{
    //     if(e.target.parentElement.children[1].value < 99){
    //         e.target.parentElement.children[1].value++;
    //     }
    // });

    // decreaseButton.addEventListener('click', (e) =>{
    //     if(e.target.parentElement.children[1].value > 1){
    //         e.target.parentElement.children[1].value--;
    //     }
    // });
}

function removeFromBasket(e){
    if(e.target.classList.contains('remove-button')){
        e.target.parentElement.remove();
        totalItemCount--;
        updateTotal();
    }
}

function updateTotal(){
    total.textContent = `Total: £${(priceText.textContent * totalItemCount).toFixed(2)}`;
}