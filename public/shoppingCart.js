window.addEventListener("load", (event) => {
  console.log(event);
  updateCartItemCount();
});

let roundDecimal = function (val, precision) {
  return (
    Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) /
    Math.pow(10, precision || 0)
  );
};

function addItem(itemId) {
  const item = document.getElementById(`item-count${itemId}`);
  const itemPrice = document.getElementById(`item-price${itemId}`);
  const itemTotalPrice = document.getElementById(`total-price${itemId}`);
  const itemCount = parseInt(item.innerText);
  const itemCounted = itemCount + 1;
  item.innerText = itemCounted;
  itemTotalPrice.innerText = roundDecimal(
    parseFloat(itemPrice.innerText) * itemCounted,
    2
  );
}

function removeItem(itemId) {
  const item = document.getElementById(`item-count${itemId}`);
  const itemPrice = document.getElementById(`item-price${itemId}`);
  const itemTotalPrice = document.getElementById(`total-price${itemId}`);
  const itemCount = parseInt(item.innerText);
  if (itemCount > 0) {
    const itemCounted = itemCount - 1;
    item.innerText = itemCounted;
    itemTotalPrice.innerText = roundDecimal(
      parseFloat(itemPrice.innerText) * itemCounted,
      2
    );
  }
}

function clearItemCount(itemId) {
  const item = document.getElementById(`item-count${itemId}`);

  const itemTotalPrice = document.getElementById(`total-price${itemId}`);

  item.innerText = "0";
  itemTotalPrice.innerText = "0";
}

function storeShoppingCart(itemData) {
  // ItemData
  const selectedItemData = JSON.parse(itemData);
  // Navbar Cart Count
  const cartBadge = document.getElementById("cart-count");
  // Session Storage Cart item count
  const cartItemCount = sessionStorage.getItem("cartItemCount");
  // Selected Items Count
  const selectedItemsCount = document.getElementById(
    `item-count${selectedItemData.id}`
  );
  const itemTotalPrice = roundDecimal(
    parseFloat(
      document.getElementById(`total-price${selectedItemData.id}`).innerText
    ),
    2
  );
  if (selectedItemsCount.innerText == 0) {
    alert("please atleast choose one item");
  }

  if (selectedItemsCount.innerText != 0) {
    const mapItemData = {
      id: selectedItemData.id,
      name: selectedItemData.name,
      imageUrl: selectedItemData.imageUrl,
      total: itemTotalPrice,
      price: selectedItemData.price,
      itemCount: parseInt(selectedItemsCount.innerText),
    };

    const mapItemDataString = JSON.stringify(mapItemData);
    if (cartItemCount == undefined) {
      if (
        sessionStorage.getItem(`cartItem${selectedItemData.id}`) == undefined
      ) {
        sessionStorage.setItem(
          `cartItem${selectedItemData.id}`,
          mapItemDataString
        );
        sessionStorage.setItem("cartItemCount", 1);
      }
    }
    if (cartItemCount != undefined) {
      if (sessionStorage.getItem(`cartItem${selectedItemData.id}`)) {
        sessionStorage.setItem(
          `cartItem${selectedItemData.id}`,
          mapItemDataString
        );
      }

      if (!sessionStorage.getItem(`cartItem${selectedItemData.id}`)) {
        sessionStorage.setItem(
          `cartItem${selectedItemData.id}`,
          mapItemDataString
        );
        sessionStorage.setItem("cartItemCount", parseInt(cartItemCount) + 1);
      }
    }
    cartBadge.innerText = sessionStorage.getItem("cartItemCount");
    closeModal(`confirm-modal${selectedItemData.id}`)
    alert('Add to cart successfully!')
  }

  // cartItemCount =

  // item count
  // item price
  // item name
  // item type
  // item id
}

function updateCartItemCount() {
  const cartBadge = document.getElementById("cart-count");
  const cartItemCount = sessionStorage.getItem("cartItemCount");
  if (cartItemCount != undefined) {
    cartBadge.innerText = cartItemCount;
  }
}

