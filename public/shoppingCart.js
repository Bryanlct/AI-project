function addItem (itemId){
    const item = document.getElementById(`item-count${itemId}`);
    const itemCount = parseInt(item.innerText);
    item.innerText = itemCount + 1;
}

function removeItem (itemId){
    const item = document.getElementById(`item-count${itemId}`);
    const itemCount = parseInt(item.innerText);
    if(itemCount > 0){
        item.innerText = itemCount - 1;
    }
}