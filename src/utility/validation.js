



const IsEmailValid = (email) => {
    var regexEmail = /^[a-z A-Z 0-9_\-\.]+[@][a-z]+[\.][a-z]{2,5}$/
    if (regexEmail.test(email)) {
        return true
    }
    else {
        return false
    }
}
export { IsEmailValid }