function openPaymentShoppingCart() {
  const cartDatalength = sessionStorage.length;

  let cartDataKeys = [];
  let cartDataList = [];
  
  for (let i = 0; i < cartDatalength; i++) {
    if (sessionStorage.key(i) != "cartItemCount") {
      cartDataKeys.push(sessionStorage.key(i));
    }
  }
  for (let i = 0; i < cartDataKeys.length; i++) {
    cartDataList.push(JSON.parse(sessionStorage.getItem(cartDataKeys[i])));
    

  }
  const modalBody = document.getElementById("shopping-cart-modal-body");
  
  modalBody.innerHTML = "";
  
  if(cartDataList.length == 0 ){
    modalBody.innerText = "Not Item Found! Please Select something"
  }
  for (let i = 0; i < cartDatalength; i++) {
    try {

      const modalLevel = document.createElement("nav");
      modalLevel.classList.add("level");

      const modalLevelRight = document.createElement("div");
      const modalLevelLeft = document.createElement("div");
      modalLevelRight.classList.add("level-right");
      modalLevelLeft.classList.add("level-left");
      
      
      // image
      const modalLevelItemImage = document.createElement("div");
      modalLevelItemImage.classList.add("level-item");
      modalLevelItemImage.classList.add("has-text-centered");
      const modalImage = document.createElement("img");
      modalImage.classList.add("image");
      modalImage.classList.add("is-128x128");
      modalImage.src = cartDataList[i].imageUrl;
      modalLevelItemImage.appendChild(modalImage);
      // name
      const modalLevelItemName = document.createElement("div");
      modalLevelItemName.classList.add("level-item");
      modalLevelItemName.classList.add("has-text-centered");
      const modalName = document.createElement("p");
      modalName.classList.add("heading");
      modalName.innerText = cartDataList[i].name;
      modalLevelItemName.appendChild(modalName);
      modalLevelItemName.style.width = "200px";
      // price
      const modalLevelItemPrice = document.createElement("div");
      modalLevelItemPrice.classList.add("level-item");
      modalLevelItemPrice.classList.add("has-text-centered");
      const modalTotalPrice = document.createElement("p");
      modalTotalPrice.classList.add("heading");
      modalTotalPrice.innerText = `$${cartDataList[i].total}`;
      modalLevelItemPrice.appendChild(modalTotalPrice);
      modalLevelItemPrice.style.width = "50px";
      // count
      const modalLevelItemCount = document.createElement("div");
      modalLevelItemCount.classList.add("level-item");
      modalLevelItemCount.classList.add("has-text-centered");
      const modalItemCount = document.createElement("input");
      modalItemCount.classList.add("heading");
      modalItemCount.classList.add("input");
      modalItemCount.classList.add("is-warning");
      
      modalItemCount.min = 1;
      modalItemCount.type = "number";
      
      modalItemCount.value = cartDataList[i].itemCount;
      modalItemCount.onchange = (event) => {
        console.log(event)
        const changedValue = cartDataList[i];
        let allTotal = document.getElementById('total-price-text')
        changedValue.itemCount = modalItemCount.value;

        const changedTotal = roundDecimal(
          changedValue.price * modalItemCount.value,
          2
        );
        changedValue.total = changedTotal
        sessionStorage.setItem(cartDataKeys[i], JSON.stringify(changedValue));
        console.log(changedTotal)
        allTotal.value = roundDecimal(parseFloat(changedValue.price) + parseFloat(allTotal.value),2);
        modalTotalPrice.innerText = `$${changedTotal}`;
      };
      modalLevelItemCount.appendChild(modalItemCount);
      modalLevelItemCount.style.width = "50px";

      // Count Button
      // const modalLevelItemCountButton = document.createElement("div");
      // modalLevelItemCountButton.classList.add("level-item");
      // modalLevelItemCountButton.classList.add("has-text-centered");
      // const modalItemCountButton = document.createElement("button");
      // modalItemCountButton.classList.add("button")
      // modalItemCountButton.classList.add("is-info")
      // modalItemCountButton.classList.add("is-small")
      // modalItemCountButton.innerText = '+'
      // modalItemCountButton.onclick = (event)=>{
      //   console.log(event)
      //   const changedValue = cartDataList[i];
        
      //   const value = changedValue.itemCount = parseInt(changedValue.itemCount) + 1;
      //   modalItemCount.value = value
        
        
      // }
      // modalLevelItemCountButton.appendChild(modalItemCountButton)

      // const modalLevelItemCountRemoveButton = document.createElement("div");
      // modalLevelItemCountRemoveButton.classList.add("level-item");
      // modalLevelItemCountRemoveButton.classList.add("has-text-centered");
      // const modalItemCountRemoveButton = document.createElement("button");
      // modalItemCountRemoveButton.classList.add("button")
      // modalItemCountRemoveButton.classList.add("is-danger")
      // modalItemCountRemoveButton.classList.add("is-small")
      // modalItemCountRemoveButton.innerText = '-'

      // modalLevelItemCountRemoveButton.appendChild(modalItemCountRemoveButton)
      // Level

      modalLevelLeft.appendChild(modalLevelItemImage);
      modalLevelLeft.appendChild(modalLevelItemName);
      // modalLevelRight.appendChild(modalLevelItemCountButton)
      modalLevelRight.appendChild(modalLevelItemCount);
      // modalLevelRight.appendChild(modalLevelItemCountRemoveButton)
      modalLevelRight.appendChild(modalLevelItemPrice);
      
      modalLevel.appendChild(modalLevelLeft);
      modalLevel.appendChild(modalLevelRight);
      modalBody.appendChild(modalLevel);


    } catch (e) {
      console.log(e);
    }
  }

  openModal("shopping-cart-modal");
}
function passDataToPayment(){
  const cartDataInput = document.getElementById('cart-store')
  cartDataInput.value = JSON.stringify(getSessionCartData())

  if(cartDataInput.value.length < 3 ){
    alert('please select some item first!')
    closeModal('shopping-cart-modal')
  }
  else{

    openModal('payment-card-modal')
  }
}

function getSessionCartData(){
  let keys = [];
  let items = [];
  
  for(let i = 0; i < sessionStorage.length; i ++){
    console.log(sessionStorage.key(i))
    if(sessionStorage.key(i) != 'cartItemCount'){
      items.push(JSON.parse(sessionStorage.getItem(sessionStorage.key(i))))
    }
  }
  return items
}

function clearSessionStorage(){
  sessionStorage.clear();
  location.reload();
  alert('clear store successfully!')
  closeModal('shopping-cart-modal')
}