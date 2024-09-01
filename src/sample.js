const cartItem = [
    {
        id: 1,
        name: "Cat",
        price: 400,
        quantity : 3
    },
    {
        id: 2,
        name: "Cat",
        price: 400,
        quantity : 3
    },
    {
        id: 3,
        name: "Cat",
        price: 400,
        quantity : 3
    },
    {
        id: 4,
        name: "Cat",
        price: 400,
        quantity : 3
    }
    ]
const productItem =     {
        id: 10,
        name: "Cat",
        price: 400
    }

// const addToCartItemArray = (cartItem, productItem) => {
    
//     let found = false;
//     cartItem.map((eachItem)=>{
//         if(eachItem.id==productItem.id){
//             eachItem.quantity +=1
//             found = true
//         }
//         return eachItem
//     })
//     if (found){
//         return cartItem;
//     }
//     return [...cartItem, {...productItem, quantity : 1}]
// }


// let res = addToCartItemArray(cartItem, productItem)
// console.log(res)

const removeFromCartItemArray = (cartItems, removeId) => {
    const newCartItems = []
    cartItems.forEach(element => {
        if(element.id!= removeId){
            newCartItems.push(element)
        }
    });
    return newCartItems
}

console.log( removeFromCartItemArray(cartItem, 10))