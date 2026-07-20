const form = document.querySelector("form")

const name = document.getElementById("name")
const email = document.getElementById("email")
const check = document.getElementById("check")
const product = document.getElementById("product")
const date = document.getElementById("date")
const Comments = document.getElementById("Comments")
const phone = document.getElementById("phone")
const quantity = document.getElementById("quantity")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    document.querySelectorAll('.error-message').forEach(span => span.remove())
    document.querySelectorAll('input, select, textarea').forEach(el => el.style.borderColor = '')

    const showError = (inputElement, message) => {
        const errorSpan = document.createElement('span')
        errorSpan.className = 'error-message'
        errorSpan.innerText = message
        errorSpan.style.color = 'red'
        errorSpan.style.fontSize = '12px'
        errorSpan.style.display = 'block'
        errorSpan.style.marginTop = '4px'

        if (inputElement.name === "delivery") {
            inputElement.closest('div').appendChild(errorSpan)
        } else {
            inputElement.insertAdjacentElement('afterend', errorSpan)
            inputElement.style.borderColor = 'red'
        }
    }

    let isValid = true

    if (name.value.trim() === "") {
        showError(name, "ad yazilmalidir !!!")
        isValid = false
    }

    if (email.value.trim() === "") {
        showError(email, "email yazilmalidir !!!")
        isValid = false
    }

    if (phone.value.trim() === "") {
        showError(phone, "nomre secilmelidir !!!")
        isValid = false
    }
    
    if (quantity.value.trim() === "") {
        showError(quantity, "Miqdar (Quantity) yazilmalidir !!!")
        isValid = false
    }

    if (Comments.value.trim() === "") {
        showError(Comments, "Comment yazilmalidir !!!")
        isValid = false
    }

    if (date.value === "") {
        showError(date, "tarix secilmelidir !!!")
        isValid = false
    }

    if (product.value === "") {
        showError(product, " product secilmelidir !!!")
        isValid = false
    }
   
    if (!check.checked) {
        showError(check, "checkbox secilmelidir !!!")
        isValid = false
    }
    
    const selectedDelivery = document.querySelector('input[name="delivery"]:checked')
    if (!selectedDelivery) {
        const firstRadio = document.querySelector('input[name="delivery"]')
        if (firstRadio) {
            showError(firstRadio, "Catirilma vaxti secilmelidir !!!")
        }
        isValid = false
    }

    if (!isValid) {
        return
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