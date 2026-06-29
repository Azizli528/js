const form = document.querySelector("form")

const name = document.getElementById("name")
const email = document.getElementById("email")
const check = document.getElementById("check")
const product = document.getElementById("product")
const date = document.getElementById("date")
const Comments = document.getElementById("Comments")
const phone = document.getElementById("phone")
const quantity = document.getElementById("quantity")


form.addEventListener("submit" , (e)=>{
    e.preventDefault()

    if(name.value === ""){
        console.log("ad yazilmalidir !!!")
        return
    }

    if(email.value === ""){
        console.log("email yazilmalidir !!!")
        return
    }

    if(phone.value === ""){
        console.log("nomre secilmelidir !!!")
        return
    }
    
    if (quantity.value.trim() === "") {
    console.log("Miqdar (Quantity) yazilmalidir !!!");
    return;
    }
    if(Comments.value === ""){
        console.log("Comment yazilmalidir !!!")
        return
    }

    if(date.value === ""){
        console.log("tarix secilmelidir !!!")
        return
    }

    if(product.value === ""){
        console.log(" product secilmelidir !!!")
        return
    }

   
    if(!check.checked){
        console.log("checkbox secilmelidir !!!")
        return
    }

    
    const selectedDelivery = document.querySelector('input[name="delivery"]:checked');

    if (!selectedDelivery) {
        console.log("Catirilma vaxti secilmelidir !!!");
        return;
    }

    const user = {
        ad: name.value,
        email: email.value,
        check: check.checked, 
        product: product.value,
        date: date.value,
        Comments: Comments.value,
        phone: phone.value,
        quantity: quantity.value,
        deliveryTime: selectedDelivery.value 
    }

    console.log(user)
})