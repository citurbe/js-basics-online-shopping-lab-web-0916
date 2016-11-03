var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(item) {
  var price = Math.random(0, 100)
  var obj = {}
  obj[item] = price
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {

  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else {
    var outputString = "In your cart, you have "
      for (var i=0;i<cart.length;i++) {
          var pair = cart[i]

          for(var item in pair){

            outputString += (`${item} at $${pair[item]}, `);
          }


      }
      outputString = outputString.slice(0, -2) + '.';
      console.log(outputString)
  }
}

function removeFromCart(item) {
  for(var i=0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(`${item}`)){
      cart = cart.splice(i,i)
      return cart
    }
  }
  console.log("That item is not in your cart.")

}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}
